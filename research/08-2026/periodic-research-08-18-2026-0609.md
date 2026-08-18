# News Update Run — August 18, 2026 (06:00 PT, autonomous)

## Summary

- Mode: News update (autonomous)
- All 51 states + DC searched for recent election news
- 4 states received qualifying items: AK, FL, MA, NH
- 47 states/DC had zero qualifying items after the recency filter (most had a per-state threshold within the last 1–5 days from the twice-daily cadence; nothing found post-threshold met both the recency and straight-news criteria)

## Recency thresholds applied

Thresholds were computed from the maximum `date` across all prior runs for each state in `_data/stateNews.json` (120 prior runs, most recent 2026-08-17). Most thresholds fell between 2026-08-03 and 2026-08-17, reflecting the twice-daily run cadence.

## Items added this run

| State | Threshold | Item date | Title | Source |
|---|---|---|---|---|
| AK | 2026-08-14 | 2026-08-17 | Alaska's primary election day is Tuesday. Here's what to know. | Anchorage Daily News |
| FL | 2026-08-15 | 2026-08-18 | Florida primary election 2026: Polls open as voters cast ballots in key races | CBS Miami |
| MA | 2026-08-10 | 2026-08-14 | Massachusetts elections 2026: Everything you need to know to vote | GBH |
| NH | 2026-08-12 | 2026-08-17 | Lawsuit Challenges NH Student ID Voter Restriction | ABC News |

## Verification results

- Links checked: 4
- Titles corrected: 0
- Dates corrected: 0
- Items removed after verification: 0

All 4 URLs were confirmed accessible via direct WebFetch with headlines matching the stored titles and publication dates matching the stored `date` fields.

## Notable exclusions (borderline/rejected candidates)

Many candidates were found but excluded for falling on (not strictly after) the per-state threshold, since several stories that surfaced in search were already captured in the prior (2026-08-17 17:00) run:

- **GA** — "Georgia 2026 election: Registration opens for absentee ballots" (FOX 5 Atlanta, 2026-08-17) — already captured in the prior run; threshold is 2026-08-17, so no strictly-later item qualified.
- **NC** — "Stein vetoes Republican-backed 'anti-voter' North Carolina elections bill" (NC Newsline, 2026-08-17) — same underlying story already captured (as a WUNC article) in the prior run; threshold 2026-08-17.
- **WY** — "Wyoming Voters Decide Crowded Statewide Primaries Tuesday" (Election Desk, 2026-08-17) — already captured in the prior run; threshold 2026-08-17.
- **NE** — "Judge dismisses lawsuit from RNC challenging Nebraska voter law" (1011now.com) — dated exactly 2026-08-13, equal to the NE threshold, not strictly later.
- **OK** — "Oklahomans to decide on adding voter ID requirements..." (KGOU) — dated exactly 2026-08-13, equal to threshold.
- **OH** — "Ohio Ballot Board OKs language that puts Issue 3 ... on ballot" — dated exactly 2026-08-03, equal to threshold.
- **TX** — "Federal appeals court restores Texas mail ballot ID requirements..." (Fox News) — dated exactly 2026-08-13, equal to threshold.
- **SC / WY (DOJ press releases)** — DOJ press releases about UOCAVA voter protections (SC) and non-citizen voting warnings (WY) were dated 2026-07-21 and 2026-07-27 respectively — both well before their thresholds.
- **NV** — "Nevada approves broad election rule changes..." (2news.com) — WebFetch revealed the true publication date was March 2, 2026 (search snippet had misrepresented it as recent); excluded.
- **VA** — "Campaign to enshrine voting rights in Virginia Constitution kicks off in Norfolk" (Virginia Mercury, dated 2026-08-07, after the VA threshold of 2026-08-06) — otherwise a qualifying candidate, but both WebFetch and the curl/Wayback fallback ladder returned inaccessible (403 Cloudflare challenge; Wayback snapshot also blocked). Per the Link and date verification rule, an item that cannot be confirmed accessible is dropped rather than added on an unverified basis.
- Opinion/commentary pieces were excluded per the content-filtering rule (e.g., a Nevada Appeal "Jim Hartman:" byline column on voter ID, a PJ Media commentary piece on Texas election-law court wins).

No national/federal story was recorded for more than one state this run (National stories rule) — no qualifying national story was found at all in this run's window.

## Verification gaps

Not applicable — this was a News update (autonomous) run; no data-verification (states.json field) research was performed.
