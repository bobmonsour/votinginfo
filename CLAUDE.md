# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server with hot reload (eleventy --serve --quiet)
npm run build      # Build to _site/
```

There are no tests or linting configured. A `deploy` script (`wrangler deploy`) still exists in `package.json` as a manual fallback but is not the standard deploy path — see Deployment below.

## Deployment

Deployment happens automatically via **Cloudflare Workers Builds** connected to the GitHub repo (`bobmonsour/votinginfo`). Every push to `main` triggers a build + deploy. There is no manual deploy step in the normal flow. The `wrangler deploy` / `npm run deploy` scripts remain as escape hatches but should not be used in normal operation.

**Build watch paths** are configured in the Workers project Settings → Build → Build watch paths so that pushes touching only non-build files do not trigger a build. Current excludes: `.claude/*`, `CLAUDE.md`, `README.md`, `research/*`, `docs/*`, `.gitignore`. Pushes touching only those paths produce no build and no deploy — useful for skill edits, agent instruction updates, and research reports. (The design handoff folder lives under `docs/` and is excluded by the `docs/*` pattern.)

## Rules

- **Never deploy or offer to deploy.** Pushing to `main` triggers a Cloudflare Workers Builds deploy automatically, so **pushing is deploying**. After making a fix or change to the site, inform the user that the fix has been applied and stop there — leave the work uncommitted, or committed locally if appropriate. Do not push to `main`, run `npm run deploy`, or run `wrangler deploy` unless the user explicitly asks. Never suggest pushing or deploying as a routine next step.

## Architecture

This is a static site built with **Eleventy 3** (Nunjucks templates) that provides voter registration and voting requirements for all 50 US states + DC. It deploys to **Cloudflare Workers** automatically via **Cloudflare Workers Builds** on every push to `main` (see Deployment above).

### Data flow

`_data/states.json` is the single source of truth — a 51-entry array where each object has fields like `abbreviation`, `sameDayRegistration`, `registrationMethods`, `earlyVoting`, `mailInVoting`, `recentLegislation`, `pendingLegislation`, `changes`, etc. `_data/stateNews.json` stores per-state news items captured during voting-research skill runs. `_data/latestRunSummary.json` stores a short prose summary of the most recent run's notable themes; it is overwritten on each run (not appended) and feeds the home page's "Summary of latest election news" section.

Eleventy reads these at build time and feeds them into these template paths:

1. **Home page** (`content/index.njk`) — editorial layout in this order: masthead (title + lede + run stats), "Summary of latest election news" section (prose paragraph from `_data/latestRunSummary.json`, hidden when empty), Recent News grid (top items from the latest research run), a "Browse news by state" A–Z rail linking to each state's `#recent-news`, then the by-state section with search + filter controls, a result-row showing the count and a "Last updated" date (derived from `latestVerified`), an inline "Jump to a state" A–Z rail, and a card grid that iterates all 51 states using `_includes/state-card.njk`. Each card embeds key data as `data-*` attributes on the DOM element for client-side filtering.
2. **State detail pages** (`content/states.njk`) — uses Eleventy pagination with `size: 1` to generate 51 pages at `/states/{abbr}/`, each rendered with `_includes/layouts/state.njk`. The Sources section was removed during the home redesign since every state had the same two-item list.
3. **Glossary page** (`content/glossary.njk`) — definitions of voting-related terms used across the site.
4. **Change log page** (`content/changes.njk`) — per-state change tracking with "By State" and "By Date" toggle views.
5. **About page** (`content/about.njk`) — site background and research methodology.

### Client-side filtering

`public/js/filter.js` provides search and filtering on the home page without any network calls. It reads `data-*` attributes on `.state-card` elements, combines text search (by state name/abbreviation) with toggle filters using AND logic, and sets `card.hidden` to control visibility. The visible count updates via an `aria-live` region. The inline "Jump to a state" rail (`.inline-rail`) is hidden whenever any filter or search query is active so the rail can't link to hidden cards.

### Eleventy config

In `eleventy.config.js`: input is `content/`, includes are `_includes/`, data is `_data/`, output is `_site/`. The `public/` directory is copied through as static assets. Custom Nunjucks filters include `lower`, `slug`, `formatDate` (converts `YYYY-MM-DD` to `Mon D, YYYY`), `rssDate`, `monthLabel`, `groupByDate`, and a family of news/data helpers consumed by the home page: `recentNews` (per-state items), `recentNewsAll` (deduped by `url|title` + sorted across all runs/states with optional limit), `latestRunNews` / `latestRunAbbrs` / `latestRunCount` (items/abbrs/count from the most recent run only), `allNewsCount`, and `latestVerified` (the max `lastVerified` date across states, used for the home-page "Last updated" stamp). The home-page Recent News grid uses `recentNewsAll(states, 8)` (**not** `latestRunNews`) so it stays full and deduped even when a single run is thin; `latestRunNews` still backs the masthead's "news items this run" stat and is itself deduped by `url|title`.

`eleventy.config.js` also registers an `eleventy.before` handler, `checkNewsDuplication`, that **fails the build** when the latest run duplicates one story across too many states — see News duplication guardrails below.

### Recent news

`_data/stateNews.json` stores news items gathered by the voting-research skill. It has a `runs` array; each run has a `date` and a `states` object keyed by abbreviation, where each state holds up to 5 news items with `title`, `source`, `url`, `date`, and `summary`. State detail pages render a "Recent News" section (id `recent-news`) between Additional Notes and Recent Legislation, showing items from the latest run. The section is hidden for states with no news. The home page surfaces recent news at the top in a `.news-grid` block, sourced from `recentNewsAll(states, 8)` — the 8 most recent **distinct** stories across runs, so the grid stays full and free of duplicates. The shared `_includes/news-item.njk` partial renders each item for both the home page block and the All News page so the markup stays in sync.

### News duplication guardrails

A single national/federal story (e.g., a federal court ruling) is relevant to every state and will surface in per-state searches across the board. If it gets recorded as the news item for many states, it floods the home-page "Recent news across all states" grid with the same event and crowds out state-specific reporting. Three layers guard against this:

1. **Capture rule (primary, source-level).** The voting-research skill's "National stories" rule (`SKILL.md`) instructs the run to record a national event for **at most one** representative state (default DC for federal-court/agency stories), never backfilling other states with it. This is a natural-language instruction to the LLM-driven skill — a strong but not guaranteed defense.
2. **Display dedup (cosmetic backstop).** `recentNewsAll` (home grid) and `latestRunNews` both dedup by `url|title`, so exact repeats never render more than once. This does **not** collapse the same event reported by different outlets (different URL *and* headline).
3. **Build-time check (hard backstop).** `checkNewsDuplication` in `eleventy.config.js` runs on `eleventy.before`, inspects the **latest run**, and counts how many distinct states carry each story keyed by exact URL and by normalized title. If any single story spans more than `MAX_STATES_PER_STORY` (currently **5**) states, it throws — Eleventy aborts with a fatal error naming the offending stories. In the unattended news routine this means a polluted run **fails its Cloudflare build and never deploys**; the prior good version stays live and the failure shows in the build dashboard. Tune the threshold via `MAX_STATES_PER_STORY`. Limitation: it cannot catch one event spread across many states via entirely different outlets (no shared URL or headline) — layer 1 remains the front-line defense there.

### Latest run summary

`_data/latestRunSummary.json` holds a short summary of the most recent run's notable themes. Shape: `{ date, items: [{ text, url?, abbr? }] }`. The voting-research skill (News update and Full run modes) overwrites this file at the end of each run after news items are written and verified; it does not append. Items with a `url` render as inline links; items without a `url` render as plain text. The home page renders the items as a bulleted list (`<ul class="run-summary">`) in the "Summary of latest election news" section (id `run-summary`), styled by `.run-summary` in `public/css/style.css`. The template caps the rendered list at the first 5 items via `loop.index <= 5`, so the skill should aim to produce exactly 5 of the most notable items. The section is hidden automatically when `items` is empty.

### Legislation tracking

Each state entry has `recentLegislation` and `pendingLegislation` arrays. Each item has `bill`, `year`, `description`, `status`, `dateAdded`, and `active` (boolean toggle for display). State detail pages (`_includes/layouts/state.njk`) conditionally render these as sections after Recent News, in the order Recent Legislation then Pending Legislation, just before the Change Log.

### Navigation

The header nav order is: Home | Glossary | Change Log | About. All footer links open in new tabs.

### Change log

Each state entry has a `changes` array with `date`, `field` (human-readable label like "Same-Day Registration"), and `description` (plain text only — no HTML). The change log page (`content/changes.njk`) offers "By State" and "By Date" toggle views. The by-date view is built client-side from `data-*` attributes on the by-state list items. Dates display in `Mon D, YYYY` format via the `formatDate` filter (Nunjucks) and a JS `fmtDate` helper. When `field` is "Recent News", both the Nunjucks templates and the JS by-date builder append a "(view)" link pointing to `/states/{abbr}/#recent-news`.

### Glossary

The glossary page (`content/glossary.njk`) defines 13 voting-related terms using a `<dl>` definition list with the `.glossary` class. Styled with bold navy terms and gray definitions.

### Skills

The project includes a `/voting-research` skill (`.claude/skills/voting-research/SKILL.md`) with four run modes:

- **Full run** — data verification + news capture
- **Requirements update** — data verification only
- **News update** — news capture only
- **News update (autonomous)** — same as News update but skips branch-name confirmation and final review; auto-merges into `main`, pushes, and deletes the research branch. Used exclusively by the scheduled daily routine.

Full and Requirements modes verify state data against authoritative sources, save a report at `research/MM-YYYY/periodic-research-MM-DD-YYYY-HHMM.md`, and present findings one change at a time for approval. News modes gather up to 5 recent election news items per state from reputable sources, append a run to `_data/stateNews.json`, add "Recent News" change-log entries to `_data/states.json`, and overwrite `_data/latestRunSummary.json` with a short prose summary of the run's notable themes. News capture follows the "National stories" rule (record a national/federal event for at most one representative state — see News duplication guardrails above); violating it will fail the build. Interactive modes stop after committing and present merge/discard options; autonomous mode does the merge inline.

### Scheduled routine

Two scheduled remote agents run the `/voting-research` skill in autonomous News update mode on weekdays (Mon–Fri), pinned to Pacific Daylight Time (they drift by an hour in PST winter unless updated):

- **`Weekday news update (6am PT)`** — trigger ID `trig_01K2PgeQ7XfWLBT2R9d1hJwg`, cron `0 13 * * 1-5` UTC (6:00am Pacific). Dashboard: https://claude.ai/code/routines/trig_01K2PgeQ7XfWLBT2R9d1hJwg
- **`Weekday news update (5pm PT)`** — trigger ID `trig_01F6PoF3mzTtRVLCM8CMwB28`, cron `0 0 * * 2-6` UTC (5:00pm Pacific; the run crosses midnight UTC, so it fires Tue–Sat in UTC). Dashboard: https://claude.ai/code/routines/trig_01F6PoF3mzTtRVLCM8CMwB28

Both share the identical prompt/config. Because pushes to `main` auto-deploy via Cloudflare Workers Builds, each run handles the full content-refresh cycle without human intervention: clone → news capture → commit on research branch → fast-forward merge → push → branch deletion → CF build/deploy.

Both routines run **`claude-sonnet-5`** (set in each trigger's `job_config.ccr.session_context.model`; to change it, update the routine via the `/schedule` skill or the dashboard — it only affects future runs). Their `allowed_tools` is `Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch` (no `Task`/`Agent`), so the run is a single agent that parallelizes only at the tool-call level, not by spawning subagents.

**Workflows are disabled** for this repo via `"disableWorkflows": true` in `.claude/settings.json` (committed, so it reaches the cloud clone). This is deliberate: a run once fanned the 51-state gather into a dynamic multi-agent workflow, which (a) pauses an unattended run on the "multi-agent workflow usage warning" permission prompt, and (b) gives every leaf subagent the prompt's blanket git authorization, so one of them committed and pushed to `main` on its own before the orchestrator intended. Disabling workflows forces the single-agent path — the sequential gather → commit → merge → push the prompt describes, with no rogue subagent pushes. Note `.claude/*` is in the CF build-watch excludes, so committing this setting does not trigger a deploy, but the routine still only picks it up after the change is pushed to `main` (it clones fresh each run). If workflows are ever re-enabled for speed, add `Task` to `allowed_tools` and tighten the prompt so only the orchestrator commits/pushes.

### State flags

State cards and detail pages show flag images. The 50 states use `flagcdn.com/w40/us-{abbr}.png` (w80 on detail pages). DC uses a local SVG at `/img/flags/dc.svg`. The source switch is a Nunjucks conditional on `state.abbreviation == "DC"`.

### CSS

Vanilla CSS in `public/css/style.css` using custom properties. Two overlapping token sets coexist: the original UI tokens (`--navy`, `--green`, `--red`, `--gray-*`, `--radius`) and a "Home redesign tokens" block (`--ink*`, `--paper*`, `--rule*`, `--accent` burnt orange, `--good*`, `--bad*`) used by the editorial layout. Typography uses three families: `--font-serif` (Source Serif 4) for headlines and pull quotes, `--font-sans` (IBM Plex Sans) for body and UI chrome, and `--font-mono` (IBM Plex Mono) for badges, abbreviations, and section eyebrows. Mobile-first responsive: single column cards → 2-col at 640px → auto-fill grid at 1024px (min card width `--card-min`, 320px). State detail uses flexbox column→row with a sticky sidebar on desktop.

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
