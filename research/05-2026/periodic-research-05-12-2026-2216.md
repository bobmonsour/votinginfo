# Periodic Research — 2026-05-12 (Full run)

## Summary

- **Total states reviewed:** 51 (50 states + DC)
- **Proposed data changes:** 2 (Maryland, Montana)
- **States with candidate news items collected:** 30 (subject to per-state strict-recency filtering before write)
- **Sources used:** Tier 1 — official state election sites; Tier 2 — Vote.org; Tier 3 — NCSL, Ballotpedia, news (with 2-source corroboration required)

Most states already reflected current law and policy. The two proposed changes are both `recentLegislation` updates driven by very recent activity (one new state VRA, one new court ruling).

Note on news: agents collected candidate news items per state. The strict per-state recency filter (date > max-prior-news-date for that state) and link verification will be applied in subsequent steps before items land in `_data/stateNews.json`.

---

## Proposed data changes

### 1. Maryland (MD) — `recentLegislation`

- **Current value (verbatim from states.json):**
  ```json
  "recentLegislation": []
  ```
- **Proposed value:** Add a new entry to the `recentLegislation` array:
  ```json
  {
    "bill": "SB 255 (Maryland Voting Rights Act of 2026)",
    "year": 2026,
    "description": "Prohibits counties and municipalities from using electoral methods that dilute the votes of a protected class (race, color, or language-minority group). Provides remedies including injunctive relief and damages. Applies to local elections only.",
    "status": "Signed by Gov. Wes Moore April 28, 2026; emergency bill, took effect immediately upon signature",
    "dateAdded": "2026-05-12",
    "active": true
  }
  ```
- **Sources (Tier 3, corroborated by 4 sources — well above the 2-source minimum):**
  - Office of Gov. Wes Moore press release (close to Tier 1): https://governor.maryland.gov/news/press/pages/Governor-Moore-Signs-Legislation-to-Protect-Marylanders%E2%80%99-Pocketbooks-in-Grocery-Stores,-Safeguard-Voting-Rights,-and-Streng.aspx
  - The Daily Record / Capital News Service (Tier 3): https://thedailyrecord.com/2026/05/11/maryland-enacts-new-voting-rights-law-supreme-court/
  - NAACP Legal Defense Fund (Tier 3): https://www.naacpldf.org/press-release/maryland-voting-rights-act-bill-prohibiting-discrimination-in-voting-signed-into-law/
  - Maryland Matters (Tier 3): https://marylandmatters.org/2026/04/30/maryland-democrats-hope-brand-new-state-voting-rights-act-holds-in-face-of-supreme-court-ruling/
- **Justification:** "Maryland became the 10th state to pass a state voting rights act on April 28th, just 24 hours before the U.S. Supreme Court struck down use of race-conscious redistricting under Section 2 of the Voting Rights Act of 1965." Note: this is enacted state law, narrowly affecting only local elections.

### 2. Montana (MT) — `recentLegislation[].status` for SB 490

- **Current value (verbatim from states.json):** The SB 490 entry currently reads:
  ```json
  {
    "bill": "SB 490",
    "year": 2025,
    "description": "Restricts Election Day registration to 8 AM-noon (previously all day); eliminates Monday-before-election registration, moving late deadline to 5 PM Saturday before election day",
    "status": "Signed May 5, 2025; preliminary injunction granted Feb 13, 2026; litigation ongoing",
    "dateAdded": "2026-03-13",
    "active": true
  }
  ```
- **Proposed value:** Update the `status` field to:
  ```
  Signed May 5, 2025; preliminary injunction granted Feb 13, 2026; Montana First Judicial District Court enjoined SB 490 from taking effect on May 11, 2026 (Lewis & Clark County); trial scheduled August 2026
  ```
- **Sources (Tier 3, corroborated by 3+ outlets — above the 2-source minimum):**
  - Montana Free Press: https://montanafreepress.org/2026/05/11/judge-blocks-election-day-voter-registration-changes/
  - Daily Montanan: https://dailymontanan.com/2026/05/11/montana-district-court-blocks-law-restricting-voter-registration-hours-allows-voter-id-law/
  - ACLU (national): https://www.aclu.org/press-releases/montana-keeps-election-day-voter-registration
  - Flathead Beacon: https://flatheadbeacon.com/2026/05/11/judge-blocks-election-day-voter-registration-changes/
- **Justification:** "On May 11, 2026, the Montana First Judicial District Court, Lewis and Clark County, issued an order ruling that Senate Bill 490, which passed during the 2025 Montana Legislative session, is enjoined and may not go into effect." This is a court-action update to a record already in `recentLegislation`. The same ruling DENIED the motion to enjoin SB 276, which remains in effect — no change needed to the SB 276 entry.

---

## States with no proposed data changes

All 49 of the remaining jurisdictions checked clean against Tier 1/2 sources for the verifiable fields tracked in `_data/states.json`:

Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming, District of Columbia.

---

## Notable but non-actionable items (for future runs)

These were observed during research but do not warrant a data change at this time:

- **Alaska SB 64** — Vetoed by Gov. Dunleavy in April 2026; override failed May 4, 2026. No statutory change.
- **Colorado HB 26-1113** — Cleared the legislature; was awaiting Gov. Polis's signature as of May 12. Would change ballot-mailing window from 22 → 29 days. Revisit next run.
- **Delaware SB 3 / HB 75** — First leg of a no-excuse absentee constitutional amendment passed in the 2026 session; constitutional amendments require two sessions. Not yet operative law.
- **Illinois VRA federal lawsuit (PILF v. Pritzker, filed 2026-05-08)** — Challenges the Illinois VRA; no ruling yet.
- **Michigan citizen-voting ballot initiative** — Signatures submitted March 2026; still in qualification phase.
- **Missouri Respect Missouri Voters initiative** — ~367,000 signatures filed May 2026; pending verification.
- **Vermont S.298 (Voter Protections Act)** — Passed Vermont House April 30, 2026; not yet signed.
- **Washington 2026 elections package (SB 5892, WAVRA updates, HB 1916, SB 6084)** — Signed in March 2026, before the lastVerified date of 2026-04-18; we previously did not capture these. Worth considering as `recentLegislation` additions on a future run if in-scope for site coverage.
- **DC Initiative 83 (RCV / semi-open primaries)** — June 16 primary will be the first implementation. Reconsider for `recentLegislation` after that primary.

---

## Approvals applied

- **MD — SB 255 (Maryland Voting Rights Act of 2026) added to `recentLegislation`:** Approved as proposed. Applied 2026-05-12. `lastVerified` updated to 2026-05-12; change-log entry appended.
- **MT — SB 490 `status` updated to reflect May 11, 2026 district-court ruling enjoining the law:** Approved as proposed. Applied 2026-05-12. `lastVerified` updated to 2026-05-12; change-log entry appended. SB 276 entry left unchanged (the same ruling denied the motion to enjoin that law).

No proposed changes were rejected or modified.
