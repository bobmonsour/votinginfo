# Periodic Research — 2026-05-05

**Run mode:** Requirements update (no news capture)
**Branch:** `research/2026-05-05`
**Last verified date for all 51 entries:** 2026-04-18
**Window of interest:** changes since 2026-04-18

## Summary

- **States reviewed:** 51 (50 states + DC)
- **States with proposed changes:** 4 (IN, ID, VA, MA)
- **States with informational notes (no rule change):** 2 (AK, CT)
- **States with no changes:** 45

Research was performed by 7 parallel agents, each with the relevant slice of `_data/states.json` so they could compare proposed values against the current values verbatim.

## Proposed changes (one-at-a-time review)

The following changes will be presented to the user individually for approval per the skill's one-at-a-time review protocol.

### 1. Indiana — `idRequirements.toVote`

- **Field:** `idRequirements.toVote`
- **Current value:** "Strict photo ID required (government-issued). Note: SB 10 (2025) banning university-issued student IDs as voter ID is blocked by a federal preliminary injunction (April 14, 2026); student IDs from Indiana public universities remain valid while litigation proceeds. State plans to appeal."
- **Proposed value:** "Strict photo ID required (government-issued). Under SB 10 (2025), university-issued student IDs are not accepted as voter ID. A federal preliminary injunction blocking enforcement was issued April 14, 2026 (Judge Richard Young, U.S. Dist.) but stayed by the Seventh Circuit on April 20, 2026, allowing the law to take effect for the May 5, 2026 primary while the appeal proceeds."
- **Sources:**
  - Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/04/22/appeals-court-allows-enforcement-of-indiana-law-banning-student-id-for-voting/
  - Bloomberg Law (Tier 3) — https://news.bloomberglaw.com/us-law-week/seventh-circuit-blocks-halt-on-indiana-student-voter-id-law
- **Justifying quote:** "The U.S. Court of Appeals for the Seventh Circuit overturned a lower court's preliminary injunction, allowing Indiana's student ID ban to take effect... 'We view the risk of disruption to Indiana's primary election as very serious'... allowing the law to take effect for Indiana's May 5 primary election."

### 2. Indiana — `recentLegislation[0].status` (SB 10)

- **Field:** `recentLegislation[0].status` (bill: SB 10)
- **Current value:** "Enacted July 2025; preliminary injunction issued April 14, 2026 (U.S. Dist. Judge Richard Young) blocking enforcement; state plans to appeal"
- **Proposed value:** "Enacted July 2025; preliminary injunction issued April 14, 2026 (U.S. Dist. Judge Richard Young); stayed by Seventh Circuit Court of Appeals April 20, 2026 allowing enforcement during the appeal; in effect for the May 5, 2026 primary"
- **Sources:** Same as above (Ballotpedia News + Bloomberg Law, Tier 3 corroborated)

### 3. Idaho — add `recentLegislation` entry for S 1322

- **Field:** `recentLegislation` (currently `[]`)
- **Current value:** `[]`
- **Proposed value:** Add an entry:
  ```json
  {
    "bill": "S 1322",
    "year": 2026,
    "description": "Amends voter ID affidavit process — voters using affidavit in lieu of photo ID must also provide either date of birth or Idaho driver's license/ID number, in addition to name and address.",
    "status": "Signed by Gov. Brad Little March 31, 2026; effective July 1, 2026",
    "dateAdded": "2026-05-05",
    "active": true
  }
  ```
- **Sources:**
  - Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/04/29/idaho-amends-voter-id-affidavit-process-enacts-14-other-election-bills-in-2026/
  - LegiScan ID S1322 (Tier 3) — https://legiscan.com/ID/bill/S1322/2026
- **Justifying quote:** "S 1322... amends the state's option for voters to fill out an affidavit instead of providing a photo ID when voting. The new law requires voters to provide either their date of birth or Idaho driver's license or ID card number on the affidavit, in addition to their name and address... signed it into law on March 31."
- **Note:** Although the bill was signed before the 2026-04-18 verification date, it was not captured in the prior run; including it now corrects the omission.

### 4. Virginia — `felonyVotingRules`

- **Field:** `felonyVotingRules`
- **Current value:** "Rights not automatically restored. Must apply to the governor for restoration after completion of sentence."
- **Proposed value:** "As of June 1, 2026, per the federal court ruling in King v. Youngkin, Virginia can no longer disenfranchise people convicted of felonies except for a narrow set of common-law felonies (murder, manslaughter, arson, burglary, robbery, rape, sodomy, mayhem, larceny). Eligible non-common-law felons can register to vote without gubernatorial restoration starting June 1, 2026. Until then, the existing process — apply to the governor for restoration after completion of sentence — still applies."
- **Sources:**
  - Virginia Mercury (Tier 3) — https://virginiamercury.com/2026/05/04/thousands-of-virginians-will-regain-the-right-to-vote-next-month/
  - WTOP News (Tier 3) — https://wtop.com/virginia/2026/05/expanded-voting-rights-for-former-felons-in-virginia-set-to-begin-next-month/
  - ACLU of Virginia (Tier 3) — https://www.acluva.org/cases/king-v-youngkin/
- **Justifying quote:** "June 1, 2026, marks 'the first day of eligibility for some to register to vote without first needing a governor's approval'... Virginia can no longer deny people with felony convictions the right to vote except for a very narrow set of common-law felonies."

### 5. Virginia — add `recentLegislation` entry for King v. Youngkin ruling

- **Field:** `recentLegislation` (currently `[]`)
- **Current value:** `[]`
- **Proposed value:** Add an entry:
  ```json
  {
    "bill": "King v. Youngkin (federal court ruling)",
    "year": 2026,
    "description": "Federal court ruling barring Virginia from disenfranchising people convicted of felonies except for a narrow set of common-law felonies (murder, manslaughter, arson, burglary, robbery, rape, sodomy, mayhem, larceny). Eliminates need for gubernatorial restoration for non-common-law felonies.",
    "status": "Implementation begins June 1, 2026 (extended from May 1)",
    "dateAdded": "2026-05-05",
    "active": true
  }
  ```
- **Sources:** Same as #4 above (Tier 3 corroborated).

### 6. Massachusetts — `pendingLegislation[0].status` (H.5001 ballot initiative)

- **Field:** `pendingLegislation[0].status`
- **Current value:** "S.505 reported favorably by Election Laws Committee; legislature did not vote. Now before legislature as ballot initiative H.5001; if not enacted, goes to November 2026 ballot"
- **Proposed value:** "S.505 reported favorably by Election Laws Committee; legislature did not vote. As ballot initiative H.5001, referred to Special Joint Committee on Initiative Petitions Feb 5, 2026; hearing held March 31, 2026. The May 5/6, 2026 deadline for the legislature to act passed without a floor vote. Proponents must collect ~12,429 additional signatures by July 1, 2026 to place the question on the November 2026 ballot."
- **Sources:**
  - Massachusetts General Court (Tier 1) — https://malegislature.gov/Bills/194/H5001
  - Ballotpedia (Tier 3) — https://ballotpedia.org/Massachusetts_Permit_Same-Day_Voter_Registration_Initiative_(2026)
  - State House News Service (Tier 3) — https://www.statehousenews.com/news/politics/elections/galvins-appeal-lighten-ballot-load-by-adopting-registration-reform/article_1fe2de09-fd8b-48f9-b36a-9c736416a4a0.html
- **Justifying quote:** "As of May 5, 2026, Bill H.5001 ... has progressed through initial legislative steps but has not yet been voted on... The Legislature can remove the question from the ballot by passing it into law by May 5, 2026. If the Legislature does not, petitioners must collect an additional 12,429 signatures."

## Informational notes (not proposed as changes)

These are notable post-2026-04-18 developments that do not change any tracked rule. They will be presented to the user as optional add-ons.

### A. Alaska — SB 64 veto override failed

- Gov. Dunleavy vetoed SB 64 (bipartisan election reform: ballot curing, ballot tracking with paid postage, tribal IDs, rural community liaison, PFD-app voter registration) on April 30, 2026.
- The override attempt failed in the legislature on May 4, 2026 (vote 38-22; needed 40).
- Sources: Alaska Public Media, Alaska's News Source, Alaska Federation of Natives (Tier 3, corroborated).
- **Why not flagged as a change:** The bill was never enacted, so no tracked field changes. Adding a `changes` log entry is optional editorial choice.

### B. Connecticut — HB 5001 (no-excuse absentee enabling legislation) advanced

- Passed Connecticut House 101-49 on April 23, 2026; favorable Senate committee report April 27, 2026; tabled on Senate Calendar #460. Session adjourns May 6, 2026.
- Sources: CGA bill page (Tier 1), CT Mirror, ACLU-CT, FastDemocracy (Tier 3 corroborated).
- **Why not flagged as a change:** Current data already states "enabling legislation pending." Adding HB 5001 as a tracked `pendingLegislation` entry is optional.

### C. West Virginia — SJR 9 placed on November 2026 ballot

- Constitutional amendment proposing "Only citizens of the United States who are citizens of this state" may vote in state/local elections. Adopted by legislature April 2026 (session ended April 12).
- Sources: Ballotpedia News (Tier 3, single source). **Per tier rules, Tier 3 requires two corroborating sources before flagging.** Will defer this until a second source is verified during the next run.

## States with no changes (45)

Alabama, Alaska (rule fields unchanged), Arizona, Arkansas, California, Colorado, Connecticut (rule fields unchanged), Delaware, Florida, Georgia, Hawaii, Illinois, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Washington, West Virginia (rule fields unchanged), Wisconsin, Wyoming, District of Columbia.

(Several states had bills advance through chambers or initial signings between April 18 and May 5, but none altered the tracked fields. Examples: Iowa SF 2203 still in House; Kansas SAVE Act litigation not yet filed; Kentucky HB 139 effective 2028; Louisiana SB 436 implementation guidance still not issued; Maine RCV expansion blocked by state supreme court but doesn't affect existing fields; Maryland VRA signed but doesn't change tracked fields; Mississippi SHIELD Act NVRA notice letter only; Missouri probation/parole bill stuck in Senate; Nebraska 2026 session enacted 5 election bills, none touching tracked fields; Nevada not in regular session; NH HB 1569 trial ruling still pending; Ohio HB 54 BMV DPOC litigation status unchanged; Oklahoma SJR 47 sent to August 2026 special election; Pennsylvania HB 771 still pending; Rhode Island bills only chamber-passed; South Carolina SAVE Act in committee; Tennessee SAVE-related bill is the previously-tracked PC 473 successor; Texas SB 506 doesn't touch tracked fields; Utah HB 209 still effective May 6 as documented; Wisconsin Act 214 doesn't affect tracked fields; Washington 2026 bills relate to VRA/preclearance not tracked fields; Wyoming HB 156 lawsuit dismissed in July 2025 — predates baseline.)

## Source priority audit

- **Tier 1** (state official sites) returned 403 errors for several states (GA, ID, IL during this run). All flagged discrepancies were verified through Tier 3 corroboration where Tier 1/2 was unavailable. The Massachusetts H.5001 status update used Tier 1 (MA General Court) plus Tier 3.
- **Tier 2** (Vote.org) was largely unreachable during this run. Where used, agents fell back to Tier 3 corroboration.
- **Tier 3** corroboration rule applied: every Tier-3-only flag has at least two independent sources (e.g., IN SB 10 has both Ballotpedia News + Bloomberg Law).

## Outcome — applied after one-at-a-time review

| # | State | Field | Decision |
|---|---|---|---|
| 1 | Indiana | `idRequirements.toVote` | **Approved** |
| 2 | Indiana | `recentLegislation[0].status` (SB 10) | **Approved** |
| 3 | Idaho | add `recentLegislation` entry (S 1322) | **Approved** |
| 4 | Virginia | `felonyVotingRules` | **Approved** |
| 5 | Virginia | add `recentLegislation` entry (King v. Youngkin) | **Approved** |
| 6 | Massachusetts | `pendingLegislation[0].status` (H.5001) | **Rejected** |

**Net result:** 5 of 6 proposed changes applied. The Massachusetts H.5001 status update was rejected; the existing `pendingLegislation[0].status` text remains unchanged. May be revisited at the next run after the May 6 session adjournment.

States with `lastVerified` updated to 2026-05-05 in this run: Indiana, Idaho, Virginia.

**Informational notes** (Alaska SB 64 veto/override failure; Connecticut HB 5001 advancement; West Virginia SJR 9) were not flagged as fact changes and so were not presented for individual approval. They remain available in the research notes above for the next run.
