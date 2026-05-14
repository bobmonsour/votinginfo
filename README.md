# US Voting Info

Currently live at [US Voter Registration and Voting Requirements](https://usvoting.info).

A static website providing voter registration and voting requirements for all 50 US states plus Washington DC. Built with [Eleventy](https://www.11ty.dev/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/).

A test line to verify CF Workers build and deploy process.

## Features

- **51 jurisdictions** — Detailed voting info for every state and DC
- **Search and filter** — Real-time client-side search by state name/abbreviation, with combinable filters (same-day registration, online registration, early voting, no-excuse mail-in, excuse-required mail-in, all mail-in)
- **Individual state pages** — Full details including eligibility, ID requirements, registration methods, early/mail-in voting rules, felony voting rules, recent news, recent and pending legislation, sourced links, and links to official election websites
- **Recent news** — Per-state election news with linked sources, gathered periodically from reputable outlets (Brennan Center, NCSL, AP, state newspapers, etc.)
- **Glossary** — Definitions of 13 voting-related terms used across the site
- **About page** — Site background and research methodology
- **Change log** — Per-state change tracking with human-readable field labels and a "By Date" toggle view
- **Data verification banner** — Site-wide notice while data is being verified state by state
- **State flags** — Flag images on cards and detail pages (via flagcdn.com, with a local SVG for DC)
- **Responsive design** — Mobile-first layout with CSS grid
- **Accessible** — Skip link, ARIA labels, semantic HTML, keyboard navigation
- **Lightweight** — Vanilla CSS and JS, no frameworks

## Tech Stack

- **Eleventy 3** (Nunjucks templates)
- **Vanilla CSS** with custom properties
- **Vanilla JavaScript** for filtering
- **Cloudflare Workers** for hosting

## Project Structure

```
content/            Page templates (home, state pages, glossary, change log, about)
  _data/
    states.json     Voting data for all 51 jurisdictions
    stateNews.json  Per-state election news captured by research skill
    metadata.js     Site metadata
  _includes/
    layouts/        Base and state detail layouts
    state-card.njk  Card component for the home page grid
public/
  css/style.css     All styles
  js/filter.js      Search and filter logic
  img/              Flags, OG image
docs/               Project documentation and accuracy reports
```

## Getting Started

```bash
npm install
npm start       # Dev server with hot reload
```

## Build and Deploy

```bash
npm run build   # Output to _site/
npm run deploy  # Build + deploy to Cloudflare Workers
```

## Data

All voting information lives in `content/_data/states.json`. Each entry includes registration deadlines, ID requirements, registration methods, early voting details, mail-in voting rules, felony voting rules, required documentation, confidence levels, last-verified dates, per-state sources, change history, recent legislation, pending legislation, and a link to the official state election website.

Per-state election news is stored in `content/_data/stateNews.json`, organized by research run date. Each run captures up to 5 news items per state with title, source, URL, date, and summary.

Sources include official state election websites, NCSL, Ballotpedia, Vote.org, Brennan Center, AP News, Reuters, and state newspapers. Each state's detail page links to its specific sources.
