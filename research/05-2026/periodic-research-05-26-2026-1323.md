# Periodic Research — Requirements Update

**Date of research:** 2026-05-26
**Mode:** Requirements update (data verification only; no news capture)
**Branch:** `research/2026-05-26`

## Summary of findings

- **States reviewed:** 51 (50 states + DC), all entries in `_data/states.json`
- **Verification method:** 8 parallel research agents, each reading the verbatim current values from `_data/states.json` for its assigned states and checking them against tiered authoritative sources (Tier 1 = state official election site; Tier 2 = Vote.org; Tier 3 = NCSL / Ballotpedia / recent straight-news reporting).
- **Proposed changes:** 6 discrepancies found (covering 8 field edits across 6 states). All are precision/metadata corrections — none change a substantive voting rule. The data set was recently and thoroughly maintained, so most fields verified clean.

## Discrepancies

### 1. Louisiana (LA) — Recent Legislation: SB 436 bill year

- **Current value (verbatim):** `"bill": "SB 436", "year": 2025` — description "Requires proof of citizenship to register to vote", status "Effective Jan 1, 2025; implementation guidance not yet issued"
- **Correct value:** `"year": 2024` — SB 436 was a **2024** Regular Session bill (enacted as Act No. 500), with a Jan 1, 2025 effective date.
- **How they differ:** The `year` field labels the bill 2025, but it passed the 2024 Louisiana Regular Session; only its effective date falls in 2025. Description and status text are otherwise accurate.
- **Sources:** Louisiana Legislature enrolled bill text (Tier 1); nola.com / WRKF reporting (Tier 3, corroborating)
- **URLs:** https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1382204 ; https://www.wrkf.org/politics/2025-01-15/louisiana-now-requires-proof-of-citizenship-to-vote-but-hasnt-issued-any-guidance
- **Supporting quote:** "2024 Regular Session ENROLLED SENATE BILL NO. 436... becomes effective on January 1, 2025... Act No. 500."

### 2. Ohio (OH) — SB 293 effective date (Recent Legislation status + Mail-In Voting note)

- **Current value (verbatim), recentLegislation status:** `"status": "Enacted, effective Dec 2025"`
- **Current value (verbatim), mailInVoting.details:** `"...Note: SB 293 (Dec 2025) eliminated the post-Election Day grace period — absentee ballots must now be received by close of polls on Election Day."`
- **Correct value:** SB 293 was **signed December 19, 2025** and **takes effect March 20, 2026** (first applies to the May 5, 2026 primary). "Dec 2025" is the signing month, not the effective date.
- **How they differ:** Both fields treat December 2025 as the effective date; the law actually becomes effective March 20, 2026. Same underlying fact in two locations.
- **Sources:** Ohio SOS Directive 2026-02 implementing SB 293 (Tier 1); Ballotpedia News, NBC4/WCMH, Cuyahoga County BOE (Tier 3, multiple agreeing)
- **URLs:** https://www.ohiosos.gov/assets/directive-2026-02-implementation-of-sb-293.pdf ; https://news.ballotpedia.org/2025/12/20/ohio-gov-mike-dewine-signs-bill-requiring-absentee-ballots-to-be-received-by-election-day/ ; https://boe.cuyahogacounty.gov/voters/sb293-info
- **Supporting quote:** "Governor DeWine signed SB 293 into law on December 19, 2025, and the new law takes effect on March 20, 2026"; Cuyahoga BOE: changes apply "starting with the May 5, 2026 Primary Election."

### 3. Oklahoma (OK) — Early Voting: Wednesday eligibility

- **Current value (verbatim):** `"In-person early voting available Thursday and Friday before all elections (8 AM-6 PM). General, primary, and runoff elections also include Wednesday (8 AM-6 PM) and Saturday (8 AM-2 PM)."`
- **Correct value:** Thursday and Friday (8 a.m.–6 p.m.) for all elections; **Saturday** (8 a.m.–2 p.m.) added for primary, runoff primary, general, and presidential preferential primary elections; **Wednesday** (8 a.m.–6 p.m.) added **only for the General Election**.
- **How they differ:** The data groups Wednesday with primary and runoff elections, but per the Oklahoma State Election Board, Wednesday early voting applies only to the General Election.
- **Sources:** Oklahoma State Election Board official early-voting page (Tier 1)
- **URLs:** https://oklahoma.gov/elections/voters/early-voting.html
- **Supporting quote:** Official site: Saturday "preceding a state or federal Primary Election, Runoff Primary Election, General Election or Presidential Preferential Primary Election"; Wednesday "8 a.m. to 6 p.m. the Wednesday preceding the General Election."

### 4. Utah (UT) — HB 300 mail-ballot ID requirement effective date (3 fields)

- **Current value (verbatim), idRequirements.toRegister:** `"...Under HB 300 (effective Nov 2025), mail ballot returns must include last 4 digits of DL/ID/SSN."`
- **Current value (verbatim), notes:** `"...HB 300 (effective Nov 2025) requires mail ballot returns to include last 4 digits of DL/ID/SSN and phases out universal vote-by-mail by 2029."`
- **Current value (verbatim), recentLegislation status:** `"status": "Enacted, mail ballot ID effective Nov 2025; full phase-out by Jan 2029"`
- **Correct value:** The requirement to include the last 4 digits of a DL/ID/SSN on returned mail ballots begins in **2026**, not Nov 2025. The only HB 300 change that took effect for the November 2025 (municipal) election was the ballot-return deadline (received by 8 p.m. on Election Day).
- **How they differ:** Three fields state the ID-number-on-ballot requirement was effective Nov 2025; it actually begins in 2026.
- **Sources:** Utah News Dispatch, KPCW, Standard-Examiner, Daily Herald, News From The States, Deseret News (Tier 3, multiple agreeing)
- **URLs:** https://utahnewsdispatch.com/2025/03/06/utah-legislature-approves-bill-require-voter-id-phase-out-automatic-voting-by-mail-by-2029/ ; https://www.kpcw.org/state-regional/2025-10-30/how-to-make-sure-your-vote-counts-by-mail-ballots-now-have-tighter-deadlines
- **Supporting quote:** "Starting in 2026, voters with a valid state ID are required to include the last four digits of their state ID when returning a ballot through the mail or in a drop box." "2025: Only the mail ballot deadline changed."

### 5. West Virginia (WV) — Pending Legislation: SJR 9 adoption month

- **Current value (verbatim):** `"...Adopted by the West Virginia Legislature in April 2026 and placed on the November 3, 2026 ballot for voter ratification."`
- **Correct value:** Adopted by the Legislature in **March 2026** (House 97-0 on March 13, 2026; Senate unanimously March 14, 2026), then placed on the November 3, 2026 ballot.
- **How they differ:** The description says the Legislature adopted SJR 9 in April 2026; the joint resolution actually passed in mid-March 2026. (On-ballot status and date are correct.)
- **Sources:** Ballotpedia News (Tier 3, two articles); West Virginia Legislature SJR 9 enrolled text (Tier 1, already cited as corroboration in the existing change-log entry)
- **URLs:** https://news.ballotpedia.org/2026/03/17/west-virginia-becomes-fourth-state-to-place-citizenship-requirement-amendment-on-2026-ballot/ ; https://news.ballotpedia.org/2026/04/23/west-virginia-legislators-place-citizenship-requirement-for-voting-on-the-ballot-enact-10-other-election-bills/
- **Supporting quote:** "The amendment was adopted by the state House of Delegates on a 97-0 vote on March 13, and the state Senate passed it unanimously the following day."

### 6. Wyoming (WY) — HB 156 "under legal challenge" is stale (2 fields)

- **Current value (verbatim), idRequirements.toRegister:** ends `"...Proof of residency also required (...). Law is under legal challenge."`
- **Current value (verbatim), recentLegislation status:** `"status": "Became law without governor's signature; under legal challenge"`
- **Correct value:** The federal challenge (Equality State Policy Center v. Gray) was **dismissed without prejudice in July 2025** for lack of standing (no merits ruling); HB 156 remains in effect. The "under legal challenge" characterization is stale as of May 2026.
- **How they differ:** Both fields present the law as currently under legal challenge, but the only filed suit was dismissed July 2025 and no active challenge is confirmed. Substantive HB 156 requirements in the data are correct.
- **Sources:** Wyoming Public Media, Democracy Docket, Gillette News Record, Bolts (Tier 3, multiple agreeing)
- **URLs:** https://www.wyomingpublicmedia.org/politics-government/2025-07-22/judge-tosses-federal-lawsuit-against-new-voter-residency-requirement ; https://www.democracydocket.com/news-alerts/judge-dismisses-challenge-to-wyoming-proof-of-citizenship-law-leaving-barriers-for-voters-in-place/
- **Supporting quote:** "The federal lawsuit was dismissed without prejudice... the plaintiff lacked legal standing... HB 156 remains in effect." (Plaintiffs signaled possible future refiling with proper standing, but none is confirmed.)

## States/fields with no changes

All 45 other entries verified clean against authoritative sources, plus the non-flagged fields of the six states above. No-change states:

AL, AK, AZ, AR, CA, CO, CT, DE, DC, FL, GA, HI, ID, IL, IN, IA, KS, KY, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OR, PA, RI, SC, SD, TN, TX, VT, VA, WA, WI.

### Informational notes (out of scope — no field change warranted)

- **Arkansas:** 2025 laws Act 403, HB1715, SB486 surfaced but do not alter any verified field (only Act 846 is currently tracked).
- **Connecticut:** SB 298 (early-voting tabulator handling) is an administrative ballot-processing change, not a change to early-voting availability/window.
- **Georgia:** Six 2026 election bills signed May 11–12 (HB 369, HR 251, HB 651, HB 1215, SB 33, SR 563) concern judicial/county races and scheduling — none change voter-facing data fields.
- **Kentucky:** HB 139 voter-ID changes do not take effect until 2028; current `idRequirements.toVote` remains accurate today.
- **Mississippi:** 2026 "Early Voting Act" (HB 447) died at the March 3 deadline; `earlyVoting.available: false` remains correct.
- **North Carolina:** Proposed NCSBE photo-ID rulemaking (hearing June 9, 2026) and the November 2026 voter-ID constitutional amendment are pending/future, not enacted.

### Items to monitor (future status updates)

- **Missouri:** HB 174/SB 152 pending — Governor has until ~July 15, 2026 to act.
- **New Hampshire:** HB 1569 federal trial concluded; ruling still pending.
- **Montana:** SB 490 preliminary injunction (May 11, 2026); trial set ~August 2026.

---

## Addendum — applied changes (one-at-a-time review)

All 6 proposed changes were **approved** and applied. Each touched state's `lastVerified` was set to 2026-05-26, with a corresponding `changes` entry appended.

| # | State | Field(s) | Decision |
|---|-------|----------|----------|
| 1 | Louisiana (LA) | Recent Legislation — SB 436 `year` 2025 → 2024 | Approved |
| 2 | Ohio (OH) | Recent Legislation status + Mail-In Voting note — SB 293 effective date → March 20, 2026 | Approved |
| 3 | Oklahoma (OK) | Early Voting — Wednesday = General-Election-only; Saturday for primary/runoff/general/PPP | Approved |
| 4 | Utah (UT) | idRequirements + notes + Recent Legislation status — HB 300 mail-ballot ID effective date Nov 2025 → 2026 | Approved |
| 5 | West Virginia (WV) | Pending Legislation — SJR 9 adoption month April → March 2026 | Approved |
| 6 | Wyoming (WY) | idRequirements + Recent Legislation status — HB 156 "under legal challenge" updated (dismissed without prejudice July 2025; law in effect) | Approved |

**Rejected/modified:** none.

JSON validated after edits (51 entries, parses clean).

