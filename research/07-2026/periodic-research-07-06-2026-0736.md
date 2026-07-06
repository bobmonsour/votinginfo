# Periodic Research — Requirements Update

- **Date of research:** 2026-07-06 (Pacific Time)
- **Mode:** Requirements update (data verification only; no news capture)
- **States reviewed:** 51 (50 states + DC), all fields verified against Tier 1 (state official sites), Tier 2 (Vote.org), and Tier 3 (NCSL, Ballotpedia, reputable news) sources
- **Proposed changes:** 8 (across AZ, HI, IA, SD, VA, VT, WV, WY)

## Summary of findings

A parallel six-agent sweep verified `eligibilityAge`, `idRequirements`, `registrationDeadline`, `registrationMethods`, `sameDayRegistration`, `earlyVoting`, `mailInVoting`, `felonyVotingRules`, `documentationNeeded`, `recentLegislation`, and `pendingLegislation` for every state. Core voter-facing requirement fields were overwhelmingly accurate. The discrepancies found are concentrated in **legislation tracking** (bills that moved from pending→enacted since the last verification) and two **ID/registration-requirement** fields that lagged behind enacted law (SD, WV).

## Proposed changes (to be reviewed one at a time)

### 1. Arizona (AZ) — Pending Legislation status
- **Current value:** HB 2492 item status = `"Blocked by 9th Circuit (Feb 2025); rehearing denied Sep 2025; SCOTUS cert petition filed Feb 19, 2026 (No. 25-1017), pending"`
- **Correct value:** SCOTUS **granted certiorari on June 29, 2026** in *Republican National Committee v. Mi Familia Vota* (No. 25-1017); to be heard in the term beginning Oct 2026, decision expected by June 2027. Does not affect AZ's 2026 elections.
- **Sources:** AZ Secretary of State (Tier 1); Ballotpedia + NBC News + AZ Capitol Times (Tier 3, corroborated)
- **URLs:** https://azsos.gov/news/1036 · https://news.ballotpedia.org/2026/07/02/u-s-supreme-court-agrees-to-review-arizonas-documentary-proof-of-citizenship-and-noncitizen-voter-removal-laws/ · https://www.nbcnews.com/politics/supreme-court/supreme-court-weigh-arizonas-proof-citizenship-voting-law-rcna351239

### 2. Hawaii (HI) — Legislation (SB 2239 enacted)
- **Current value:** SB 2239 under `pendingLegislation`, status = `"Passed legislature (Senate 24-1, House 40-11); sent to Gov. Green early May 2026; awaiting governor's action"`
- **Correct value:** Signed into law as **Act 67** (automatic voter registration, effective Jan 1, 2027). Move from `pendingLegislation` to `recentLegislation` with enacted status.
- **Sources:** Maui Now, Big Island Now, Kauaʻi Now, Hawaiʻi State Senate Majority press release (Tier 3, corroborated)
- **URLs:** https://mauinow.com/2026/06/18/sb2239-automatic-voter-registration-signed-into-law/ · https://www.hawaiisenatemajority.com/press-release/senate-bill-2239-signed-into-law-establishing-automatic-voter-registration-in-hawai%CA%BBi

### 3. Iowa (IA) — Recent Legislation (2026 bills enacted)
- **Current value:** `recentLegislation` lists only 2025 bills (HF 928, HF 954); `pendingLegislation` SF 2203 status = `"Failed: did not advance past 2026 second-funnel deadline (March 20, 2026); 2026 Iowa legislative session adjourned May 3, 2026"`
- **Correct value:** SF 2203 did fail, but an equivalent SAVE-based citizenship-verification law was enacted: **SF 2218** (annual SAVE verification of all registered voters; signed June 2, 2026). Iowa enacted five election bills in 2026, also including **HF 2601** (bans foreign/noncitizen contributions to ballot-measure campaigns) and **HF 2501** (ends identity-attestation for voters without ID).
- **Sources:** Ballotpedia + The Gazette + Iowa Capital Dispatch (Tier 3, corroborated)
- **URLs:** https://news.ballotpedia.org/2026/06/11/iowa-enacts-five-election-bills-in-2026-including-prohibition-on-foreign-donations-in-ballot-measure-elections/ · https://iowacapitaldispatch.com/2026/05/04/the-2026-legislative-session-is-over-heres-what-passed-failed-and-what-is-already-iowa-law/

### 4. South Dakota (SD) — Registration ID requirements
- **Current value:** `idRequirements.toRegister` = `"SD driver's license or non-driver ID number; if no DL, last 4 of SSN. If neither, applicant must provide a personal identification affidavit facilitated by the registration examiner."`; `documentationNeeded` = `["Valid photo ID or signed affidavit"]`
- **Correct value:** First-time registrants must now provide **documentary proof of U.S. citizenship** (SD DL/ID issued after July 1, 2025; out-of-state ID verifying citizenship; tribal ID; or photocopy of birth certificate/passport/Consular Report/naturalization). Registrants who don't are registered "federal-only." (SB 175 is already in `recentLegislation`, but these fields were not updated to match.)
- **Sources:** SD Secretary of State (Tier 1); Ballotpedia, SDPB, KOTA (Tier 3, corroborated)
- **URLs:** https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx · https://news.ballotpedia.org/2026/04/23/south-dakota-enacts-proof-of-citizenship-law-20-other-election-bills-in-2026-session/

### 5. Virginia (VA) — Felony voting rules (temporal update)
- **Current value:** `felonyVotingRules` frames King v. Youngkin prospectively ("Eligible non-common-law felons can register to vote without gubernatorial restoration **starting June 1, 2026**… **Until then**, the existing process… still applies."); `recentLegislation` status = `"Implementation begins June 1, 2026 (extended from May 1)"`
- **Correct value:** June 1, 2026 has passed; the ruling is now in effect. The prospective/"until then" framing is stale. Add the nuance that Virginia ELECT advised officials to stop *denying* non-common-law-felony registrations but to *hold* the applications (many are in limbo, not yet processed).
- **Sources:** ACLU of Virginia + VPM News (Tier 3, corroborated)
- **URLs:** https://www.acluva.org/cases/king-v-youngkin/ · https://www.vpm.org/news/2026-06-02/king-v-youngkin-voting-rights-virginia-elect-aclu-gibney-jones-oag

### 6. Vermont (VT) — Recent Legislation (S.298 enacted)
- **Current value:** `recentLegislation` = `[]`
- **Correct value:** Add **S.298 ("Vermont Voter Protections Act," Act 70)**, signed by Gov. Scott June 8, 2026 — strengthens penalties for election interference/voter intimidation, updates voter-checklist and election-security rules. Requirement fields unchanged.
- **Sources:** Vermont Legislature (Tier 1)
- **URLs:** https://legislature.vermont.gov/Documents/2026/Docs/ACTS/ACT070/ACT070%20Act%20Summary.pdf

### 7. West Virginia (WV) — ID to vote (accepted photo ID list)
- **Current value:** `idRequirements.toVote` = `"Photo ID required per HB 3016 (effective July 11, 2025). Accepted: WV driver's license or state ID, U.S. passport, U.S. military photo ID, or tribal photo ID. Voters without photo ID may cast a provisional ballot."`
- **Correct value:** The HB 3016 statutory list is: WV driver's license or state ID; U.S. passport or passport card; government employee photo ID (state/local/federal); student photo ID from a WV higher-ed institution or WV high school; U.S. military photo ID; and voter registration card with photo issued by a WV county clerk or the SoS. **Tribal ID is not on the statutory list**, and the stored value omits the government-employee, WV student, and photo voter-registration-card IDs.
- **Sources:** WV Secretary of State voter-ID flyer (Tier 1); Ballotpedia + HB 3016 bill text (Tier 3, corroborated)
- **URLs:** https://ballotpedia.org/Voter_ID_in_West_Virginia · https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb3016+intr.htm&yr=2025&sesstype=RS&i=3016

### 8. Wyoming (WY) — Recent Legislation (HB 156 scope)
- **Current value:** HB 156 description = `"Requires documentary proof of U.S. citizenship to register to vote"`
- **Correct value:** HB 156 does two things: documentary proof of U.S. citizenship **and** a new 30-day durational residency requirement (voters must have resided in WY at least 30 days before an election; in effect since July 1, 2025). The stored description omits the 30-day residency half.
- **Sources:** Bolts + Wyoming Public Media + Wyoming News (Tier 3, corroborated)
- **URLs:** https://boltsmag.org/wyoming-voter-registration-proof-of-citizenship-law/ · https://www.wyomingpublicmedia.org/politics-government/2025-07-22/judge-tosses-federal-lawsuit-against-new-voter-residency-requirement

## Informational items (not proposed as changes — pending or below threshold)

- **California (CA):** GOP-backed voter-ID initiative qualified for the Nov 3, 2026 ballot; `pendingLegislation` empty. Citizen ballot measure, not enacted law — candidate for a `pendingLegislation` note if desired.
- **North Carolina (NC):** 37-page omnibus election bill moving through the legislature (June 2026, not enacted); voter-ID constitutional amendment set for Nov 2026 ballot. Both pending.
- **District of Columbia (DC):** First-time ranked-choice voting (Initiative 83) in 2026. Requirement fields unchanged.
- **Tennessee (TN):** Possible signing-date correction for SB 336/HB 687 (Ballotpedia says March 26, 2026 vs stored "early April 2026") — only one source; below the two-Tier-3 threshold. Not flagged.

## States with no changes found

AL, AK, AR, CO, CT, DE, FL, GA, ID, IL, IN, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, TN, TX, UT, WA (requirement fields verified accurate; NC and TN carry informational notes above).

---

## Addendum — applied changes

All 8 proposed changes were **approved and applied**, plus 3 informational items the operator elected to add. Every affected state's `lastVerified` was set to 2026-07-06 and a `changes` entry was appended.

**Approved (8 confirmed discrepancies):**

1. **AZ** — Pending Legislation: HB 2492/SCOTUS status updated to "cert granted June 29, 2026."
2. **HI** — SB 2239 moved from pending → recent as Act 67 (automatic voter registration, effective Jan 1, 2027).
3. **IA** — Recent Legislation: added **all five** enacted 2026 election bills (SF 2218, HF 2601, HF 2501, SF 140, SF 2472). *(Operator expanded from the 3 originally proposed to all 5.)*
4. **SD** — ID to register / documentation updated to reflect SB 175 documentary-proof-of-citizenship requirement (federal-only fallback).
5. **VA** — Felony voting rules updated to present tense (King v. Youngkin now in effect since June 1, 2026) with Virginia ELECT hold-not-deny nuance.
6. **VT** — Recent Legislation: added S.298 (Act 70), Vermont Voter Protections Act, signed June 8, 2026.
7. **WV** — ID to vote: corrected HB 3016 accepted-ID list (removed tribal ID; added government-employee and WV student photo IDs). Verified against HB 3016 bill text + West Virginia Watch; operator dropped the unconfirmed "photo voter-registration card" item.
8. **WY** — Recent Legislation: HB 156 description expanded to include its 30-day durational residency requirement.

**Informational items added (operator-approved; pending / below hard-discrepancy threshold):**

- **CA** — Pending Legislation: Proposition 39 (voter-ID/citizenship-verification initiative) qualified for the Nov 3, 2026 ballot.
- **NC** — Pending Legislation: SB 921 (voter-ID constitutional amendment on the Nov 2026 ballot) and HB 958 (elections omnibus, not enacted).
- **DC** — Recent Legislation: Initiative 83 (ranked-choice voting), first used in the June 16, 2026 primary.

**Rejected / modified:** None rejected. Iowa expanded from 3 → 5 bills; WV list trimmed to conservatively corroborated types (see #7).

**Below threshold, NOT added:** Tennessee SB 336/HB 687 signing-date nuance (Ballotpedia: March 26, 2026 vs stored "early April 2026") — single source, did not meet the two-Tier-3 corroboration bar.
