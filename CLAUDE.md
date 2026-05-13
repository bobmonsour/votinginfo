# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server with hot reload (eleventy --serve --quiet)
npm run build      # Build to _site/
npm run deploy     # Build + deploy to Cloudflare Workers (wrangler deploy)
```

There are no tests or linting configured.

## Rules

- **Never deploy or offer to deploy.** After making a fix or change to the site, inform the user that the fix has been applied. Do not run `npm run deploy` unless the user explicitly asks to deploy. Never suggest deploying — do not say "commit and deploy" or similar. If suggesting a commit, suggest committing and pushing instead.

## Architecture

This is a static site built with **Eleventy 3** (Nunjucks templates) that provides voter registration and voting requirements for all 50 US states + DC. It deploys to **Cloudflare Workers** via Wrangler.

### Data flow

`_data/states.json` is the single source of truth — a 51-entry array where each object has fields like `abbreviation`, `sameDayRegistration`, `registrationMethods`, `earlyVoting`, `mailInVoting`, `recentLegislation`, `pendingLegislation`, `changes`, etc. `_data/stateNews.json` stores per-state news items captured during voting-research skill runs.

Eleventy reads these at build time and feeds them into these template paths:

1. **Home page** (`content/index.njk`) — editorial layout in this order: masthead (title + lede + run stats), Recent News grid (top items from the latest research run), a "Browse news by state" A–Z rail linking to each state's `#recent-news`, then the by-state section with search + filter controls, a result-row showing the count and a "Last updated" date (derived from `latestVerified`), an inline "Jump to a state" A–Z rail, and a card grid that iterates all 51 states using `_includes/state-card.njk`. Each card embeds key data as `data-*` attributes on the DOM element for client-side filtering.
2. **State detail pages** (`content/states.njk`) — uses Eleventy pagination with `size: 1` to generate 51 pages at `/states/{abbr}/`, each rendered with `_includes/layouts/state.njk`. The Sources section was removed during the home redesign since every state had the same two-item list.
3. **Glossary page** (`content/glossary.njk`) — definitions of voting-related terms used across the site.
4. **Change log page** (`content/changes.njk`) — per-state change tracking with "By State" and "By Date" toggle views.
5. **About page** (`content/about.njk`) — site background and research methodology.

### Client-side filtering

`public/js/filter.js` provides search and filtering on the home page without any network calls. It reads `data-*` attributes on `.state-card` elements, combines text search (by state name/abbreviation) with toggle filters using AND logic, and sets `card.hidden` to control visibility. The visible count updates via an `aria-live` region. The inline "Jump to a state" rail (`.inline-rail`) is hidden whenever any filter or search query is active so the rail can't link to hidden cards.

### Eleventy config

In `eleventy.config.js`: input is `content/`, includes are `_includes/`, data is `_data/`, output is `_site/`. The `public/` directory is copied through as static assets. Custom Nunjucks filters include `lower`, `slug`, `formatDate` (converts `YYYY-MM-DD` to `Mon D, YYYY`), `rssDate`, `monthLabel`, `groupByDate`, and a family of news/data helpers consumed by the home page: `recentNews` (per-state items), `recentNewsAll` (deduped + sorted across all runs/states with optional limit), `latestRunNews` / `latestRunAbbrs` / `latestRunCount` (items from the most recent run only), `allNewsCount`, and `latestVerified` (the max `lastVerified` date across states, used for the home-page "Last updated" stamp).

### Recent news

`_data/stateNews.json` stores news items gathered by the voting-research skill. It has a `runs` array; each run has a `date` and a `states` object keyed by abbreviation, where each state holds up to 5 news items with `title`, `source`, `url`, `date`, and `summary`. State detail pages render a "Recent News" section (id `recent-news`) between Additional Notes and Recent Legislation, showing items from the latest run. The section is hidden for states with no news. The home page also surfaces the latest run's news at the top in a `.news-grid` block. The shared `_includes/news-item.njk` partial renders each item for both the home page block and the All News page so the markup stays in sync.

### Legislation tracking

Each state entry has `recentLegislation` and `pendingLegislation` arrays. Each item has `bill`, `year`, `description`, `status`, `dateAdded`, and `active` (boolean toggle for display). State detail pages (`_includes/layouts/state.njk`) conditionally render these as sections after Recent News, in the order Recent Legislation then Pending Legislation, just before the Change Log.

### Navigation

The header nav order is: Home | Glossary | Change Log | About. All footer links open in new tabs.

### Change log

Each state entry has a `changes` array with `date`, `field` (human-readable label like "Same-Day Registration"), and `description` (plain text only — no HTML). The change log page (`content/changes.njk`) offers "By State" and "By Date" toggle views. The by-date view is built client-side from `data-*` attributes on the by-state list items. Dates display in `Mon D, YYYY` format via the `formatDate` filter (Nunjucks) and a JS `fmtDate` helper. When `field` is "Recent News", both the Nunjucks templates and the JS by-date builder append a "(view)" link pointing to `/states/{abbr}/#recent-news`.

### Glossary

The glossary page (`content/glossary.njk`) defines 13 voting-related terms using a `<dl>` definition list with the `.glossary` class. Styled with bold navy terms and gray definitions.

### Skills

The project includes a `/voting-research` skill (`.claude/skills/voting-research/SKILL.md`) with two run modes: **Full run** (data verification + news capture) and **News only** (just news). Full runs verify state data against authoritative sources, produce a report at `docs/periodic-research-MM-DD-YYYY.md`, and present findings before making changes. Both modes gather up to 5 recent election news items per state from reputable sources, append a run to `_data/stateNews.json`, and add "Recent News" change log entries to `_data/states.json`.

### State flags

State cards and detail pages show flag images. The 50 states use `flagcdn.com/w40/us-{abbr}.png` (w80 on detail pages). DC uses a local SVG at `/img/flags/dc.svg`. The source switch is a Nunjucks conditional on `state.abbreviation == "DC"`.

### CSS

Vanilla CSS in `public/css/style.css` using custom properties. Two overlapping token sets coexist: the original UI tokens (`--navy`, `--green`, `--red`, `--gray-*`, `--radius`) and a "Home redesign tokens" block (`--ink*`, `--paper*`, `--rule*`, `--accent` burnt orange, `--good*`, `--bad*`) used by the editorial layout. Typography uses three families: `--font-serif` (Source Serif 4) for headlines and pull quotes, `--font-sans` (IBM Plex Sans) for body and UI chrome, and `--font-mono` (IBM Plex Mono) for badges, abbreviations, and section eyebrows. Mobile-first responsive: single column cards → 2-col at 640px → auto-fill grid at 1024px (min card width `--card-min`, 320px). State detail uses flexbox column→row with a sticky sidebar on desktop.
