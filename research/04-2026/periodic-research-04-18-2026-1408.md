# Periodic Voting Research — 2026-04-18 (14:08)

**Branch:** `research/2026-04-18`
**Run mode:** Full run (data verification + news update)

## Summary

- **States reviewed:** 51 (50 states + DC)
- **States with data discrepancies:** 8 (FL, IN, KS, KY, MS, NH, TN, UT)
- **States with no changes:** 43
- **Qualifying news items gathered:** ~156 across all 51 states (strictly newer than each state's most recent captured news date)

Research was conducted by six parallel research agents, each covering 8–9 states. Every flagged discrepancy was cross-referenced against the exact current values in `_data/states.json`. All 51 states had conclusive research outcomes; none were inconclusive.

## Discrepancies found

### 1. Florida (FL) — HB 991 signed into law

- **Field:** `pendingLegislation` → move to `recentLegislation`
- **Current value in states.json:**
  - Bill: `HB 991`, year 2026
  - Status: `"Passed both chambers (House 77-28, Senate 27-12) March 2026; awaiting Governor's signature; effective Jan 1, 2027 if signed"`
- **Correct value:** HB 991 (Florida SAVE Act) was signed by Governor DeSantis on April 1, 2026. Moves from pendingLegislation to recentLegislation.
  - Status: `"Signed by Gov. DeSantis April 1, 2026; effective Jan 1, 2027; federal lawsuit filed same day by voting rights groups"`
- **Sources:**
  - [Governor's press release — Florida SAVE Act signing](https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-signs-florida-save-act-strengthen-election-integrity-and) (Tier 1)
  - [Florida Phoenix](https://floridaphoenix.com/2026/04/01/desantis-signs-bill-requiring-proof-of-citizenship-to-register-to-vote-voting-rights-group-sue/) (Tier 3)
  - [CBS News Miami](https://www.cbsnews.com/miami/news/florida-voting-rights-groups-lawsuit-desantis-save-america-act/) (Tier 3)

### 2. Indiana (IN) — SB 10 blocked by federal preliminary injunction

- **Field 1:** `idRequirements.toVote`
- **Current value:** `"Strict photo ID required (government-issued). Note: University-issued student IDs are no longer accepted as voter ID per SB 10 (2025); this law is currently under federal litigation."`
- **Correct value:** `"Strict photo ID required (government-issued). Note: SB 10 (2025) banning university-issued student IDs as voter ID is blocked by a federal preliminary injunction (April 14, 2026); student IDs from Indiana public universities remain valid while litigation proceeds. State plans to appeal."`
- **Field 2:** `recentLegislation` entry for SB 10
- **Current status value:** `"Enacted, federal litigation in progress"`
- **Correct value:** `"Enacted July 2025; preliminary injunction issued April 14, 2026 (U.S. Dist. Judge Richard Young) blocking enforcement; state plans to appeal"`
- **Sources (3 Tier 3 sources agreeing):**
  - [Indiana Capital Chronicle](https://indianacapitalchronicle.com/2026/04/14/federal-judge-blocks-indianas-ban-on-use-of-student-ids-for-voting/) (Tier 3)
  - [Ballotpedia](https://news.ballotpedia.org/2026/04/17/federal-judge-blocks-indiana-law-banning-student-id-for-voting/) (Tier 3)
  - [Louisville Public Media](https://www.lpm.org/news/2026-04-16/student-ids-can-be-used-to-vote-in-indiana-federal-judge-rules) (Tier 3)

### 3. Kansas (KS) — SAVE Kansas Act added via veto override

- **Field:** `recentLegislation` (add new entry)
- **Current value:** Only SAFE Act (2024) and SB 4 (2025) listed.
- **Correct addition:** Add SAVE Kansas Act (2026):
  - Bill: `SAVE Kansas Act`, year 2026
  - Description: `"Restricts online voter registration to .gov websites; expands voter-roll purge procedures (inactive 4 years triggers notice for removal); requires Secretary of State to check voter rolls against federal SAVE database for noncitizens; requires state agencies to share personal data (including SSNs) with the Secretary of State."`
  - Status: `"Vetoed by Gov. Kelly April 8, 2026; veto overridden by legislature April 9, 2026; effective July 1, 2026"`
- **Sources (3 Tier 3 sources agreeing):**
  - [Democracy Docket](https://www.democracydocket.com/news-alerts/gop-lawmakers-override-governor-veto-to-pass-voter-suppression-save-kansas-act/) (Tier 3)
  - [StateScoop](https://statescoop.com/kansas-laura-kelly-save-elections-voting/) (Tier 3)
  - [KCUR](https://www.kcur.org/politics-elections-and-government/2026-04-15/kansas-republicans-veto-override-laura-kelly-law) (Tier 3)

### 4. Kentucky (KY) — HB 139 omnibus elections bill added via veto override

- **Field:** `recentLegislation` (add new entry — currently empty array)
- **Current value:** `recentLegislation: []`
- **Correct addition:** Add HB 139 (2026):
  - Bill: `HB 139`, year 2026
  - Description: `"Omnibus elections bill: authorizes State Board of Elections to enter agreements with federal agencies to identify deceased persons and noncitizens on voter rolls; bars use of Social Security cards and public benefits cards as voter ID; raises political donation limits to $3,500; allows legislators to transfer campaign funds to statewide office campaigns; permits judicial candidates to disclose partisan affiliation."`
  - Status: `"Vetoed by Gov. Beshear April 10, 2026; veto overridden by legislature April 14-15, 2026"`
- **Sources (3 Tier 3 sources agreeing):**
  - [Louisville Public Media](https://www.lpm.org/news/2026-04-14/republicans-tore-through-beshears-vetoes-tuesday-overriding-nearly-all-of-them) (Tier 3)
  - [Kentucky Lantern — Beshear veto override](https://kentuckylantern.com/2026/04/13/kys-beshear-gives-veto-pen-a-workout-but-gop-has-votes-to-override/) (Tier 3)
  - [Kentucky Lantern — Senate passes HB 139](https://kentuckylantern.com/2026/03/26/omnibus-elections-bill-upping-political-donation-limits-passes-kentucky-senate/) (Tier 3)

### 5. Mississippi (MS) — SHIELD Act signed

- **Field:** `recentLegislation` (add new entry — currently empty array)
- **Current value:** `recentLegislation: []`
- **Correct addition:** Add SHIELD Act (SB 2588):
  - Bill: `SB 2588 (SHIELD Act)`, year 2026
  - Description: `"Requires citizenship verification for voter registration using the federal SAVE database and state driver's license records; mandates annual voter roll audits."`
  - Status: `"Signed by Gov. Reeves April 1, 2026; effective July 1, 2026"`
- **Sources (Tier 1 + 3 Tier 3 sources agreeing):**
  - [MS Legislature — SB 2588 bill status](https://billstatus.ls.state.ms.us/documents/2026/html/SB/2500-2599/SB2588PS.htm) (Tier 1 — state legislature)
  - [WLBT](https://www.wlbt.com/2026/04/01/gov-reeves-signs-bill-require-verifying-citizenship-when-registering-people-vote/) (Tier 3)
  - [Magnolia Tribune](https://magnoliatribune.com/2026/04/01/governor-signs-shield-act-into-law-seeking-to-further-safeguard-mississippi-elections/) (Tier 3)
  - [Mississippi Free Press](https://www.mississippifreepress.org/mississippi-governor-signs-shield-act-into-law-enacting-voter-citizenship-checks/) (Tier 3)

### 6. New Hampshire (NH) — HB 323 signed, student IDs eliminated

- **Field 1:** `idRequirements.toVote`
- **Current value:** `"Photo ID required. Voters without ID must retrieve it before voting; the challenged voter affidavit option was eliminated by HB 1569."`
- **Correct value:** `"Photo ID required. Voters without ID must retrieve it before voting; the challenged voter affidavit option was eliminated by HB 1569. Under HB 323 (effective June 2, 2026), student IDs — including government-issued college/university IDs — are no longer accepted; only government-issued IDs such as driver's licenses, state IDs, passports, and military IDs qualify."`
- **Field 2:** `recentLegislation` (add new entry)
- **Correct addition:** Add HB 323 (2026):
  - Bill: `HB 323`, year 2026
  - Description: `"Eliminates student IDs (including college/university IDs) as acceptable forms of voter identification. Requires government-issued ID such as driver's license, state ID, passport, or military ID."`
  - Status: `"Signed by Gov. Ayotte April 3, 2026; effective June 2, 2026"`
- **Note:** HB 1569 status remains accurate ("Enacted; federal trial concluded Feb 2026, ruling pending") — Judge Elliott's ruling is still pending as of 2026-04-18.
- **Sources (3 Tier 3 sources agreeing):**
  - [New Hampshire Bulletin](https://newhampshirebulletin.com/briefs/ayotte-signs-bill-barring-use-of-student-ids-to-vote/) (Tier 3)
  - [Boston Globe](https://www.bostonglobe.com/2026/04/03/metro/nh-student-ids-disallowed-voting/) (Tier 3)
  - [Concord Monitor](https://www.concordmonitor.com/2026/04/06/new-hampshire-student-id-voting-law/) (Tier 3)

### 7. Tennessee (TN) — SB 336/HB 687 and PC 473 added; felony rules updated

- **Field 1:** `recentLegislation` (currently empty)
- **Correct addition 1:** Add SB 336/HB 687 (2026):
  - Bill: `SB 336 / HB 687`, year 2026
  - Description: `"Eases felony voting rights restoration: removes requirement to pay all outstanding court costs, and allows compliance with child support orders for the last year (rather than full payment of arrearage) to satisfy that prerequisite."`
  - Status: `"Signed by Gov. Lee in early April 2026"`
- **Correct addition 2:** Add PC 473 (2025):
  - Bill: `PC 473`, year 2025
  - Description: `"Requires real-time verification of U.S. citizenship and felony status at voter registration; pending DHS SAVE database portal implementation by 2028."`
  - Status: `"Effective Jan 1, 2026"`
- **Field 2:** `felonyVotingRules`
- **Current value:** `"Restoration process varies by felony type and conviction date. Generally must apply for restoration after completion of sentence and payment of restitution."`
- **Correct value:** `"Restoration process varies by felony type and conviction date. Generally must apply for restoration after completion of sentence. Under SB 336/HB 687 (April 2026), Tennessee no longer requires payment of all outstanding court costs and fees as a prerequisite to restoration, and compliance with child support orders for the last year (rather than full payment of arrearage) is now sufficient."`
- **Sources (Tier 1 + 3 Tier 3 sources agreeing):**
  - [TN Secretary of State — PC 473 full text](https://publications.tnsosfiles.com/acts/114/pub/pc0473.pdf) (Tier 1)
  - [NewsChannel 5 — SB 336/HB 687](https://www.newschannel5.com/news/lawmakers-pass-bill-easing-voting-rights-restoration-in-tennessee) (Tier 3)
  - [WSMV/AP — Tennessee eases child-support rule](https://www.wsmv.com/2026/04/04/tennessee-eases-up-its-unique-child-support-rule-restoring-voting-rights-after-felony/) (Tier 3)
  - [Tennessee Lookout — citizenship database bill](https://tennesseelookout.com/2026/04/07/bill-requiring-citizenship-database-checks-for-voter-registration-heads-to-governors-desk/) (Tier 3)

### 8. Utah (UT) — HB 209 and SB 153 added

- **Field:** `recentLegislation` (add two new entries — currently only HB 300 (2025) listed)
- **Correct addition 1:** Add HB 209 (2026):
  - Bill: `HB 209`, year 2026
  - Description: `"Requires documentary proof of U.S. citizenship to register for state and local elections; voters without proof may cast federal-only ballots. Election officials must review all registered voters by July 1, 2026."`
  - Status: `"Signed by Gov. Cox March 25, 2026; effective May 6, 2026"`
- **Correct addition 2:** Add SB 153 (2026):
  - Bill: `SB 153`, year 2026
  - Description: `"Voter record privacy changes: previously-private voter records become public unless voters apply for and are granted 'at-risk' status. Establishes a $1,050 fee to access the statewide voter rolls."`
  - Status: `"Enacted 2026; effective April 6, 2026"`
- **Note:** Once HB 209 takes effect May 6, the `idRequirements.toRegister` field may also need updating to reflect the new documentary proof-of-citizenship requirement. Deferring that update to a future run to avoid describing law not yet in effect.
- **Sources (3 Tier 3 sources agreeing for each bill):**
  - HB 209: [Ballotpedia — Utah enacts 2026 session bills](https://news.ballotpedia.org/2026/04/08/utah-enacts-proof-of-citizenship-bill-13-other-election-related-bills-during-2026-session/), [Voting Rights Lab](https://votingrightslab.org/2026/03/09/the-markup-proof-of-citizenship-bill-headed-to-utah-governor/), [Ballotpedia — FL/SD/UT](https://news.ballotpedia.org/2026/04/01/florida-south-dakota-utah-enact-proof-of-citizenship-laws-for-voter-registration/) (all Tier 3)
  - SB 153: [Utah News Dispatch](https://utahnewsdispatch.com/2026/04/09/what-to-know-about-utah-new-voter-privacy-law/), [Deseret News](https://www.deseret.com/politics/2026/04/13/utah-changes-its-voter-privacy-law-as-trump-administration-sues-state-for-access-to-voter-rolls/), [KSL](https://www.ksl.com/article/51483396/elections-officials-explain-why-utah-voter-information-is-becoming-public) (all Tier 3)

## States with no required changes (43)

AL, AK, AZ, AR, CA, CO, CT, DE, DC, GA, HI, ID, IL, IA, LA, ME, MD, MA, MI, MN, MO, MT, NE, NV, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TX, VT, VA, WA, WV, WI, WY

Several of these states have active legislative activity captured in News items but not yet enacted:
- **CA:** SB 1164/SB 1360 (CA Voting Rights Act 2026) — introduced, not enacted
- **CO:** HB 1113 (mail ballot timing) — pending in Senate
- **CT:** HB 5001 (no-excuse absentee enabling legislation) — passed committee
- **DE:** SB 3 (no-excuse absentee constitutional amendment) — first leg passed; needs second leg in 2027-28
- **IA:** SF 2203 status unchanged (passed Senate; heading to House)
- **MI:** HB 4765 (proof-of-citizenship) — passed House April 15, unlikely to advance in Dem-led Senate
- **OK:** SJR 47 (constitutional voter-ID amendment) — referred to August 25, 2026 ballot
- **SC:** SB 128 (proof-of-citizenship) — Senate movement, not enacted
- **WA:** IP26-500 (ballot initiative, proof-of-citizenship) — gathering signatures

## News items

~156 qualifying news items gathered across all 51 states, each newer than the previously captured most-recent date for that state. Full detail by state is in the six working files at `docs/research-working/group-{1..6}.md`.

Dominant storylines:
- Trump's March 31 executive order on federal elections and multistate AG litigation (responses in CA, CT, DE, MA, MI, MN, NC, NH, NJ, NV, NY, PA, RI, VT, WA)
- DOJ voter-roll lawsuits against multiple states (CA, MA, MI, OR, RI, UT, WA, WV) — federal judge in RI (McElroy, Trump-appointed) dismissed DOJ case April 17
- Four new proof-of-citizenship enactments (FL, KS, MS, UT) plus NH student-ID law
- Primary season coverage and deadlines (AL, AZ, AR, CO, GA, ID, IL, KY, MA, MD, NE, NM, NY, NC, OH, OK, OR, PA, SC, SD, TN, TX, UT, WV, WI)
- Tennessee's easing of felony rights restoration (SB 336/HB 687)
