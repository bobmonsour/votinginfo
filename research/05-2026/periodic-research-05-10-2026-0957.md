# Periodic Research — 2026-05-10

**Run mode:** Full run (data verification + news capture)
**Branch:** `research/2026-05-10`
**Window of interest:** changes since 2026-05-05 (the previous run reviewed all 51 entries against authoritative sources on that date)

## Summary

- **States reviewed:** 51 (50 states + DC)
- **States with proposed changes:** 3 (CT, MA, WV)
- **States with informational notes (no rule change):** 4 (AL, IA, HI, VT)
- **States with no changes:** 44

Research was performed by 7 parallel agents, each with the relevant slice of `_data/states.json` so they could compare proposed values against the current values verbatim.

## Proposed changes (one-at-a-time review)

The following changes will be presented to the user individually for approval per the skill's one-at-a-time review protocol.

### 1. Connecticut — add `pendingLegislation` entry for HB 5001

- **Field:** `pendingLegislation` (currently `[]`)
- **Current value:** `[]`
- **Proposed value:** Add an entry:
  ```json
  {
    "bill": "HB 5001",
    "year": 2026,
    "description": "An Act Concerning Absentee Voting for All and Various Other Reforms to the Administration of Elections — eliminates the excuse requirement for absentee ballots (implementing the November 2024 constitutional amendment); also adds absentee-ballot tracking software, allows 17-year-olds who will be 18 by election day to vote absentee/early, and creates penalties for tampering with drop boxes.",
    "status": "Passed House and Senate (Senate 25-11) on May 6-7, 2026 (final day of session); awaiting Governor Lamont's signature as of 2026-05-10.",
    "dateAdded": "2026-05-10",
    "active": true
  }
  ```
- **Sources:**
  - Connecticut General Assembly bill status (Tier 1) — https://www.cga.ct.gov/asp/cgabillstatus/cgabillstatus.asp?selBillType=Bill&bill_num=HB-5001
  - CT Mirror, "Voting by mail to be a universal option in Connecticut" (Tier 3) — https://ctmirror.org/2026/05/06/voting-by-mail-to-be-a-universal-option-in-connecticut/
  - CT News Junkie, "Expanded Absentee Ballot Legislation Passes Legislature, Heads To Lamont" (Tier 3) — https://ctnewsjunkie.com/2026/05/06/expanded-absentee-ballot-legislation-passes-legislature-heads-to-lamont/
  - ACLU of Connecticut, "H.B. 5001..." (Tier 3) — https://www.acluct.org/legislation/hb5001-neav-2026/
- **Justifying quote:** CT Mirror (May 6, 2026) reports the Senate passed HB 5001 25-11 on the final day of the General Assembly's annual session; the bill "removes restrictions on who may vote absentee and allows all voters in Connecticut to vote absentee without an excuse." It now heads to Gov. Ned Lamont; he had not yet signed it as of the latest reporting in this window.
- **Note:** Do NOT yet flip `mailInVoting.noExcuseRequired` — bill is not yet signed and the Tier 1 SOTS site still reflects the excuse requirement. Track as pending until signed.

### 2. Massachusetts — `pendingLegislation[0].status` (H.5001 ballot initiative)

- **Field:** `pendingLegislation[0].status`
- **Current value:** `"S.505 reported favorably by Election Laws Committee; legislature did not vote. Now before legislature as ballot initiative H.5001; if not enacted, goes to November 2026 ballot"`
- **Proposed value:** `"Legislature took no action by the May 5, 2026 deadline. Proponents must collect approximately 12,429 additional signatures by July 8, 2026 to place the question on the November 2026 ballot."`
- **Sources (3 Tier-3 sources in agreement):**
  - CommonWealth Beacon (Tier 3) — https://commonwealthbeacon.org/ballot-questions/mass-voters-might-face-11-ballot-questions-this-fall-heres-where-each-measure-stands/
  - Cambridge Day, May 7, 2026 (Tier 3) — https://www.cambridgeday.com/2026/05/07/11-ballot-questions-mass/
  - Ballotpedia (Tier 3) — https://ballotpedia.org/Massachusetts_Permit_Same-Day_Voter_Registration_Initiative_(2026)
- **Justifying quote:** CommonWealth Beacon: "The Legislature 'recommended no action' on it before the May deadline, meaning lawmakers did not pass it outright… campaigns 'face a July deadline to collect an additional 12,429 signatures to lock in a spot on the ballot.'"
- **Note:** Same change was rejected in the 2026-05-05 run when the deadline had not yet passed. It is now confirmed in three Tier-3 sources.

### 3. Massachusetts — `pendingLegislation[0].description` (H.5001 ballot initiative)

- **Field:** `pendingLegislation[0].description`
- **Current value:** `"Proposes same-day voter registration, allowing voters to register in-person on Election Day or during early voting. Now advancing as ballot initiative H.5001 (87,408 valid signatures certified Dec 18, 2025); legislature has until first Wednesday of May 2026 to act before it goes to voters."`
- **Proposed value:** `"Proposes same-day voter registration, allowing voters to register in-person on Election Day or during early voting. Advancing as ballot initiative H.5001 (87,408 valid signatures certified Dec 18, 2025). The Massachusetts Legislature took no action by its May 5, 2026 deadline; proponents must collect a second round of signatures by July 8, 2026 to place the question on the November 2026 ballot."`
- **Sources & justifying quote:** Same as #2 above.

### 4. West Virginia — add `pendingLegislation` entry for SJR 9

- **Field:** `pendingLegislation` (currently `[]`)
- **Current value:** `[]`
- **Proposed value:** Add an entry:
  ```json
  {
    "bill": "SJR 9",
    "year": 2026,
    "description": "Constitutional amendment proposing that 'Only citizens of the United States who are citizens of this state' may vote in state and local elections. Adopted by the West Virginia Legislature in April 2026 and placed on the November 3, 2026 ballot for voter ratification.",
    "status": "On the November 3, 2026 general election ballot; takes effect only if approved by voters",
    "dateAdded": "2026-05-10",
    "active": true
  }
  ```
- **Sources (Tier-3 corroborated):**
  - Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/04/29/idaho-amends-voter-id-affidavit-process-enacts-14-other-election-bills-in-2026/ *(West Virginia coverage section)*
  - West Virginia Record / Legalnewsline (Tier 3) — https://wvrecord.com/stories/697115423-west-virginians-to-vote-on-citizenship-amendment-in-november
  - WV Legislature SJR 9 official text (Tier 1 corroboration) — https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=SJR9%20SUB1%20enr.htm&yr=2026&sesstype=RS&i=9
- **Justifying quote:** WV Record: "West Virginia voters will decide a constitutional amendment in November that would clarify only U.S. citizens who are state residents may vote in state and local elections."
- **Note:** This was held back in the 2026-05-05 run because only one Tier-3 source had been verified at that time. The two-source corroboration threshold is now met.

## Informational notes (not proposed as changes)

These are notable post-2026-05-05 developments that do not change any tracked rule. They will not be presented for individual approval but are recorded here for next-run consideration.

### A. Alabama — special-election / redistricting bills signed
- Gov. Kay Ivey signed redistricting/special-primary bills (e.g., SB 1) on May 8, 2026, authorizing new congressional primaries if courts allow Alabama's preferred maps. Concerns redistricting only, no impact on tracked voter-requirement fields.
- Source: Alabama Reflector, https://alabamareflector.com/2026/05/08/alabama-legislature-gives-final-approval-to-primary-bills-as-state-seeks-to-redistrict/ (Tier 3)

### B. Hawaii — SB 2239 (automatic voter registration) on Governor's desk
- SB 2239 (converting AVR from opt-in to opt-out, effective Jan 1, 2027 if signed) was transmitted to Gov. Green but had not been signed by 2026-05-10. Will track in next run.

### C. Iowa — SF 2203 entry is stale (pre-window cleanup recommended)
- The current `pendingLegislation[0]` for Iowa describes SF 2203 status as "Passed Senate 34-13 (Feb 2026); heading to House." The bill effectively died at Iowa's second-funnel deadline March 20, 2026, and the May 3, 2026 session adjournment confirmed it. Both events pre-date the 2026-05-05 window cutoff, so this is not a flagged in-window change — but the entry is stale.
- Sources (informational): The Gazette (https://www.thegazette.com/news/state/which-bills-passed-the-iowa-legislature-this-year-which-didn-t/article_689bc91e-6bc9-48aa-9c4e-e7ef0b416184.html); Iowa Capital Dispatch (https://iowacapitaldispatch.com/2026/05/04/the-2026-legislative-session-is-over-heres-what-passed-failed-and-what-is-already-iowa-law/).
- Recommend addressing in a non-windowed cleanup pass. Will offer to the user as an optional add-on after the in-window changes are resolved.

### D. Vermont — S.298 (Voter Protections Act) passed both chambers
- S.298 passed both Vermont chambers but had not been signed by Gov. Scott as of 2026-05-06. Track in next run.

## States with no changes (44)

Alaska, Arizona, Arkansas, California, Colorado, Delaware, District of Columbia, Florida, Georgia, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Virginia, Washington, Wisconsin, Wyoming.

(Several states had bills advance in chambers, signings of pre-window bills, or litigation activity, but none altered the tracked fields. Pre-window items like Maryland VRA signing 4/28, Maine RCV advisory opinion 4/6, Nebraska LB 1075 signing 4/15, Mississippi SHIELD Act NVRA notice 4/10, and Kentucky HB 139 enactment 4/14–15 were already past the window cutoff.)

## Source priority audit

- **Tier 1** state official sites returned the expected text where reachable; CT General Assembly Tier 1 page corroborates HB 5001 passage, WV Legislature SJR 9 text page corroborates the resolution text.
- **Tier 2** Vote.org pages did not show in-window changes for any state.
- **Tier 3** corroboration rule applied: every Tier-3-only flag has at least two independent sources (CT HB 5001 has CT Mirror + CT News Junkie + ACLU CT; MA H.5001 has CommonWealth Beacon + Cambridge Day + Ballotpedia; WV SJR 9 has Ballotpedia News + WV Record + Tier-1 corroboration via WV Legislature site).

## Outcome — applied after one-at-a-time review

| # | State | Field | Decision |
|---|---|---|---|
| 1 | Connecticut | add `pendingLegislation` entry (HB 5001) | **Approved** |
| 2 | Massachusetts | `pendingLegislation[0].status` (H.5001) | **Approved** |
| 3 | Massachusetts | `pendingLegislation[0].description` (H.5001) | **Approved** |
| 4 | West Virginia | add `pendingLegislation` entry (SJR 9) | **Approved** |
| 5 (out-of-window optional) | Iowa | `pendingLegislation[0].status` for SF 2203 (staleness cleanup) | **Approved** |

**Net result:** All 4 in-window proposed changes applied. The optional Iowa staleness cleanup was also approved, updating SF 2203 status from "Passed Senate 34-13 (Feb 2026); heading to House" to "Failed: did not advance past 2026 second-funnel deadline (March 20, 2026); 2026 Iowa legislative session adjourned May 3, 2026".

States with `lastVerified` updated to 2026-05-10 in this run: Connecticut, Massachusetts, West Virginia, Iowa.

**Informational notes** (Alabama redistricting bills 5/8; Hawaii SB 2239 on Governor's desk; Vermont S.298 passed both chambers but not yet signed) were not flagged as fact changes and so were not presented for individual approval. They remain available in the research notes above for the next run.

## News capture (2026-05-10 run)

- **Items added:** 103 across 42 states.
- **States with no qualifying items in this window (omitted):** DE, DC, NH, OK, RI, UT, VT, WI (8).
- **Threshold discipline:** during merge, 3 items dropped (2 AK items dated 2026-05-04 equal to threshold; 1 CA item equal to threshold) — `>` rule enforced.
- **Per-state items capped at 5.**

### Link verification (103 items)

- **OK:** 79
- **TITLE_MISMATCH (corrected):** 5 — KS/2 (Johnson County Post), MN/0 (Spokesman-Recorder), OH/0 (Signal Ohio), PA/0 (Votebeat), PA/1 (Spotlight PA). Stored titles updated to match the actual published headlines.
- **AL/1 false positive:** verifier flagged a mismatch but the stored title actually does match the page headline; no change.
- **Unverifiable (Cloudflare 403, kept as-is):** 18 items hit anti-bot challenges (States Newsroom network, Stateline, Washington Post, TIME). Spot-checks via WebSearch confirmed they are real, live articles; only the automated WebFetch path was blocked. Not removed.
- **Removed:** 0.

### Change-log entries

- 42 "Recent News" entries dated 2026-05-10 added to states.json (one per state with new news items).
- Pending-legislation change entries added for CT, IA (out-of-window cleanup), MA, WV.
