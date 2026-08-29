# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

There are no tests or linting configured. A `deploy` script (`wrangler deploy`) still exists in `package.json` as a manual fallback but is not the standard deploy path — see Deployment below.

## Deployment

Deployment happens automatically via **Cloudflare Workers Builds** connected to the GitHub repo (`bobmonsour/votinginfo`). Every push to `main` triggers a build + deploy. There is no manual deploy step in the normal flow. The `wrangler deploy` / `npm run deploy` scripts remain as escape hatches but should not be used in normal operation.

**Build watch paths** are configured in the Workers project Settings → Build → Build watch paths so that pushes touching only non-build files do not trigger a build. Current excludes: `.claude/*`, `CLAUDE.md`, `README.md`, `research/*`, `docs/*`, `.gitignore`. Pushes touching only those paths produce no build and no deploy — useful for skill edits, agent instruction updates, and research reports. (The design handoff folder lives under `docs/` and is excluded by the `docs/*` pattern.)

## Rules

- **Never deploy or offer to deploy.** Pushing to `main` triggers a Cloudflare Workers Builds deploy automatically, so **pushing is deploying**. After making a fix or change to the site, inform the user that the fix has been applied and stop there — leave the work uncommitted, or committed locally if appropriate. Do not push to `main`, run `npm run deploy`, or run `wrangler deploy` unless the user explicitly asks. Never suggest pushing or deploying as a routine next step.

## Architecture

### Data flow

`_data/states.json` is the single source of truth (51 entries — 50 states + DC). `_data/stateNews.json` holds per-state news items captured during voting-research runs, and `_data/latestRunSummary.json` holds the most recent run's summary.

State detail pages are generated from `content/states.njk` via Eleventy pagination (`size: 1`) into `/states/{abbr}/`. The Sources section was removed during the home redesign since every state had the same two-item list — don't add it back.

### Eleventy config

The home-page Recent News grid uses `recentNewsAll(states, 8)` — **not** `latestRunNews` — so it stays full and deduped even when a single run is thin. `latestRunNews` still backs the masthead's "news items this run" stat and is itself deduped by `url|title`.

`eleventy.config.js` also registers an `eleventy.before` handler, `checkNewsDuplication`, that **fails the build** when the latest run duplicates one story across too many states — see News duplication guardrails below.

### News duplication guardrails

A single national/federal story (e.g., a federal court ruling) is relevant to every state and will surface in per-state searches across the board. If it gets recorded as the news item for many states, it floods the home-page "Recent news across all states" grid with the same event and crowds out state-specific reporting. Three layers guard against this:

1. **Capture rule (primary, source-level).** The voting-research skill's "National stories" rule (`SKILL.md`) instructs the run to record a national event for **at most one** representative state (default DC for federal-court/agency stories), never backfilling other states with it. This is a natural-language instruction to the LLM-driven skill — a strong but not guaranteed defense.
2. **Display dedup (cosmetic backstop).** `recentNewsAll` (home grid) and `latestRunNews` both dedup by `url|title`, so exact repeats never render more than once. This does **not** collapse the same event reported by different outlets (different URL *and* headline).
3. **Build-time check (hard backstop).** `checkNewsDuplication` in `eleventy.config.js` runs on `eleventy.before`, inspects the **latest run**, and counts how many distinct states carry each story keyed by exact URL and by normalized title. If any single story spans more than `MAX_STATES_PER_STORY` (currently **5**) states, it throws — Eleventy aborts with a fatal error naming the offending stories. In the unattended news routine this means a polluted run **fails its Cloudflare build and never deploys**; the prior good version stays live and the failure shows in the build dashboard. Tune the threshold via `MAX_STATES_PER_STORY`. Limitation: it cannot catch one event spread across many states via entirely different outlets (no shared URL or headline) — layer 1 remains the front-line defense there.

### News sources by state

`/news-sources/` (`content/news-sources.njk`) lists, per state, every outlet cited in that
state's captured news, each linking to the outlet's home page in a new tab. It is reached from a
"News Sources by State" button in the `/all-news/` page header.

The list is **derived, not stored**. `_data/newsSources.js` rescans the full `stateNews.json`
corpus on every build (~5ms over 3,700 items) — there is deliberately no persisted sources file
and no step in the voting-research skill to maintain one. A new source therefore appears on the
first build after the first news item that cites it, and cannot drift out of sync with the news
data. Do not "optimize" this into an incremental append: the rescan is cheap, and a second source
of truth would silently under-report when a run fails mid-write.

Dedupe rules, in order: drop items whose host is in `REPUBLISHERS` (yahoo.com, msn.com — the URL
points at the republisher, not the source); collapse to one row per `www.`-stripped host, labeled
with that host's most-used source name; then collapse hosts that resolved to the same display name
(npr.org / apps.npr.org), keeping the shortest host. Ties break alphabetically so the same corpus
always produces byte-identical output.

### Latest run summary

`_data/latestRunSummary.json` holds a short summary of the most recent run's notable themes. Shape: `{ date, items: [{ text, url?, abbr? }] }`. The voting-research skill (News update and Full run modes) overwrites this file at the end of each run after news items are written and verified; it does not append. Items with a `url` render as inline links; items without a `url` render as plain text. The home page renders the items as a bulleted list (`<ul class="run-summary">`) in the "Summary of latest election news" section (id `run-summary`), styled by `.run-summary` in `public/css/style.css`. The template caps the rendered list at the first 5 items via `loop.index <= 5`, so the skill should aim to produce exactly 5 of the most notable items. The section is hidden automatically when `items` is empty.

### Change log

A `changes` entry's `description` must be **plain text only — no HTML**.

The change log tracks changes to voting **rules, requirements, and legislation** only. The `substantiveChanges` filter in `eleventy.config.js` excludes entries whose `field` is in `NON_SUBSTANTIVE_FIELDS` (currently just `"Recent News"`) from both `content/change-log.njk` and the per-state Change Log section in `_includes/layouts/state.njk`. It is a **denylist on purpose** — requirements runs coin new field labels as needed, and an allowlist would silently drop them. Both views must stay filtered or they will disagree about what counts as a change.

History: news runs used to append a boilerplate `"Recent News"` / "Added recent news items" entry per state per run, which grew to 2,134 of 2,295 changes (93%) and buried the 161 substantive ones. The skill no longer writes them (see `SKILL.md` → "Change log entries for news"); the filter stays because the existing 2,134 remain in `_data/states.json`. Don't "clean up" the filter as dead code. The by-date view is the default because filtering drops it from 92 date groups to 15.

### Skills

`/voting-research` (`.claude/skills/voting-research/SKILL.md`) — the four run modes (Full, Requirements update, News update, News update autonomous), the source priority tiers, the fetch fallback ladder, and the robots.txt disallow list all live in that file. Keep them there; do not mirror them here. The scheduled routine below uses the autonomous News update mode.

### Scheduled routine

Two scheduled remote agents run the `/voting-research` skill in autonomous News update mode on weekdays (Mon–Fri), pinned to Pacific Daylight Time (they drift by an hour in PST winter unless updated):

- **`Weekday news update (6am PT)`** — trigger ID `trig_01K2PgeQ7XfWLBT2R9d1hJwg`, cron `0 13 * * 1-5` UTC (6:00am Pacific). Dashboard: https://claude.ai/code/routines/trig_01K2PgeQ7XfWLBT2R9d1hJwg
- **`Weekday news update (5pm PT)`** — trigger ID `trig_01F6PoF3mzTtRVLCM8CMwB28`, cron `0 0 * * 2-6` UTC (5:00pm Pacific; the run crosses midnight UTC, so it fires Tue–Sat in UTC). Dashboard: https://claude.ai/code/routines/trig_01F6PoF3mzTtRVLCM8CMwB28

Both share the identical prompt/config. Because pushes to `main` auto-deploy via Cloudflare Workers Builds, each run handles the full content-refresh cycle without human intervention: clone → news capture → commit on research branch → fast-forward merge → push → branch deletion → CF build/deploy.

Both routines run **`claude-sonnet-5`** (set in each trigger's `job_config.ccr.session_context.model`; to change it, update the routine via the `/schedule` skill or the dashboard — it only affects future runs). Their `allowed_tools` is `Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch` (no `Task`/`Agent`), so the run is a single agent that parallelizes only at the tool-call level, not by spawning subagents.

**Workflows are disabled** for this repo via `"disableWorkflows": true` in `.claude/settings.json` (committed, so it reaches the cloud clone). This is deliberate: a run once fanned the 51-state gather into a dynamic multi-agent workflow, which (a) pauses an unattended run on the "multi-agent workflow usage warning" permission prompt, and (b) gives every leaf subagent the prompt's blanket git authorization, so one of them committed and pushed to `main` on its own before the orchestrator intended. Disabling workflows forces the single-agent path — the sequential gather → commit → merge → push the prompt describes, with no rogue subagent pushes. Note `.claude/*` is in the CF build-watch excludes, so committing this setting does not trigger a deploy, but the routine still only picks it up after the change is pushed to `main` (it clones fresh each run). If workflows are ever re-enabled for speed, add `Task` to `allowed_tools` and tighten the prompt so only the orchestrator commits/pushes.

### CSS

Vanilla CSS in `public/css/style.css`. Gotcha: two overlapping token sets coexist — the original UI tokens (`--navy`, `--green`, `--red`, `--gray-*`, `--radius`) and a "Home redesign tokens" block (`--ink*`, `--paper*`, `--rule*`, `--accent` burnt orange, `--good*`, `--bad*`) used by the editorial layout. Check which set a component already uses before adding a color.

<!-- worklog:start -->
## Worklog

When wrapping up a session here (I say "done" / "wrap up"), or when I say "log this",
record a worklog entry to the projects registry — run from this directory so the slug
auto-detects:

    projects log-note "<one-sentence summary of what got done>
    Next: <the next step to resume from>"

This writes a dated entry to the project's Notes in the registry; it does not modify
this repo. Keep it to the summary + Next line — detail lives in git history.
<!-- worklog:end -->
