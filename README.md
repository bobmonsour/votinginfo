# US Voting Info

Live at [usvoting.info](https://usvoting.info).

A static website providing voter registration and voting requirements for all 50 US states plus
Washington DC, along with per-state election news gathered on a recurring schedule. Built with
[Eleventy](https://www.11ty.dev/) and hosted on [Cloudflare Workers](https://workers.cloudflare.com/).

This repository is the working source for the live site. It is published for reference rather than
as a template — there are no setup or self-hosting instructions here.

## Features

- **51 jurisdictions** — Detailed voting information for every state and DC
- **Search and filter** — Real-time client-side search by state name or abbreviation, combinable
  with five filters: same-day registration, online registration, early voting, no-excuse mail-in,
  and excuse-required mail-in
- **Individual state pages** — Eligibility, ID requirements, registration methods, early and
  mail-in voting rules, felony voting rules, required documentation, recent news, recent and
  pending legislation, a per-state change log, and a link to the official state election website
- **Recent news** — Per-state election news with linked sources, gathered on a recurring schedule
  from reputable outlets (Brennan Center, NCSL, AP, Reuters, state newspapers, and others)
- **All News page** — A single cross-state feed of the most recent items
- **RSS** — A site-wide news feed at `/all-news/feed.xml` and a per-state feed at
  `/state-news/{abbr}/feed.xml`
- **Glossary** — Definitions of the voting terms used across the site
- **Change log** — Per-state change tracking with human-readable field labels and a "By Date"
  toggle view
- **State flags** — Flag images on cards and detail pages (via flagcdn.com, with a local SVG for DC)
- **Responsive design** — Mobile-first layout with CSS grid
- **Accessible** — Skip link, ARIA labels, semantic HTML, keyboard navigation
- **Lightweight** — Vanilla CSS and JS, no frameworks

## Pages

| Path | Source |
|---|---|
| `/` | `content/index.njk` — run summary, recent news grid, and the filterable 51-state card grid |
| `/states/{abbr}/` | `content/states.njk` — 51 paginated detail pages |
| `/all-news/` | `content/all-news.njk` |
| `/glossary/` | `content/glossary.njk` |
| `/change-log/` | `content/change-log.njk` |
| `/about/` | `content/about.njk` — site background and research methodology |

## Tech Stack

- **Eleventy 3** (Nunjucks templates)
- **Vanilla CSS** with custom properties
- **Vanilla JavaScript** for filtering
- **Cloudflare Workers** for hosting, with **Workers Builds** for continuous deployment

## Repository Layout

```
content/            Page templates and feeds
_data/
  states.json       Voting data for all 51 jurisdictions
  stateNews.json    Per-state election news, organized by research run
  latestRunSummary.json  Prose summary of the most recent run (home page)
  glossary.json     Glossary terms and definitions
  metadata.js       Site metadata
_includes/
  layouts/          Base and state detail layouts
  state-card.njk    Card component for the home page grid
  news-item.njk     Shared news item partial
public/
  css/style.css     All styles
  js/filter.js      Search and filter logic
  js/info-popover.js  Inline info popovers
  img/              Flags, icons, OG image
eleventy.config.js  Eleventy config, custom filters, and the build-time news check
research/           Dated research reports from verification runs
docs/               Project documentation, design handoffs, and accuracy reports
```

Note that `_data/` and `_includes/` sit at the repository root, not inside `content/`; Eleventy is
configured to reach them via `../`.

## Data

`_data/states.json` is the single source of truth. Each of the 51 entries includes registration
deadlines, ID requirements, registration methods, early voting details, mail-in voting rules,
felony voting rules, required documentation, confidence levels, last-verified dates, per-state
sources, change history, recent legislation, and pending legislation.

`_data/stateNews.json` holds election news organized by research run date. Each run captures up to
five items per state with title, source, URL, date, and summary.

Sources include official state election websites, NCSL, Ballotpedia, Vote.org, the Brennan Center,
AP News, Reuters, and state newspapers.

## How Updates Happen

Content updates are automated end to end.

**Research runs.** A project-local Claude Code skill (`/voting-research`) performs two kinds of
work: verifying state requirements against authoritative sources, and capturing recent election
news per state. Verification runs check each state against a tiered source list, write a dated
report to `research/`, and record any changes to `_data/states.json` with a change-log entry. News
runs append a run to `_data/stateNews.json`, add "Recent News" change-log entries, and overwrite
`_data/latestRunSummary.json` with a summary of the run's notable themes.

**Schedule.** Two scheduled cloud agents run the skill in autonomous news-capture mode on weekdays,
at 6am and 5pm Pacific. Each run clones the repo, gathers news, commits to a research branch,
fast-forwards it into `main`, pushes, and deletes the branch.

**Deployment.** Cloudflare Workers Builds is connected to the GitHub repository and builds and
deploys on every push to `main` — pushing is deploying. There is no manual deploy step in the
normal flow. Build watch paths exclude documentation, research reports, and agent configuration, so
pushes touching only those paths do not rebuild the site.

**Build-time guardrails.** A national story is relevant to every state and can otherwise flood the
home page. An `eleventy.before` check in `eleventy.config.js` inspects the latest run and fails the
build if any single story (matched by URL or normalized title) appears for more than five states.
A polluted run therefore fails its Cloudflare build and never deploys; the previous version stays
live.

## Built With Claude Code

This site was designed and built with [Claude Code](https://claude.com/claude-code) using the
[Superpowers](https://github.com/anthropics/claude-plugins-official) plugin, which supplies the
structured workflows — brainstorming, planning, and code review — behind most of the feature work
here. The recurring research and news runs described above are driven by the same setup, so a large
share of the content updates in this repository's history were made this way as well.
