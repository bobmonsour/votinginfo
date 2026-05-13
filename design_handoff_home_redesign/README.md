# Handoff: usvoting.info — Home page redesign

## Overview

A visual + structural redesign of the **usvoting.info** homepage. The existing
site is built with Eleventy 3 (Nunjucks templates) and vanilla CSS, hosted on
Cloudflare Workers. This handoff covers **only the homepage (`content/index.njk`)**;
all other pages (state detail, glossary, change log, about, news pages) are
unchanged.

The redesign introduces two new homepage sections — a **recent-news roundup**
and two **alphabetical state-abbreviation indexes** — alongside a refreshed
visual system applied to the existing state-card grid.

## About the design files

The files in this bundle (`design/index.html`, `app.jsx`, `styles.css`,
`data.js`, `tweaks-panel.jsx`) are a **design reference prototype built in
HTML/React for preview purposes**. They are *not* production code to ship.

The task is to **port the design into the existing Eleventy + Nunjucks +
vanilla-CSS codebase** at `bobmonsour/votinginfo`, following its established
conventions:

- New markup goes in **Nunjucks templates** (`content/index.njk`,
  `_includes/state-card.njk`, etc.) — not React components.
- New styling is appended to **`public/css/style.css`** — not a separate
  stylesheet. Reuse existing CSS variables (`--navy`, `--white`, `--gray-*`)
  and add new ones to the existing `:root` block.
- Search/filter behavior is already implemented in
  **`public/js/filter.js`** — extend it rather than replace it. Read
  `data-*` attributes from `.state-card` elements, the same as today.
- News items are read from **`content/_data/stateNews.json`** at build time
  (newest run wins) and rendered into the homepage by Nunjucks. No client-side
  fetch.
- The two state-abbreviation rails iterate `states` from
  `content/_data/states.json` in alphabetical order.

The React in `app.jsx` is a preview convenience — translate every component to
Nunjucks `{% include %}` / `{% for %}` blocks.

## Fidelity

**High-fidelity.** Colors, type, spacing, and interactions are final.
Reproduce 1:1 in the Eleventy build. The redesign extends the existing palette
rather than replacing it, so most CSS additions are additive.

## Information architecture (new homepage order)

| # | Section                          | Status       | Source data |
|---|----------------------------------|--------------|-------------|
| 1 | Sticky site header               | Unchanged    | nav links   |
| 2 | Verification banner              | Unchanged    | static      |
| 3 | **Editorial masthead** (h1 + lede + meta-row) | **New**      | static + `build.lastUpdated` |
| 4 | **Recent news** (8 items)        | **New**      | `stateNews.json` (latest run, flatten + sort desc by date, top 8) |
| 5 | **News-by-state rail** (51 abbrs) | **New**     | `states.json` order, dot indicator if state appears in latest news run |
| 6 | Search + filter controls         | Restyled     | `filter.js` |
| 7 | Result count row                 | Restyled     | client-side |
| 8 | **Jump-to-state rail** (51 abbrs) | **New**     | `states.json` order |
| 9 | State-card grid (51 cards)       | Restyled     | `states.json` via `state-card.njk` |
| 10| Site footer                      | Restyled     | static      |

## Design tokens

Append these to the existing `:root` block in `public/css/style.css`. They
extend the current navy/cream system without breaking it.

```css
:root {
  /* Existing tokens stay. New tokens: */

  /* Palette */
  --ink:       #1b3a5c;  /* same as --navy */
  --ink-2:     #2a5580;  /* same as --navy-light */
  --ink-3:     #5a6a7b;  /* same as --gray-500 */
  --ink-4:     #8895a4;
  --paper:     #faf6f1;  /* same as --white */
  --paper-2:   #f3ece1;
  --paper-3:   #ebe1d1;
  --rule:      #d8cdb9;
  --rule-soft: #ece4d4;
  --accent:    #c2410c;  /* burnt-orange — new */
  --good:      #2e7d32;
  --good-bg:   #e6efd8;
  --bad:       #8a2a2a;
  --bad-bg:    #f1dcd4;

  /* Type */
  --font-serif: "Source Serif 4", "Source Serif Pro", Georgia, serif;
  --font-sans:  "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono:  "IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  /* Shape */
  --radius:    4px;
  --radius-lg: 8px;
  --shadow-sm: 0 1px 2px rgba(27, 58, 92, 0.06);
  --shadow-md: 0 6px 24px -12px rgba(27, 58, 92, 0.25);
}
```

### Webfonts

Add to `_includes/layouts/base.njk` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400;1,8..60,500&display=swap">
```

### Type scale (homepage)

| Use                              | Family            | Size               | Weight | Tracking  |
|----------------------------------|-------------------|--------------------|--------|-----------|
| Masthead h1                      | Source Serif 4    | clamp(2.2, 4.5vw, 3.5rem) | 600 | -0.025em |
| Section title (h2)               | Source Serif 4    | clamp(1.6, 2.6vw, 2.1rem) | 600 | -0.018em |
| Card state name (h3)             | Source Serif 4    | 1.25rem            | 600    | -0.01em   |
| News headline                    | Source Serif 4    | 1.12rem            | 500    | —         |
| Body / lede                      | IBM Plex Sans     | 1.15rem            | 400    | —         |
| Standard body                    | IBM Plex Sans     | 17px (1.0625rem)   | 400    | —         |
| Eyebrow / meta / state abbrs     | IBM Plex Mono     | 0.72rem            | 500    | +0.14em uppercase |
| Section sub copy                 | IBM Plex Sans     | 0.98rem            | 400    | —         |

## Screen-by-screen spec

### 1. Site header (sticky)

- Background `--ink`, text `--paper`. Border-bottom `1px solid #000`.
- Padding `1.1rem 0 1rem`.
- `.container` is flex, `align-items: baseline`, `justify-content: space-between`, `gap: 1.5rem`.
- **Site title:** Source Serif 4, 1.55rem, weight 700, letter-spacing -0.012em. Reads `US Voting Info.` — the trailing period rendered in `--accent` via a `.dot` span. (Optional `.tld` span "info" in mono 0.85rem `--paper-3` after.)
- **Nav:** Plex Sans 0.9rem, color `--paper-3`. Active link `--paper` with `text-underline-offset: 4px; text-decoration-thickness: 1.5px`. Order: Home · News · Glossary · Change Log · About.

### 2. Verification banner

- Background `--paper-2`, border-bottom `1px solid --rule`.
- Layout: flex row, gap 0.75rem, padding `0.65rem 0`.
- Leading `<span class="badge-tiny">Notice</span>` — mono 0.7rem uppercase, color `--accent`, 1px border `--accent`, padding `0.1rem 0.45rem`, radius 2px.
- Followed by 0.92rem `--ink-3` copy: "Some state data is being re-verified for the 2026 cycle. Confidence level is shown on each state page."

### 3. Editorial masthead

- Padding `3.25rem 0 2.5rem`, border-bottom `1px solid --rule`, background `--paper`.
- Single column, gap 1.5rem.
- **h1:** clamp size as above, weight 600. Italicize the word "requirements" via inline `<em>` (italic, weight 400, color `--ink-2`). `text-wrap: balance`.
- **Lede:** 1.15rem `--ink-3`, max-width 60ch.
- **Meta row** (mono uppercase 0.78rem, +0.08em, `--ink-3`, padded 0.4rem top, top-bordered `--rule-soft`):
  - `<strong>51</strong> jurisdictions  ·  <strong>{N}</strong> news items this week  ·  Last verified <strong>{lastUpdated|formatDate}</strong>`
  - `strong` is `--ink`, weight 600. The `·` between items is `--rule`.

### 4. Recent news section

- `<section class="section" id="news">` — padding `2.75rem 0`, border-bottom `1px solid --rule`.
- **Section head** (recurring pattern, used in sections 4/6/9):
  - Eyebrow: mono 0.72rem uppercase +0.14em `--accent`, weight 500. Preceded by a 28×1px horizontal line in `--accent`. Reads "ELECTION NEWS".
  - h2 section title (serif, clamp, -0.018em). The phrase "across all states" is italicized via `<em>`.
  - Sub copy: 0.98rem `--ink-3`, max-width 64ch.
  - Section actions row (mono 0.78rem uppercase +0.06em): links with 1px bottom border `--rule` that turns `--accent` on hover. `All news →` and `RSS`.
- **News list** (`<ol class="news-grid">`):
  - Two columns at ≥720px, one column below. Border-top `--rule`.
  - Each `<li class="news-item">`:
    - 2-column internal grid: 3.2rem state-tag · 1fr body. Gap 0.9rem. Padding 1.1rem 0. Border-bottom `--rule`. Items in the left column have `border-right: 1px solid --rule; padding-right: 2rem; margin-right: -1rem;` to give the inter-column rule.
    - **State tag** (`<a class="news-state-tag">`): mono 0.9rem weight 600, color `--paper` on `--ink` background, 3.2rem wide × 2rem tall, radius 2px. Hover swaps background to `--accent`. Href: `/states/{slug}/#recent-news`.
    - **Title** (`<a class="news-title">`): Source Serif 4 1.12rem weight 500, color `--ink`, line-height 1.3, text-wrap pretty. Hover: color `--accent`, underline with 3px offset.
    - **Meta row** (mono 0.72rem uppercase +0.08em): `{source} · {date|formatDate}`. Source is weight 600 `--ink-2`.

### 5. News-by-state rail

- Same `.section` shell, padding override `2.25rem 0`.
- **Label row** (`.abbr-rail-label`, mono 0.72rem uppercase +0.12em `--ink-3`): "BROWSE NEWS BY STATE" left, legend right: small 6px dot in `--accent` + text "has recent news".
- **Grid** (`.abbr-rail` `<nav>`): `grid-template-columns: repeat(auto-fill, minmax(2.6rem, 1fr))`, gap 1px, background `--rule`, border `1px solid --rule`, radius 4px, `overflow: hidden`. The 1px gap on the rule color creates hairline dividers.
- Each cell `<a>`: mono 0.82rem weight 600 +0.04em, color `--ink`, background `--paper`, padding `0.55rem 0`, centered. Hover swaps to `--ink` bg / `--paper` fg.
- **Dot indicator:** if the state appears in the latest news run, add class `.has-news`. CSS `::after` draws a 4×4 `--accent` circle at `top: 6px; right: 8px`.
- Href: `/states/{slug}/#recent-news`.
- 51 entries in `states.json` order (alphabetical including DC).

### 6. Search + filter controls

Restyle of the existing controls.

- `.controls` is a single-column grid below 800px, `minmax(280px,320px) 1fr` above.
- **Search input** (`#state-search`): full-width, 0.75rem padding (left padded 2.4rem to clear the `⌕` glyph), font 0.95rem Plex Sans, border `1px solid --rule` with `border-bottom-width: 2px`, radius 4px, background `--paper`. Focus: border `--ink`, bottom-border `--accent`.
- **Filter buttons:** mono 0.74rem uppercase +0.08em, padding `0.5rem 0.85rem`, border `1px solid --rule`, radius `2rem`, background `--paper`, color `--ink-2`. Hover → border + color `--ink`. `[aria-pressed="true"]` → background + border `--ink`, color `--paper`. Append `<span class="x">×</span>` (visible only when pressed) for an inline clear-affordance.
- Same six filters as today: Same-day reg., Online reg., Early voting, No-excuse mail-in, Excuse-req. mail-in, All-mail.

### 7. Result row

- Flex row, baseline-aligned, mono 0.78rem uppercase +0.08em `--ink-3`. Border-top `--rule-soft`, padding-top 0.75rem.
- Left: `Showing <strong>{N}</strong> of <strong>{total}</strong> jurisdictions`.
- Right: `Last updated <strong>{lastUpdated|formatDate}</strong>`.

### 8. Jump-to-state rail

Identical visual to section 5 (same `.abbr-rail` styles) except:
- Label reads "JUMP TO A STATE".
- No legend or `.has-news` dots.
- Hrefs point to `#states-{abbr|lower}` anchors on the same page (each card's `id`).

Sits *inside* the same `<section>` as the card grid, just after the result row and before the grid.

### 9. State card

- Element: `<article class="state-card" id="states-{abbr|lower}">`.
- Container: 1px `--rule` border, radius `--radius-lg` (8px), padding 1.25rem, background `--paper`. **`display: flex; flex-direction: column;`** so the footer can pin to the bottom (see below).
- Hover: border-color `--ink`, `box-shadow: var(--shadow-md)`, `transform: translateY(-1px)`.
- **Head row** (flex, gap 0.7rem, align-items center, margin-bottom 0.9rem):
  - Flag `<img class="flag">` 36×24, radius 2px, 1px black/10% ring.
  - Title stack (flex 1, min-width 0):
    - `<h3>` Source Serif 4 1.25rem weight 600 -0.01em, line-height 1.1. Wraps `<a href="/states/{slug}/">{state}</a>` — link inherits color, hover `--accent`.
    - `<span class="abbr">` mono 0.72rem +0.1em uppercase `--ink-4`, margin-top 0.15rem.
- **Badges row** (flex wrap, gap 0.3rem, margin-bottom 0.85rem): four badges in this order:
  - Same-day registration → yes / no
  - Online registration → yes / no
  - Early voting → yes / no
  - Mail-in (three-way): if `noExcuseRequired` show `yes` "No-excuse mail-in"; else if `available` show `warn` "Excuse req. mail-in"; else `no` "No mail-in".
  - Badge styles (all mono 0.7rem weight 500 +0.04em, padding `0.22rem 0.5rem`, radius 2px):
    - `.badge.yes` → bg `--good-bg`, fg `--good`, glyph ✓
    - `.badge.no`  → bg `--paper-2`, fg `--ink-4`, glyph ✕
    - `.badge.warn`→ bg `--bad-bg`,  fg `--bad`,   glyph `!`
- **Deadline rail** (`.deadline`): background `--paper-2`, left border `3px solid --accent`, padding `0.6rem 0.75rem`, margin-bottom 0.85rem.
  - `.label`: mono 0.66rem +0.12em uppercase `--accent`, "REGISTRATION DEADLINE".
  - `.value`: 0.88rem `--ink`, weight 500, line-height 1.35 — the existing `registrationDeadline` string.
- **Details dl**: padding-top 0.75rem, border-top `1px solid --rule-soft`, `display: grid`, gap 0.65rem. Three rows:
  - "ID to vote" → `idRequirements.toVote`
  - "Early voting" → `earlyVoting.details`
  - "Mail-in voting" → `mailInVoting.details`
  - `dt`: mono 0.66rem +0.12em uppercase `--ink-4`, margin-bottom 0.1rem
  - `dd`: 0.9rem `--ink-2`, line-height 1.45
- **Footer** (`.footer`): **`margin-top: auto`** (this is what pins it to the card's bottom edge so links align across the row), padding-top 0.95rem, border-top `1px solid --rule-soft`. Flex row, justify-content space-between.
  - Left: `<a href="/states/{slug}/">Details<span class="arrow">→</span></a>` — mono 0.72rem uppercase +0.08em weight 600 `--ink`. Hover `--accent`; arrow translates +3px.
  - Right: `<a href="/states/{slug}/#recent-news">News<span class="arrow">→</span></a>` — same styling.

### 10. Footer

- Background `--ink`, color `--paper-3`, padding `2.5rem 0 2rem`, 0.85rem.
- 3-column grid above 720px (`2fr 1fr 1fr`), single column below.
- **Colophon** (col 1): `<span class="brand">US Voting Info</span>` (Source Serif 4 1.1rem weight 600 `--paper`) + 1-paragraph site description in `--paper-3`, max-width 38ch, line-height 1.55.
- **Site links column:** `<h4>SITE</h4>` mono 0.72rem +0.12em uppercase weight 600 `--paper`. Below: stacked `<a>` links, padding `0.15rem 0`, `--paper-3` → `--paper` on hover.
- **Sources column:** same pattern. Labels: "State election offices", "NCSL", "Brennan Center", "Ballotpedia".

## Interactions & behavior

### Search + filter (extend existing `public/js/filter.js`)

- AND logic across the six filter toggles + text query (state name or abbr).
- Apply `card.hidden = true|false`. The grid uses `display: grid` and `.state-card[hidden] { display: none; }`.
- Live region (`aria-live="polite"`) updates the result count.
- The `<span class="x">×</span>` inside `.filter-btn` is purely cosmetic — clicking the button toggles `aria-pressed` and re-runs the filter.
- "Clear all" empty-state link (mono 0.9rem button) shows when 0 cards match, resetting query + active filter set.

### Card hover

- `transform: translateY(-1px)` + shadow `--shadow-md` + border `--ink`. Transition 0.15s on all three.

### Abbrev rail hover

- Cell background `--ink`, foreground `--paper`. No animation other than the CSS color transition (0.12s).

### Anchor-target scroll

- Jump-to-state rail uses `#states-{abbr|lower}` to anchor at each card's `id`. Set `scroll-margin-top: 5rem` on `.state-card` so the sticky header doesn't clip.
- News-by-state rail uses `/states/{slug}/#recent-news` — existing per-state anchor on detail pages.

## State + data wiring

The prototype's `app.jsx` reads `STATES` and `NEWS` from a static `data.js` (51 + 12 sample rows). In production:

- `states` → `content/_data/states.json` (existing — 51 entries, same field names).
- `news` → flatten `content/_data/stateNews.json.runs[latest].states` into an array of `{state, date, source, title, url}`, sort by `date desc`, take top 8.

In Nunjucks (sketch):

```nunjucks
{# content/index.njk #}
{% set latest = stateNews.runs | last %}
{% set newsItems = [] %}
{%- for abbr, items in latest.states -%}
  {%- for n in items -%}
    {% set newsItems = (newsItems.push({abbr: abbr, ...n}), newsItems) %}
  {%- endfor -%}
{%- endfor -%}
{% set newsItems = newsItems | sort(true, false, 'date') | slice(0, 8) %}
{# ...render section 4 from newsItems... #}
```

(Use the existing `formatDate` filter for any `YYYY-MM-DD` value.)

## Responsive behavior

- **Mobile (<640px):** single-column card grid, single-column news grid, single-column footer. Filter buttons wrap. Abbr rails stay 6–7 columns wide (auto-fill from `minmax(2.6rem, 1fr)`).
- **Tablet (≥640px):** 2-column card grid, 2-column news grid.
- **Desktop (≥1024px):** card grid auto-fills `minmax(320px, 1fr)`. Same news layout.

The card grid `minmax` is driven by a CSS variable `--card-min` so the Density tweak (see below) can change column count at the same viewport width. **Do not ship the Tweaks panel** — it's a preview tool. Only the `default` density values should land in production (the `:root` defaults shown above).

## Tweaks (preview-only — do not implement)

The prototype exposes a Tweaks panel for design exploration:
- Density (compact / comfortable / spacious)
- Card variant (default / editorial / minimal)
- Accent color
- News-item count

These are for review only. Ship the comfortable / default / `#c2410c` / 8 combination.

## Files in this bundle

- `design/index.html` — preview entry point; demonstrates the full page in a browser.
- `design/styles.css` — **the source of truth for visual spec.** Every selector should map onto an Eleventy/Nunjucks equivalent. Append the new rules to `public/css/style.css`; do not replace existing rules used by other pages.
- `design/app.jsx` — React preview of the page. Mirror its structure when authoring `content/index.njk` and `_includes/state-card.njk`.
- `design/data.js` — Sample data for preview only. Do **not** ship; use the existing `content/_data/states.json` and `content/_data/stateNews.json`.
- `design/tweaks-panel.jsx` — Preview tool only. Discard.
- `screenshots/` — PNG captures of the rendered prototype at the desktop breakpoint. See the next section.

## Screenshots

Captured from the prototype at a desktop viewport. Use these for visual reference when matching colors, spacing, and type.

| File | Shows |
|---|---|
| `screenshots/00-full-page.png` | Entire homepage end-to-end. |
| `screenshots/01-page-top.png` | Sticky header, verification banner, top of editorial masthead. |
| `screenshots/02-masthead.png` | Masthead heading, lede, meta row (51 jurisdictions · N news · last verified). |
| `screenshots/03-recent-news.png` | Recent News section — section head + first row of news items with state tags. |
| `screenshots/04-news-by-state-rail.png` | "Browse news by state" rail — 51 mono abbreviation cells with accent-dot indicator. |
| `screenshots/05-search-filters.png` | Registration & voting section head, search input, six filter chips, result row. |
| `screenshots/06-jump-to-state-rail.png` | "Jump to a state" rail — same grid pattern, no dots, immediately above the card grid. |
| `screenshots/07-state-cards.png` | First row of state cards (Alabama + Alaska) — head, badges, deadline rail, dl details, footer with aligned Details / News links. |
| `screenshots/08-footer.png` | Site footer — colophon + Site / Sources link columns on navy. |

## Assets

- **State flags:** existing pattern — `https://flagcdn.com/w40/us-{abbr|lower}.png` for the 50 states, local `/img/flags/dc.svg` for DC. The preview uses an inline data-URL stub for DC; production should use the existing SVG.
- **Fonts:** Google Fonts (Source Serif 4, IBM Plex Sans, IBM Plex Mono). System fallbacks defined.
- **Icons:** None. The `⌕`, `→`, `✓`, `✕`, `!`, and `·` glyphs are all Unicode characters rendered in the body font.

## Open questions for the developer

1. The masthead's "N news items this week" — is "this week" accurate, or should it read "in the latest research run"? The current `stateNews.json` schema uses run dates, not week boundaries.
2. The footer "Sources" links currently point to `#`. Decide on final URLs (external?) before shipping.
3. The `<span class="dot">.</span>` in the site title is decorative — keep or drop based on the existing logo treatment if there is one.
