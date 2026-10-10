# Periodic Research — Requirements Update

**Date of research:** 2026-10-09 (Pacific Time)
**Run mode:** Requirements update (data verification only; no news capture)
**Branch:** `research/2026-10-09` (based on `origin/main` @ `c4b7cb5`)
**States reviewed:** 51 of 51 (50 states + DC)
**Proposed changes:** 57, across 29 states
**States with no changes found:** 22

## Review status — COMPLETE

**As of 2026-10-09 (evening), all 57 changes are resolved and written to `_data/states.json`:
51 approved as proposed, 6 modified (#21, #35, #37, #41, #46, #47), 0 rejected.** See the addendum at
the end of this report.

How the review ran: #1 and #2 were approved individually. The user then asked to bulk-approve the
changes that did not need a judgement call; the orchestrator triaged the remaining 55 into 47 routine
and 8 flagged, and the user approved the 47 as a group. The 8 flagged changes (#15, #21, #35, #37,
#41, #42, #46, #47) were then decided one at a time.

The research branch was fast-forwarded to `origin/main` @ `25ceb5c` (the 2026-10-09 5pm news run)
before any change was written. The untracked `research/classifier/` folder predates this run and is
not part of it.

Decisions, in the order they were made:

| # | Decision | Notes |
|---|---|---|
| 1 | Approved | AL SB 24 added to `recentLegislation` as proposed |
| 2 | Approved | AK `eligibilityAge` updated as proposed |
| 3 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 4 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 5 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 6 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 7 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 8 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 9 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 10 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 11 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 12 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 13 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 14 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 16 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 17 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 18 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 19 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 20 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 22 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 23 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 24 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 25 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 26 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 27 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 28 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 29 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 30 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 31 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 32 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 33 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 34 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 36 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 38 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 39 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 40 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 43 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 44 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 45 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 48 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 49 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 50 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 51 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 52 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 53 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 54 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 55 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 56 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 57 | Approved | applied as proposed (bulk approval of the 47 routine changes) |
| 15 | Approved | ID `idRequirements.toRegister` updated as proposed, reviewed individually |
| 21 | Modified | KS SAFE Act status applied without the word "separate": "Court-struck; not enforced. A constitutional amendment (HCR 5004) requiring voters to be U.S. citizens, at least 18, and residents of their voting area is on the November 3, 2026 general election ballot" |
| 35 | Modified | NH `idRequirements.toVote` applied as proposed plus a closing clause: "; the Secretary of State has said he will seek to pause that ruling". A same-day re-search found no report of a stay being filed or granted; the First Circuit docket was not checked. |
| 37 | Modified | NH HB 323 status applied as proposed plus the same closing clause as #35 |
| 41 | Modified | OH `idRequirements.toRegister` states the legal position only: "...stayed that injunction pending appeal (2-1), so the BMV documentary proof of citizenship requirement is enforceable again while the appeal proceeds." BMV practice was not confirmed. |
| 42 | Approved | OH HB 54 status updated as proposed, reviewed individually |
| 46 | Modified | UT `idRequirements.toRegister` reworded after reading the Lieutenant Governor's May 27, 2026 citizenship review (https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf, Tier 1): the rule applies to voters whose citizenship cannot be confirmed through driver license records or SAVE and who do not provide proof to their county clerk; adds that the state notifies affected voters and that the review confirmed 99.72% of registered voters as citizens. |
| 47 | Modified | UT `documentationNeeded` third item qualified to match #46: "Proof of U.S. citizenship, only if the state could not confirm your citizenship (to vote in state and local races)" |

---

Research was fanned out across six read-only agents batched alphabetically. Each agent received its
states' verbatim stored values from `_data/states.json` and was required to compare against them
directly. After the agents reported, the orchestrator re-read every "current value" below out of
`_data/states.json` and confirmed each one matches the file exactly — there are no phantom
discrepancies in this report.

## Orchestrator checks and adjustments

Independently re-verified by the orchestrator:

- **Vote.org source links** — `vote.org/state/ga/` and `/state/ks/` return 404; `/state/georgia/` returns 200.
- **West Virginia HB 5401** — the legislature's history shows "Effective ninety days from passage" as the last action.
- **Missouri HB 1871 offense names** — the four sections the agent had not fetched were read on
  `revisor.mo.gov`: 565.020 first degree murder, 565.021 second degree murder, 565.050 assault first
  degree, 568.020 incest.
- **Ohio `officialUrl`** — returns 403 to the honest user agent (bot block); its real status is unknown.

Proposed text tightened where an agent's wording went beyond what its sources supported:

| # | State | Adjustment |
|---|---|---|
| 9 | DE | HB 180 status uses the legislature's record only; the June 30 Senate date came from one Tier 3 source and is left out. |
| 14 | HI | Minimal fix ("10 business days"); the agent's computed calendar dates are left out. |
| 33 | NE | LB 1075 description limited to the legislature's own title; individual provisions each rested on one Tier 3 source. |
| 40 | NC | Dropped a clause about the constitution's current scope that was recalled, not fetched. |
| 42 | OH | Dropped "the district court refused to pause its order" — search-result summary only. |
| 45 | RI | Status says "June 2026" rather than June 23; the exact day came from one Tier 3 source. |
| 51 | VA | Entry keyed to the Code of Virginia section rather than "SB 438"; the bill number came from one Tier 3 source. |
| 52 | WA | Dropped the inferred parenthetical "(people on community custody may vote)". |
| 54, 55 | WV | Descriptions limited to the legislature's summary line; plain-language detail came from one Tier 3 source. |

---

## Summary of findings

| Category | Count |
|---|---|
| Voter-facing fact corrections (deadlines, ID, mail/early voting, felony rules, documents) | 21 |
| Legislation / court status updates on existing entries | 14 |
| Legislation description or label corrections | 7 |
| Legislation entries missing entirely | 14 |
| `officialUrl` modernization (not broken) | 1 |
| **Total proposed changes** | **57** |

### Distribution by state
AL (1), AK (2), AR (1), CA (3), CO (1), DE (4), DC (1), HI (1), ID (1), IA (3), KS (3), MD (2),
MA (1), MN (3), MO (5), NE (1), NH (4), NY (2), NC (1), OH (2), OK (1), OR (1), RI (1), UT (2),
VT (1), VA (3), WA (2), WV (2), WY (2)

### States with no changes found (22)
AZ, CT, FL, GA, IL, IN, KY, LA, ME, MI, MS, MT, NV, NJ, NM, ND, PA, SC, SD, TN, TX, WI

Several of these are provisional because the official site could not be read — see Verification gaps.

### Separate item, not counted above: Vote.org source links
Every state's stored Vote.org entry in `sources[]` uses a two-letter path
(`https://www.vote.org/state/ga/`). Those now return 404; the live pages use the full state name
(`https://www.vote.org/state/georgia/`, `/state/rhode-island/`, `/state/district-of-columbia/`).
Agents confirmed the 404 for 42 states and the orchestrator re-tested two. The Sources section is no
longer rendered on the site, so this is not visitor-facing. It is a single URL-pattern fix across 51
entries rather than 51 separate facts, and is held for a separate decision.

---

## Proposed changes

Rung key: 1 = WebFetch, 2 = curl with honest project UA, 3 = Wayback, 4 = alternate official host, 5 = Tier 3.

### 1. Alabama (AL) — Recent Legislation → NEW ENTRY (SB 24)
- **Current value:** `"recentLegislation": []`
- **Proposed value:** add `{"bill": "SB 24", "year": 2026, "description": "Requires the Board of Pardons and Paroles to publish information on how people with felony convictions can regain the right to vote, and to provide an online application for a Certificate of Eligibility to Register to Vote.", "status": "Signed by Gov. Ivey April 16, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Ballotpedia News + WBRC (Tier 3, corroborated)
- **URLs:** https://news.ballotpedia.org/2026/04/28/alabama-enacts-post-election-audit-law-13-other-election-related-bills-in-2026-session/ ; https://www.wbrc.com/2026/04/20/bill-educate-about-post-conviction-voting-restoration-signed-into-law/
- **Evidence:** WBRC: Ivey signed it April 16; the Board must provide information on how people can "restore their voter registration after a conviction."
- **Rung:** 5. No Tier 1 read of the bill.

### 2. Alaska (AK) — Eligibility Age
- **Current value:** `"eligibilityAge": "18 (may pre-register at 17 if turning 18 by election day)"`
- **Proposed value:** `"eligibilityAge": "18 (may register within 90 days before 18th birthday)"`
- **Source(s):** Vote.org (Tier 2)
- **URLs:** https://www.vote.org/state/alaska/
- **Evidence:** "at least 18 years old within 90 days of completing your registration."
- **Rung:** 1. Low severity; not checked against a Tier 1 page.

### 3. Alaska (AK) — Pending Legislation → NEW ENTRY (Initiative 25USCV)
- **Current value:** array contains only `"bill": "Repeal Top-Four Ranked-Choice Voting Initiative (2026 ballot measure)"`
- **Proposed value:** add `{"bill": "United States Citizens Voter Act (Initiative 25USCV, 2026 ballot measure)", "year": 2026, "description": "Citizen initiative that would amend state law to specify that only United States citizens who meet the other voter qualifications may vote in Alaska elections. Per the official ballot summary, it would not change the existing requirements to vote.", "status": "Will appear on the November 3, 2026 general election ballot; petition booklets filed January 16, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Alaska Division of Elections (Tier 1)
- **URLs:** https://www.elections.alaska.gov/petitions-and-ballot-measures/petition-status/?initiative_id=25USCV ; https://www.elections.alaska.gov/wp-content/uploads/2026/01/25USCV-Ballot-Title-Summary.pdf
- **Evidence:** "This act would specify that only those who are United States citizens and meet the other requirements may vote. This act would not change the requirements to vote." Status: "Will appear on General Election ballot".
- **Rung:** 1, 2. The official page does not print the year; it is inferred from the 2026 filing dates.

### 4. Arkansas (AR) — Pending Legislation → NEW ENTRY (Issue 1)
- **Current value:** `"pendingLegislation": []`
- **Proposed value:** add `{"bill": "Issue 1 / HJR 1018 (Citizens Only Voting Amendment)", "year": 2026, "description": "Legislatively referred constitutional amendment to Article 3, Section 1 of the Arkansas Constitution providing that only a U.S. citizen meeting the qualifications of an elector may vote in an election in the state, and that a person who does not meet those qualifications shall not be permitted to vote in any state or local election.", "status": "Referred by the 95th General Assembly (2025 regular session); on the November 3, 2026 ballot as Issue No. 1; requires voter approval", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Arkansas Secretary of State (Tier 1)
- **URLs:** https://www.sos.arkansas.gov/elections/initiatives-and-referenda/ ; https://www.sos.arkansas.gov/uploads/elections/Issue_No._1_HJR_1018_of_2026_.pdf_.pdf
- **Evidence:** "the 95th General Assembly refers the following constitutional amendment to a vote of the people on November 3, 2026, and will appear on the ballot as Issue No. 1 ... filed as HJR 1018."
- **Rung:** 1, 2.

### 5. California (CA) — Pending Legislation → SB 1164 and SB 1360 now enacted
- **Current value:** in `pendingLegislation`: `"bill": "SB 1164 and SB 1360 (California Voting Rights Act expansion)"`, `"status": "SB 1164 passed the Assembly on August 25, 2026 and is in the Senate awaiting concurrence in Assembly amendments; SB 1360 was ordered to third reading in the Assembly on August 20, 2026. The Legislature adjourns August 31, 2026."`
- **Proposed value:** move the entry from `pendingLegislation` to `recentLegislation`, description unchanged, with `"status": "Both bills signed by Gov. Newsom on September 19, 2026"`
- **Source(s):** Office of the Governor (Tier 1, alternate official host)
- **URLs:** https://www.gov.ca.gov/2026/09/19/governor-newsom-signs-new-laws-to-protect-california-elections-from-trump-interference/
- **Evidence:** "Governor Gavin Newsom today signed a package of bills..." including "SB 1164 (Cervantes) – Revises and expands the California Voting Rights Act of 2001" and "SB 1360 (Cervantes) – Increases language access services".
- **Rung:** 4. The author's own release says "yesterday" (Sept 18); the Governor's date is used. Chapter numbers unconfirmed.

### 6. California (CA) — Recent Legislation → NEW ENTRY (SB 884)
- **Current value:** array contains only `"bill": "SB 1174"`
- **Proposed value:** add `{"bill": "SB 884", "year": 2026, "description": "Extends the time vote-by-mail drop-off locations are open and modifies the type and range of prohibited activities near a polling location, for elections held or proclaimed in 2026, 2027, 2028, and 2029.", "status": "Signed by Gov. Newsom on September 19, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Office of the Governor (Tier 1) — same URL as #5
- **Evidence:** "SB 884 (Umberg) – Extends the time vote by mail drop off locations are open and modifies the type and range of prohibited activities near a polling location for elections held or proclaimed in 2026, 2027, 2028, and 2029."
- **Rung:** 4. New hours and effective date not stated in the release.

### 7. California (CA) — Recent Legislation → NEW ENTRY (SB 1420)
- **Current value:** no entry for SB 1420
- **Proposed value:** add `{"bill": "SB 1420", "year": 2026, "description": "Requires the Secretary of State to adopt regulations establishing uniform procedures that allow a voter to vote their vote-by-mail ballot at a polling location without the ballot's identification envelope, and requires the state voter information guide to include information about early in-person voting opportunities.", "status": "Signed by Gov. Newsom on September 19, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Office of the Governor (Tier 1) — same URL as #5
- **Evidence:** "SB 1420 (Richardson) – Requires the Secretary of State to promulgate regulations establishing uniform procedures for election officials that allow a voter to vote their VBM ballot at a polling location without the VBM ballot's identification envelope".
- **Rung:** 4.

### 8. Colorado (CO) — Pending Legislation → Initiative 362 label and status
- **Current value:** `"bill": "Initiative 362 (Voter Authentication)"`, `"status": "Signatures deemed sufficient by the Colorado Secretary of State on August 26, 2026; set for the November 3, 2026 statewide ballot; requires voter approval"`
- **Proposed value:** `"bill": "Amendment 84 / Initiative 362 (Mail Ballot Voter Identification)"`, `"status": "Signatures deemed sufficient by the Colorado Secretary of State on August 26, 2026; on the November 3, 2026 statewide ballot as Amendment 84; requires voter approval"`
- **Source(s):** Colorado Secretary of State (Tier 1)
- **URLs:** https://www.coloradosos.gov/pubs/elections/Initiatives/ballot/contacts/2026.html
- **Evidence:** table row "Amendment 84 | Initiative #362 | Mail Ballot Voter Identification".
- **Rung:** 1.

### 9. Delaware (DE) — Pending Legislation → HB 180 status
- **Current value:** `"status": "Passed the House 30-10 on June 16, 2026 and referred to the Senate Executive Committee; as a constitutional amendment it must also pass a second, differently elected General Assembly before taking effect"`
- **Proposed value:** `"status": "Passed the House 30-10 on June 16, 2026 and has since passed the Senate, completing the first leg (legislature records status as Passed 7/1/26); must be passed again by the 154th General Assembly before taking effect"`
- **Source(s):** Delaware General Assembly (Tier 1)
- **URLs:** https://legis.delaware.gov/BillDetail?LegislationId=142224
- **Evidence:** status "Passed 7/1/26"; "This Act is the first leg of an amendment to the Delaware Constitution".
- **Rung:** 1.

### 10. Delaware (DE) — Mail-In Voting → details
- **Current value:** `"details": "Absentee ballot available; excuse required. In-person early voting is available without excuse. Constitutional amendments for no-excuse absentee voting have been re-introduced but not yet passed."`
- **Proposed value:** `"details": "Absentee ballot available; excuse required. In-person early voting is available without excuse. A constitutional amendment for no-excuse absentee voting (SS 1 for SB 3) passed its first leg in April 2026 and must be passed again by the next General Assembly before taking effect."`
- **Source(s):** Delaware General Assembly (Tier 1); Vote.org (Tier 2) confirms an excuse is still required today
- **URLs:** https://legis.delaware.gov/BillDetail?LegislationId=142099 ; https://www.vote.org/state/delaware/
- **Evidence:** SS 1 for SB 3, status "Passed 4/14/26"; "this Act is the first leg of a constitutional amendment to eliminate the limitations on when an individual may vote absentee".
- **Rung:** 1.

### 11. Delaware (DE) — Pending Legislation → NEW ENTRY (SS 1 for SB 3)
- **Current value:** array contains only `"bill": "HB 180"`
- **Proposed value:** add `{"bill": "SS 1 for SB 3", "year": 2026, "description": "First-leg constitutional amendment to Article V that would eliminate the limitations on when a person may vote absentee, giving every qualified voter the right to vote by absentee ballot without an excuse.", "status": "Passed April 14, 2026, completing the first leg; must be passed again by the 154th General Assembly before taking effect", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Delaware General Assembly (Tier 1)
- **URLs:** https://legis.delaware.gov/BillDetail?LegislationId=142099
- **Evidence:** as in #10.
- **Rung:** 1.

### 12. Delaware (DE) — Recent Legislation → NEW ENTRY (SB 266)
- **Current value:** array contains only `"bill": "HB 444 (Delaware John Lewis Voting Rights Act)"`
- **Proposed value:** add `{"bill": "SB 266", "year": 2026, "description": "Omnibus Title 15 elections bill. Revises absentee ballot adjudication and adds a cure process for deficient absentee ballots, codifies how residency is determined for voter registration and candidacy, updates electronic voting system requirements, and reorganizes election audit requirements.", "status": "Signed by Gov. Matt Meyer on June 24, 2026; effective upon signature", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Delaware General Assembly (Tier 1); Ballotpedia News (Tier 3, supporting)
- **URLs:** https://legis.delaware.gov/BillDetail?LegislationId=143031 ; https://news.ballotpedia.org/2026/09/01/delaware-enacts-eight-election-related-bills-and-advances-five-amendments-in-2026-session/
- **Evidence:** legislature page: "Signed 6/24/26", effective 6/24/26.
- **Rung:** 1.

### 13. District of Columbia (DC) — Registration Deadline
- **Current value:** `"registrationDeadline": "Same-day registration available through election day"`
- **Proposed value:** `"registrationDeadline": "21 days before election online or by mail (same-day registration available during early voting and on election day)"`
- **Source(s):** DC Board of Elections (Tier 1); Vote.org (Tier 2)
- **URLs:** https://www.dcboe.org/voters/register-to-vote/register-update-voter-registration ; https://www.vote.org/state/district-of-columbia/
- **Evidence:** DCBOE: online and mail applications "must be received by the Board by no later than the 21st day before the election in which you wish to vote"; after that "you can still register during early voting or on Election Day."
- **Rung:** 1.

### 14. Hawaii (HI) — Early Voting → details
- **Current value:** `"details": "All elections conducted primarily by mail. Voter service centers open 10 days before election."`
- **Proposed value:** `"details": "All elections conducted primarily by mail. Voter service centers open 10 business days before the election."`
- **Source(s):** Hawaii Office of Elections (Tier 1); Vote.org (Tier 2)
- **URLs:** https://elections.hawaii.gov/voting/voter-service-centers-and-places-of-deposit/ ; https://www.vote.org/state/hawaii/
- **Evidence:** "Open 10 business days prior to the election offering accessible voting, in person voting and same day registration."
- **Rung:** 1.

### 15. Idaho (ID) — ID Requirements → to register
- **Current value:** `"toRegister": "ID driver's license or state ID number, or last 4 of SSN. All in-person registrations (including Election Day) require both a photo ID AND proof of residency. Accepted photo IDs: ID DL, state ID, U.S. passport, tribal photo ID, student photo ID from an Idaho school, concealed weapons license, or military ID. Free state ID cards available from the DMV."`
- **Proposed value:** `"toRegister": "ID driver's license or state ID number, or last 4 of SSN. All in-person registrations (including Election Day) require both a photo ID AND proof of residency. Accepted photo IDs: ID DL, state ID, U.S. passport or federal photo ID, tribal photo ID, or a concealed weapons license issued by an Idaho county sheriff. Student IDs are not accepted. Free state ID cards available from the DMV."`
- **Source(s):** Idaho Secretary of State, VoteIdaho.gov (Tier 1); Vote.org (Tier 2)
- **URLs:** https://voteidaho.gov/voter-registration/ ; https://www.vote.org/state/idaho/
- **Evidence:** "Photo ID: Idaho Driver's License / Idaho Identification Card / Passport or Federal ID / Tribal ID Card / Concealed Weapons License issued by a county sheriff in Idaho". No student ID is listed.
- **Rung:** 1, 2. The source does not name military ID separately; it falls under "Federal ID".

### 16. Iowa (IA) — Recent Legislation → SF 140 status (PROVISIONAL)
- **Current value:** `"status": "Signed by Gov. Reynolds June 2, 2026"`
- **Proposed value:** `"status": "Signed by Gov. Reynolds April 30, 2026; effective July 1, 2026"`
- **Source(s):** Iowa Legislature bill history (Tier 1)
- **URLs:** https://www.legis.iowa.gov/legislation/billTracking/billHistory?billName=SF%20140&ga=91
- **Evidence:** "Effective date: 07/01/2026." / "April 30, 2026 Signed by Governor. S.J. 947."
- **Rung:** 2.

### 17. Iowa (IA) — Recent Legislation → SF 2472 status (PROVISIONAL)
- **Current value:** `"status": "Signed by Gov. Reynolds June 2, 2026"`
- **Proposed value:** `"status": "Signed by Gov. Reynolds May 18, 2026"`
- **Source(s):** Iowa Legislature bill history (Tier 1)
- **URLs:** https://www.legis.iowa.gov/legislation/billTracking/billHistory?billName=SF%202472&ga=91
- **Evidence:** "May 18, 2026 Signed by Governor. S.J. 1032."
- **Rung:** 2.

### 18. Iowa (IA) — Recent Legislation → HF 2501 status (PROVISIONAL)
- **Current value:** `"status": "Enacted 2026"`
- **Proposed value:** `"status": "Signed by Gov. Reynolds May 2, 2026; effective July 1, 2026"`
- **Source(s):** Iowa Legislature bill history (Tier 1)
- **URLs:** https://www.legis.iowa.gov/legislation/billTracking/billHistory?billName=HF%202501&ga=91
- **Evidence:** "Effective date: 07/01/2026." / "May 02, 2026 Signed by Governor. H.J. 1160."
- **Rung:** 1, 2.

Iowa items are labeled provisional because the state's election site (`sos.iowa.gov`) is a robots.txt
opt-out and was not read; the facts themselves are Tier 1 from the legislature.

### 19. Kansas (KS) — Recent Legislation → SB 4 status
- **Current value:** `"status": "Enacted (veto overridden); preliminarily enjoined by the Douglas County District Court July 16, 2026; the Kansas Supreme Court denied the Secretary of State's emergency motions to reinstate the law July 30-31, 2026, so the 3-day grace period remains in effect for the August 4, 2026 primary pending further litigation"`
- **Proposed value:** `"status": "Enacted (veto overridden); preliminarily enjoined by the Douglas County District Court July 16, 2026; the Kansas Supreme Court denied the Secretary of State's emergency motions to reinstate the law July 30-31, 2026; the Kansas Court of Appeals then denied a renewed motion to stay the injunction for the general election, so the 3-day grace period remains in effect for the November 3, 2026 general election while the appeal proceeds"`
- **Source(s):** Kansas Secretary of State (Tier 1); Vote.org (Tier 2); HPPR / Kansas News Service (Tier 3, supporting)
- **URLs:** https://sos.ks.gov/elections/advance-voting-information.html ; https://www.vote.org/state/kansas/ ; https://www.hppr.org/hppr-news/2026-10-07/appeals-court-kansas-mail-in-ballots-will-be-accepted-for-three-days-after-november-election
- **Evidence:** SOS: "the Secretary of State filed a renewed motion with the Court of Appeals after the Primary asking it to stay the injunction for purposes of the General Election. The motion was denied."
- **Rung:** 1, 2.

### 20. Kansas (KS) — Early Voting → details
- **Current value:** `"details": "In-person advance voting begins 20 days before election day."`
- **Proposed value:** `"details": "Advance voting begins 20 days before election day, when mail ballots are sent. In-person advance voting may begin as early as that day but the start date varies by county; all counties must offer it by the Tuesday one week before election day."`
- **Source(s):** Kansas Secretary of State (Tier 1); Vote.org (Tier 2)
- **URLs:** https://sos.ks.gov/elections/important-election-dates.html ; https://www.vote.org/state/kansas/
- **Evidence:** "October 14 — First day of advance voting. Advance ballots by mail are transmitted. In-person advance voting may begin." / "October 27 — In-person advance voting must begin for all counties."
- **Rung:** 1, 2.

### 21. Kansas (KS) — Recent Legislation → SAFE Act status
- **Current value:** `"status": "Court-struck; 2026 ballot measure proposed to reinstate"`
- **Proposed value:** `"status": "Court-struck; not enforced. A separate constitutional amendment (HCR 5004) requiring voters to be U.S. citizens, at least 18, and residents of their voting area is on the November 3, 2026 general election ballot"`
- **Source(s):** Kansas Legislature (Tier 1)
- **URLs:** https://kslegislature.gov/li/b2025_26/measures/hcr5004/ ; https://kslegislature.gov/li/b2025_26/measures/documents/hcr5004_enrolled.pdf
- **Evidence:** enrolled text: "shall cause the proposed amendment to be submitted to the electors of the state at the general election in November in the year 2026".
- **Rung:** 2. That HCR 5004 is not a reinstatement of documentary proof of citizenship is a reading of the resolution's title, not a legal analysis.

### 22. Maryland (MD) — Recent Legislation → HB 115 / SB 241 description
- **Current value:** `"description": "Requires the Department of Public Safety and Correctional Services and the State Board of Elections to automatically restore the voter registration of individuals released from state correctional facilities. DPSCS must send the State Board of Elections a weekly list of released individuals (names and new residential addresses) to enable automatic re-registration."`
- **Proposed value:** `"description": "Requires the Department of Public Safety and Correctional Services and the State Board of Elections to jointly develop and implement, by January 1, 2028, procedures and an electronic transmission process to automatically restore the voter registration of individuals released from state correctional facilities. DPSCS must send the State Board of Elections a monthly list of released individuals (names and certain other information)."`
- **Source(s):** Maryland General Assembly (Tier 1)
- **URLs:** https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/hb0115?ys=2026RS ; https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/sb0241?ys=2026RS
- **Evidence:** "Requiring by January 1, 2028 ... requiring the Department to transmit a list that includes the name and certain other information for individuals released from incarceration to the State Board of Elections on a monthly basis".
- **Rung:** 1, 2.

### 23. Maryland (MD) — Recent Legislation → HB 115 / SB 241 status
- **Current value:** `"status": "Enacted in 2026 legislative session"`
- **Proposed value:** `"status": "Approved by Gov. Wes Moore May 12, 2026 (Chapters 428 and 427); effective January 1, 2027, with the restoration process to be implemented by January 1, 2028"`
- **Source(s):** Maryland General Assembly (Tier 1) — same URLs as #22
- **Evidence:** "Approved by the Governor - Chapter 428" / "Effective Date(s): January 1, 2027".
- **Rung:** 1, 2.

### 24. Massachusetts (MA) — Documentation Needed (PROVISIONAL)
- **Current value:** `"documentationNeeded": ["DL number or last 4 of SSN", "Proof of residency for same-day registration"]`
- **Proposed value:** `"documentationNeeded": ["DL number or last 4 of SSN"]`
- **Source(s):** Vote.org (Tier 2); Massachusetts Legislature (official .gov, supporting)
- **URLs:** https://www.vote.org/state/massachusetts/ ; https://malegislature.gov/Bills/194/H5001
- **Evidence:** Vote.org lists same-day registration as "N/A" and the deadline as "10 days before Election Day." The stored `sameDayRegistration` is already `false`, so the second item is internally inconsistent.
- **Rung:** 1. Official elections host not fetched (robots.txt blanket disallow).

### 25. Minnesota (MN) — Early Voting → details
- **Current value:** `"details": "Two in-person options: absentee voting begins 46 days before election day, and early voting, where the ballot is fed directly into a tabulator, begins 18 days before election day (HF4240, 2026)."`
- **Proposed value:** `"details": "Two in-person options: absentee voting begins 46 days before election day, and early voting, where the ballot is fed directly into a tabulator, begins 18 days before election day."`
- **Source(s):** Minnesota Revisor of Statutes (Tier 1); Vote.org (Tier 2)
- **URLs:** https://www.revisor.mn.gov/statutes/cite/203B.081 ; https://www.revisor.mn.gov/laws/2026/0/Session+Law/Chapter/102/ ; https://www.vote.org/state/minnesota/
- **Evidence:** 203B.081 history: "2023 Subd. 1a New 2023 c 62 art 4 s 42". The 18-day option was created in 2023, not by HF 4240.
- **Rung:** 1, 2 on an alternate official host.

### 26. Minnesota (MN) — Recent Legislation → HF4240 description
- **Current value:** `"description": "Establishes a new in-person early voting option beginning 18 days before election day, in which the ballot is fed directly into a tabulator, and updates absentee and canvassing procedures."`
- **Proposed value:** `"description": "Makes various changes to election administration: modifies absentee and early voting procedures (including requiring municipalities that administer voting before election day to choose whether to do so starting on the 46th or the 18th day before the election), modifies timelines, and prohibits elected officials and candidates from betting on elections. The 18-day in-person early voting option itself was created by a 2023 law (Laws 2023, chapter 62)."`
- **Source(s):** Minnesota Revisor of Statutes (Tier 1) — same URLs as #25
- **Evidence:** "An act relating to elections; making various changes related to election administration; modifying provisions related to absentee voting; modifying timelines; prohibiting elected officials and candidates from betting on elections".
- **Rung:** 1, 2.

### 27. Minnesota (MN) — Official URL (modernization; not broken)
- **Current value:** `"officialUrl": "https://www.sos.state.mn.us/elections-voting/"` (also `sources[0].url`)
- **Proposed value:** `"officialUrl": "https://www.sos.mn.gov/elections-voting/"` (and the matching `sources[0].url`)
- **Source(s):** the stored URL itself (Tier 1 host)
- **Evidence:** "Status: 302 Found ... Redirect URL: https://www.sos.mn.gov/elections-voting/"
- **Rung:** 1. Low priority — the old URL still resolves by redirect.

### 28. Missouri (MO) — Mail-In Voting → details
- **Current value:** `"details": "Absentee ballot available; excuse required. No-excuse mail-in option available but ballot must be notarized."`
- **Proposed value:** `"details": "Absentee ballot available; an excuse is required to vote absentee by mail. No-excuse absentee voting is available in person only, starting the second Tuesday before election day."`
- **Source(s):** Missouri Secretary of State (Tier 1); Vote.org (Tier 2)
- **URLs:** https://www.sos.mo.gov/elections/goVoteMissouri/howtovote ; https://www.vote.org/state/missouri/
- **Evidence:** "at any time when requesting an absentee ballot to return by mail, absentee voters must provide one of the following reasons" and "From the second Tuesday before an election to the day before the election, you may vote a no-excuse absentee ballot in person".
- **Rung:** 1, 2.

### 29. Missouri (MO) — Documentation Needed
- **Current value:** `"documentationNeeded": ["Valid photo ID or non-photo ID with affidavit", "Proof of residency"]`
- **Proposed value:** `"documentationNeeded": ["Valid photo ID (voters without one may cast a provisional ballot)", "Proof of residency"]`
- **Source(s):** Missouri Secretary of State (Tier 1)
- **URLs:** https://www.sos.mo.gov/elections/goVoteMissouri/howtovote
- **Evidence:** "If you do not possess any of these forms of identification, but are a registered voter, you may cast a provisional ballot." No affidavit option is listed.
- **Rung:** 1, 2.

### 30. Missouri (MO) — Felony Voting Rules
- **Current value:** `"felonyVotingRules": "Rights are restored upon final discharge from sentence, including completion of any probation or parole term; people on probation or parole for a felony may not vote. Beginning August 28, 2026, HB 1871 restores voting rights to most people on felony probation or parole, leaving only those convicted of murder, child endangerment, first- or second-degree assault, or incest barred while on probation or parole."`
- **Proposed value:** `"felonyVotingRules": "People may not vote while confined under a sentence of imprisonment. Since August 28, 2026 (HB 1871), most people on felony probation or parole may vote. Those on probation or parole for certain felonies — sexual offenses, pornography-related offenses, first- or second-degree murder, first- or second-degree assault, first-degree domestic assault, incest, first-degree child endangerment, or first-degree burglary — may not vote until finally discharged from probation or parole. People convicted of a felony or misdemeanor connected with the right of suffrage may not vote."`
- **Source(s):** Missouri House bill record and truly agreed text, Missouri Revisor (Tier 1); KFVS + The Sentencing Project (Tier 3, confirming it is in effect)
- **URLs:** https://house.mo.gov/BillContent.aspx?bill=HB1871&year=2026&code=R ; https://documents.house.mo.gov/billtracking/bills261/hlrbillspdf/5033S.06T.pdf ; https://www.kfvs12.com/2026/08/31/tens-thousands-missourians-parole-or-probation-can-now-vote/ ; https://www.sentencingproject.org/press-releases/voting-rights-restored-for-over-41000-missourians-starting-today/
- **Evidence:** "No person shall be entitled to vote: (1) While confined under a sentence of imprisonment; (2) While on probation or parole after conviction of a felony pursuant to chapter 566 or 573 or section 565.020, 565.021, 565.050, 565.052, 565.072, 565.079, 568.020, 568.045, or 569.160, until finally discharged from such probation or parole; or (3) After conviction of a felony or misdemeanor connected with the right of suffrage."
- **Rung:** 2. All section names verified on revisor.mo.gov (four of them by the orchestrator). Vote.org still shows the old rule; Tier 1 prevails.

### 31. Missouri (MO) — Recent Legislation → HB 1871 description
- **Current value:** `"description": "Restores voting rights to people on probation or parole for most felonies; only those convicted of murder, child endangerment, first- or second-degree assault, or incest remain barred from voting while on probation or parole. Also requires affirmative consent for recurring campaign contributions and requires write-in candidates to declare their candidacy. Estimated to restore voting rights to between 40,000 and 41,100 Missourians."`
- **Proposed value:** `"description": "Restores voting rights to people on probation or parole for most felonies; those convicted of sexual offenses, pornography-related offenses, murder, first- or second-degree assault, first-degree domestic assault, incest, first-degree child endangerment, or first-degree burglary remain barred from voting while on probation or parole. Also requires affirmative consent for recurring campaign contributions and requires write-in candidates to declare their candidacy. Estimated to restore voting rights to between 40,000 and 41,100 Missourians."`
- **Source(s) / evidence / rung:** as #30. Only the offense list changes.

### 32. Missouri (MO) — Recent Legislation → HB 1871 status
- **Current value:** `"status": "Passed the House 101-47 and the Senate in May 2026 as HB 174 / SB 152; signed by Gov. Kehoe July 13, 2026 as HB 1871; effective August 28, 2026"`
- **Proposed value:** `"status": "Passed the Senate 25-6 on May 11, 2026 and was truly agreed to and finally passed by the House 101-47 on May 12, 2026; signed by Gov. Kehoe July 13, 2026; in effect since August 28, 2026"`
- **Source(s):** Missouri House bill actions (Tier 1)
- **URLs:** https://house.mo.gov/BillActions.aspx?bill=HB1871&year=2026&code=R
- **Evidence:** "5/11/2026 ... Third Read and Passed with Amendments (S) ... AYES: 25 NOES: 6" / "5/12/2026 ... Truly Agreed To and Finally Passed - AYES: 101 NOES: 47" / "7/13/2026 ... Approved by Governor". The bill was HB 1871 from prefiling; nothing supports "as HB 174 / SB 152".
- **Rung:** 2.

### 33. Nebraska (NE) — Recent Legislation → NEW ENTRY (LB 1075)
- **Current value:** array contains only `"bill": "LB 514"`
- **Proposed value:** add `{"bill": "LB 1075", "year": 2026, "description": "Omnibus bill that changes provisions of the Election Act and the Nebraska Political Accountability and Disclosure Act.", "status": "Passed the Legislature April 10, 2026; signed by Gov. Pillen April 15, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Nebraska Legislature (Tier 1, title); Ballotpedia News + KOLN (Tier 3, corroborated on signing)
- **URLs:** https://nebraskalegislature.gov/bills/search_by_number.php?DocumentNumber=LB1075&Legislature=109 ; https://news.ballotpedia.org/2026/04/29/nebraska-expands-foreign-funding-ban-for-ballot-measures-enacts-four-other-election-laws-in-2026-session/ ; https://www.1011now.com/2026/04/15/pillen-renews-attack-nebraska-ballot-initiative-process/
- **Evidence:** legislature: "change provisions of the Election Act, the Nebraska Political Accountability and Disclosure Act". Both Tier 3 sources give the April 15 signing.
- **Rung:** 2, 5. Low voter impact; effective date not found.

### 34. New Hampshire (NH) — ID Requirements → to register
- **Current value:** `"toRegister": "Proof of identity required (not just an ID number): driver's license, government-issued photo ID, passport, or naturalization papers. Under HB 1569 (effective Nov 2024), all first-time registrants must provide hard-copy documentary proof of U.S. citizenship: U.S. passport, birth certificate, or naturalization papers. Proof of domicile also required. On May 28, 2026, a federal court struck down HB 1569's elimination of the qualified-voter affidavit as unconstitutional, reinstating the affidavit option (attesting to citizenship under penalty of perjury) for registration; the state has said it will appeal."`
- **Proposed value:** identical through "for registration;", then ending `the state appealed, but the district court (July 22, 2026) and the First Circuit (September 4, 2026) both refused to pause the ruling, so the affidavit option remains available for the November 3, 2026 election.`
- **Source(s):** NH Secretary of State via Wayback snapshot of 2026-10-08 (Tier 1); First Circuit order No. 26-1740; Democracy Docket + ACLU-NH (Tier 3, corroborated)
- **URLs:** https://web.archive.org/web/20261008022708/https://www.sos.nh.gov/elections/register-vote ; https://www.democracydocket.com/wp-content/uploads/2024/09/2026-09-04-Order-.pdf ; https://www.democracydocket.com/news-alerts/appeals-court-keeps-block-on-new-hampshire-voting-restrictions/ ; https://www.aclu-nh.org/cases/coalition-open-democracy-et-al-v-david-scanlan-et-al/
- **Evidence:** SOS: "Your citizenship may also be proven by completing a qualified voter affidavit". First Circuit: "the motion for a stay pending appeal is denied."
- **Rung:** 3 for Tier 1; 5 for court dates.

### 35. New Hampshire (NH) — ID Requirements → to vote
- **Current value:** `"toVote": "Photo ID required. Voters without ID must retrieve it before voting; the challenged voter affidavit option was eliminated by HB 1569. Under HB 323 (effective June 2, 2026), student IDs — including government-issued college/university IDs — are no longer accepted; only government-issued IDs such as driver's licenses, state IDs, passports, and military IDs qualify."`
- **Proposed value:** `"toVote": "Photo ID required. Voters without ID must retrieve it before voting; the challenged voter affidavit option was eliminated by HB 1569. Under HB 323 (effective June 2, 2026), student IDs — including government-issued college/university IDs — are no longer accepted as valid photo ID; only government-issued IDs such as driver's licenses, state IDs, passports, and military IDs qualify. On October 2, 2026, a federal court left HB 323 in effect but blocked the Secretary of State's directive barring any use of student IDs, so election officials may consider a student ID along with other evidence when verifying a voter's identity."`
- **Source(s):** NHPR + Bloomberg Law + Boston Globe (Tier 3, corroborated); NH SOS via Wayback (Tier 1) confirms the order on the registration side only
- **URLs:** https://www.nhpr.org/politics/2026-10-06/judge-says-nh-secretary-of-state-went-too-far-on-student-ids-for-voting ; https://news.bloomberglaw.com/litigation/new-hampshire-judge-blocks-voting-directive-banning-student-id ; https://www.bostonglobe.com/2026/10/06/metro/student-ids-voting-new-hampshire-court-decision/ ; https://web.archive.org/web/20261008022708/https://www.sos.nh.gov/elections/register-vote
- **Evidence:** SOS: "pursuant to court order they may be considered along with other available evidence when determining if a voter has proven their identity when registering to vote."
- **Rung:** 5, 3. The Secretary of State said he would seek an emergency stay; no ruling on that was found.

### 36. New Hampshire (NH) — Recent Legislation → HB 1569 status
- **Current value:** `"status": "Enacted; federal court struck down the documentary-proof-of-citizenship / affidavit-elimination provisions as unconstitutional May 28, 2026; affidavit option reinstated; the state appealed to the First Circuit on June 25, 2026 and sought a stay, which the district court denied July 24, 2026, so the provisions remain blocked while the appeal is pending"`
- **Proposed value:** `"status": "Enacted; federal court struck down the documentary-proof-of-citizenship / affidavit-elimination provisions as unconstitutional May 28, 2026; affidavit option reinstated; the state appealed to the First Circuit on June 25, 2026 and sought a stay, which the district court denied July 22, 2026 and the First Circuit denied September 4, 2026, so the provisions remain blocked for the November 3, 2026 election while the appeal is pending"`
- **Source(s):** First Circuit order No. 26-1740; Democracy Docket + ACLU-NH (Tier 3, corroborated) — URLs as #34
- **Evidence:** "after the district court denied their motion for a stay on July 22, 2026 ..." — this also corrects the stored July 24 date.
- **Rung:** 5.

### 37. New Hampshire (NH) — Recent Legislation → HB 323 status
- **Current value:** `"status": "Signed by Gov. Ayotte April 3, 2026; effective June 2, 2026"`
- **Proposed value:** `"status": "Signed by Gov. Ayotte April 3, 2026; effective June 2, 2026; on October 2, 2026 a federal court declined to block the law for the November 2026 election but enjoined the Secretary of State's directive barring any use of student IDs, so officials may consider a student ID as supporting evidence of identity"`
- **Source(s) / URLs / rung:** as #35.
- **Evidence:** Bloomberg Law: the law "can remain in effect for the November midterms."

### 38. New York (NY) — Registration Deadline
- **Current value:** `"registrationDeadline": "10 days before election (in-person); mail registration must be postmarked 15 days before"`
- **Proposed value:** `"registrationDeadline": "10 days before election (in-person, online, or by mail; mailed applications must be received by that date, not just postmarked)"`
- **Source(s):** NYS Board of Elections via Wayback snapshot of 2026-10-07 (Tier 1); Vote.org (Tier 2)
- **URLs:** https://web.archive.org/web/20261007010903/https://elections.ny.gov/registration-and-voting-deadlines ; https://www.vote.org/state/new-york/
- **Evidence:** "Mail Registration: Applications must be received by a board of elections no later than October 24, 2026 to be eligible to vote in the General Election."
- **Rung:** 3. The 15-day figure applies only to change-of-address notices.

### 39. New York (NY) — Mail-In Voting → details
- **Current value:** `"details": "No-excuse absentee voting available for all registered voters."`
- **Proposed value:** `"details": "Any registered voter may request an early mail ballot with no excuse required. Absentee ballots are a separate option that still requires a qualifying reason (such as absence from the county, illness, or disability)."`
- **Source(s):** Vote.org (Tier 2); NYS Board of Elections via Wayback (Tier 1)
- **URLs:** https://www.vote.org/state/new-york/ ; https://web.archive.org/web/20261007005722/https://elections.ny.gov/
- **Evidence:** "Any qualified voter may apply for an early mail ballot. You may simply request an early mail ballot without a reason. Alternatively, a voter may also request an absentee ballot in New York if the voter is: Absent from your county ..."
- **Rung:** 1, 3. Lower severity — `noExcuseRequired: true` stays correct; this fixes which ballot type is no-excuse.

### 40. North Carolina (NC) — Pending Legislation → Senate Bill 921 description
- **Current value:** `"description": "Proposed constitutional amendment extending North Carolina's photo-ID requirement to all voters, including those voting by mail (currently photo ID is required only for in-person voting)."`
- **Proposed value:** `"description": "Proposed constitutional amendment extending the North Carolina Constitution's photo-ID requirement to all voters, including those voting by mail (state law already requires mail voters to include a photocopy of an acceptable ID when returning their ballot)."`
- **Source(s):** NC State Board of Elections (Tier 1); Vote.org (Tier 2)
- **URLs:** https://www.ncsbe.gov/voting/voter-id ; https://www.vote.org/state/north-carolina/
- **Evidence:** "Voters who vote by mail must include a photocopy of an acceptable ID when returning their ballot."
- **Rung:** 1.

### 41. Ohio (OH) — ID Requirements → to register
- **Current value:** `"toRegister": "OH driver's license or state ID number, or last 4 of SSN. If neither, write \"NONE\" and a unique ID is assigned. A federal court preliminarily enjoined the BMV documentary proof of citizenship requirement on August 25, 2026, finding it preempted by the National Voter Registration Act, so BMV applicants are not currently required to produce documentary proof; the state has said it will appeal. Other registration channels (mail, online, board of elections) require only a citizenship attestation."`
- **Proposed value:** `"toRegister": "OH driver's license or state ID number, or last 4 of SSN. If neither, write \"NONE\" and a unique ID is assigned. A federal court preliminarily enjoined the BMV documentary proof of citizenship requirement on August 25, 2026, but on September 23, 2026 the Sixth Circuit stayed that injunction pending appeal (2-1), so people registering or updating their registration at the BMV must again provide documentary proof of citizenship while the appeal proceeds. Other registration channels (mail, online, board of elections) require only a citizenship attestation."`
- **Source(s):** Democracy Docket + The Federalist + News 5 Cleveland (Tier 3, corroborated)
- **URLs:** https://www.democracydocket.com/news-alerts/appeals-court-greenlights-ohio-gops-voter-registration-proof-of-citizenship-requirement-for-midterms/ ; https://thefederalist.com/2026/09/24/6th-circuit-greenlights-ohios-proof-of-citizenship-law-for-midterms/ ; https://news5cleveland.com/news/politics/ohio-politics/havent-registered-to-vote-in-ohio-yet-now-youll-need-to-prove-your-citizenship
- **Evidence:** order as quoted: "We therefore GRANT Ohio's motion for a stay of the district court's injunction pending appeal."
- **Rung:** 5 — ohiosos.gov blocked both fetch methods. September 23 is derived from "Wednesday" in articles dated Sept 23 and 24. News 5 was still waiting to hear whether the BMV had resumed enforcement.

### 42. Ohio (OH) — Recent Legislation → HB 54 status
- **Current value:** `"status": "Signed by Gov. DeWine April 1, 2025; effective June 2025; challenged in Red Wine & Blue and Ohio Alliance for Retired Americans v. LaRose, filed August 2025; on August 25, 2026 the court preliminarily enjoined the BMV proof of citizenship provision as preempted by the National Voter Registration Act, and Secretary of State LaRose said he would immediately appeal"`
- **Proposed value:** `"status": "Signed by Gov. DeWine April 1, 2025; effective June 2025; challenged in Red Wine & Blue and Ohio Alliance for Retired Americans v. LaRose, filed August 2025; on August 25, 2026 the court preliminarily enjoined the BMV proof of citizenship provision as preempted by the National Voter Registration Act; on September 23, 2026 a Sixth Circuit panel stayed the injunction pending appeal (2-1), so the provision is enforceable for the November 2026 election while the appeal is pending"`
- **Source(s) / URLs / rung:** as #41.

### 43. Oklahoma (OK) — Recent Legislation → State Question 846 status
- **Current value:** `"status": "Approved by voters at the August 25, 2026 statewide election; results not yet certified"`
- **Proposed value:** `"status": "Approved by voters at the August 25, 2026 statewide election; State Election Board results are now official"`
- **Source(s):** Oklahoma State Election Board (Tier 1)
- **URLs:** https://oklahoma.gov/elections/elections-results/election-results/2026-election-results/august-runoff-primary-election.html
- **Evidence:** heading "OFFICIAL RESULTS / AUGUST 25, 2026 SPECIAL ELECTIONS"; "Last Modified on Sep 01, 2026".
- **Rung:** 1, 2. The page marks the whole election official but does not name SQ 846 or give its totals.

### 44. Oregon (OR) — Early Voting → details
- **Current value:** `"details": "All elections conducted entirely by mail. Ballots mailed 14–18 days before election."`
- **Proposed value:** `"details": "All elections conducted entirely by mail. Ballots mailed 14–20 days before election."`
- **Source(s):** Oregon Secretary of State (Tier 1)
- **URLs:** https://sos.oregon.gov/elections/pages/default.aspx
- **Evidence:** "October 14, 2026: First day ballots are mailed to voters." (20 days before November 3.)
- **Rung:** 1. Only the upper bound was confirmed; the lower bound is carried over.

### 45. Rhode Island (RI) — Recent Legislation → NEW ENTRY (S 3112 / H 7494)
- **Current value:** `"recentLegislation": []`
- **Proposed value:** add `{"bill": "S 3112 / H 7494", "year": 2026, "description": "Requires a mail ballot or emergency mail ballot application to include the voter's Rhode Island driver's license or state ID number, or the last 4 digits of their SSN. Also requires mail ballot signatures to be compared against the signature on file in the central voter registration system, and requires the Board of Elections to provide a secure public observation area for mail ballot processing.", "status": "Signed by Gov. McKee in June 2026; effective upon passage", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Rhode Island General Assembly bill text (Tier 1, content); Ballotpedia News + FastDemocracy (Tier 3, corroborated on enactment)
- **URLs:** https://webserver.rilegislature.gov/BillText26/SenateText26/S3112.pdf ; https://news.ballotpedia.org/2026/08/03/rhode-island-legislators-restrict-immigration-enforcement-near-polling-places-enact-18-other-election-bills-in-2026-session/ ; https://fastdemocracy.com/bill-search/ri/2026/bills/RIB00035884/
- **Evidence:** "would require as part of an application for a mail ballot or emergency mail ballot a Rhode Island driver license, state ID number or the last four (4) digits of your social security number. This act would take effect upon passage."
- **Rung:** 4, 5.

### 46. Utah (UT) — ID Requirements → to register
- **Current value:** `"toRegister": "UT driver's license or state ID number (required for online registration), or last 4 of SSN. Without these, register by paper form mailed to county clerk with alternative ID. Under HB 300 (mail-ballot ID requirement effective 2026), mail ballot returns must include last 4 digits of DL/ID/SSN."`
- **Proposed value:** `"toRegister": "UT driver's license or state ID number (required for online registration), or last 4 of SSN. Without these, register by paper form mailed to county clerk with alternative ID. Under HB 209, for elections held on or after November 1, 2026, voters who have not provided documentary proof of U.S. citizenship (a Utah driver's license or state ID number that verifies citizenship, birth certificate, U.S. passport, naturalization documents, or tribal ID/enrollment number) at registration or before voting may vote only a federal ballot (federal races only). Under HB 300 (mail-ballot ID requirement effective 2026), mail ballot returns must include last 4 digits of DL/ID/SSN."`
- **Source(s):** Utah Legislature, enrolled HB 209 (Tier 1)
- **URLs:** https://le.utah.gov/~2026/bills/hbillenr/HB0209.pdf ; https://le.utah.gov/data/2026GS/HB0209.json
- **Evidence:** "for an election held on or after November 1, 2026 ... a voter who has not provided documentary proof of United States citizenship, at the time of voter registration or before voting, may only vote a federal ballot."
- **Rung:** 4. vote.utah.gov's voter-facing pages do not mention the rule, so the wording comes from the statute. It omits the provisional-ballot cure option.

### 47. Utah (UT) — Documentation Needed
- **Current value:** `"documentationNeeded": ["Valid ID", "Proof of residency for same-day registration"]`
- **Proposed value:** `"documentationNeeded": ["Valid ID", "Proof of residency for same-day registration", "Documentary proof of U.S. citizenship (to vote in state and local races)"]`
- **Source(s) / URLs / evidence / rung:** as #46 (same fact, second field).

### 48. Vermont (VT) — Recent Legislation → S.298 act number
- **Current value:** `"bill": "S.298 (Act 70) — Vermont Voter Protections Act"`
- **Proposed value:** `"bill": "S.298 (Act 126) — Vermont Voter Protections Act"`
- **Source(s):** Vermont General Assembly (Tier 1)
- **URLs:** https://legislature.vermont.gov/bill/status/2026/S.298 ; https://legislature.vermont.gov/Documents/2026/Docs/ACTS/ACT126/ACT126%20As%20Enacted.pdf
- **Evidence:** "S.298 (Act 126) An act relating to voter protections ... Signed by Governor June 8, 2026".
- **Rung:** 2, 1.

### 49. Virginia (VA) — Felony Voting Rules
- **Current value:** `"felonyVotingRules": "Per the federal court ruling in King v. Youngkin, in effect since June 1, 2026, Virginia can no longer disenfranchise people convicted of felonies except for a narrow set of common-law felonies (murder, manslaughter, arson, burglary, robbery, rape, sodomy, mayhem, larceny). Eligible non-common-law felons can register to vote without gubernatorial restoration. Implementation is still settling: Virginia ELECT has directed local officials to stop denying these registrations but to hold the applications, so many are not yet fully processed."`
- **Proposed value:** `"felonyVotingRules": "Per the federal court ruling in King v. Youngkin, in effect since June 1, 2026, Virginia can disenfranchise only people convicted of one of the 11 felonies that existed at common law in 1870 (arson, burglary, escape and rescue from a prison or jail, larceny, manslaughter, mayhem, murder, rape, robbery, sodomy, suicide). The Commonwealth has identified three statutory offenses as disqualifying: murder, voluntary manslaughter, and involuntary manslaughter. People convicted of any other felony who are not currently incarcerated can register to vote without gubernatorial restoration; people convicted of a disqualifying offense must have their rights restored by the Governor. People incarcerated for a felony cannot register or vote."`
- **Source(s):** Virginia Department of Elections (Tier 1)
- **URLs:** https://www.elections.virginia.gov/registration/felony-convictions-and-voter-eligibility/
- **Evidence:** "There are 11 felony offenses that existed at common law in 1870 ... The Commonwealth has identified three statutory offenses that disqualify individuals from registering to vote or voting ... 18.2-32 (murder) 18.2-35 (voluntary manslaughter) 18.2-36 (involuntary manslaughter)" and "you are now eligible to register to vote and do not need to apply for restoration of rights by the Governor".
- **Rung:** 1, 2.

### 50. Virginia (VA) — Recent Legislation → King v. Youngkin description and status
- **Current value:** `"description": "Federal court ruling barring Virginia from disenfranchising people convicted of felonies except for a narrow set of common-law felonies (murder, manslaughter, arson, burglary, robbery, rape, sodomy, mayhem, larceny). Eliminates need for gubernatorial restoration for non-common-law felonies."`, `"status": "In effect since June 1, 2026 (extended from May 1); Virginia ELECT directing localities to hold, not deny, affected registrations"`
- **Proposed value:** `"description": "Federal court ruling barring Virginia from disenfranchising people convicted of felonies except for the 11 felonies that existed at common law in 1870 (arson, burglary, escape and rescue from a prison or jail, larceny, manslaughter, mayhem, murder, rape, robbery, sodomy, suicide). Eliminates need for gubernatorial restoration for non-common-law felonies."`, `"status": "In effect since June 1, 2026 (extended from May 1); Virginia ELECT now treats only three statutory offenses (murder, voluntary manslaughter, involuntary manslaughter) as disqualifying, and other non-incarcerated people with felony convictions may register"`
- **Source(s) / URLs / evidence / rung:** as #49.

### 51. Virginia (VA) — Recent Legislation → NEW ENTRY (Sunday early voting)
- **Current value:** no entry (the only entry is `"bill": "King v. Youngkin (federal court ruling)"`)
- **Proposed value:** add `{"bill": "Sunday early voting (Code of Virginia § 24.2-701.1; 2026 Acts, chapters 945 and 1078)", "year": 2026, "description": "Requires general registrar offices to be open for in-person early voting for at least five hours between 11:00 a.m. and 5:00 p.m. on the second and third Sundays before every election, in addition to the existing Saturday requirement; localities may offer additional Sundays.", "status": "Enacted in the 2026 session; in the Code of Virginia at § 24.2-701.1", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Code of Virginia (Tier 1)
- **URLs:** https://law.lis.virginia.gov/vacode/title24.2/chapter7/section24.2-701.1/
- **Evidence:** "(ii) a minimum of five hours between the hours of 11:00 a.m. and 5:00 p.m. on the second and third Sunday immediately preceding all elections." Section history ends "2026, cc. 945, 1078".
- **Rung:** 1, 2. Ballotpedia identifies the bill as SB 438; that number could not be confirmed at Tier 1.

### 52. Washington (WA) — Felony Voting Rules
- **Current value:** `"felonyVotingRules": "Rights restored automatically once no longer under Department of Corrections supervision."`
- **Proposed value:** `"felonyVotingRules": "Rights restored automatically once no longer serving a sentence of total confinement in prison under Department of Corrections jurisdiction; for federal or out-of-state felony convictions, rights are restored once no longer incarcerated. Must re-register to vote."`
- **Source(s):** RCW 29A.08.520 on the Washington Legislature's host (Tier 1); Vote.org (Tier 2)
- **URLs:** https://app.leg.wa.gov/RCW/default.aspx?cite=29A.08.520 ; https://www.vote.org/state/washington/
- **Evidence:** "the right to vote is automatically restored as long as the person is not serving a sentence of total confinement under the jurisdiction of the department of corrections."
- **Rung:** 4, 1. `sos.wa.gov` not fetched (robots.txt opt-out).

### 53. Washington (WA) — Recent Legislation → SB 5892 status
- **Current value:** `"status": "Enacted in the 2026 session; effective June 2026"`
- **Proposed value:** `"status": "Signed by the Governor as Chapter 213, 2026 Laws; effective March 25, 2026"`
- **Source(s):** Washington Legislature bill summary (Tier 1)
- **URLs:** https://app.leg.wa.gov/billsummary?BillNumber=5892&Year=2025&Initiative=false
- **Evidence:** "Mar 25 Governor signed." / "Chapter 213, 2026 Laws." / "Effective date 3/25/2026."
- **Rung:** 1.

### 54. West Virginia (WV) — Recent Legislation → NEW ENTRY (SB 59)
- **Current value:** array contains only `"bill": "HB 3016"`
- **Proposed value:** add `{"bill": "SB 59", "year": 2026, "description": "Revises voter eligibility and residency requirements.", "status": "Approved by the Governor April 1, 2026 (Chapter 130, Acts 2026); effective January 1, 2027 — does not apply to the November 3, 2026 election", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** West Virginia Legislature bill history (Tier 1)
- **URLs:** https://www.wvlegislature.gov/Bill_Status/Bills_history.cfm?input=59&year=2026&sessiontype=RS&btype=bill
- **Evidence:** "LAST ACTION: Effective January 1, 2027 SUMMARY: Relating to voter eligibility and residency requirements" / "Approved by Governor 4/1/2026".
- **Rung:** 1, 2.

### 55. West Virginia (WV) — Recent Legislation → NEW ENTRY (HB 5401)
- **Current value:** no entry
- **Proposed value:** add `{"bill": "HB 5401", "year": 2026, "description": "Relates to voting in West Virginia elections while residing overseas.", "status": "Approved by the Governor April 1, 2026 (Chapter 136, Acts 2026); effective ninety days from passage (passed March 14, 2026)", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** West Virginia Legislature bill history (Tier 1)
- **URLs:** https://www.wvlegislature.gov/Bill_Status/Bills_history.cfm?input=5401&year=2026&sessiontype=RS&btype=bill
- **Evidence:** "LAST ACTION: Effective ninety days from passage SUMMARY: Relating to voting in West Virginia elections while residing overseas" / "Approved by Governor 4/1/2026" (re-read by the orchestrator).
- **Rung:** 1, 2.

### 56. Wyoming (WY) — Recent Legislation → NEW ENTRY (SF 30 / SEA 5)
- **Current value:** no entry (stored: HB 156, HB 318 / HEA 62, HB 165 / HEA 71, SF 78 / SEA 10, SF 165 / SEA 75)
- **Proposed value:** add `{"bill": "SF 30 / SEA 5 (Elections-voter registration revisions)", "year": 2026, "description": "Clarifies the definition of \"qualified elector\" and voter registration qualifications: a registrant must be at least 18 on the day of the next election and a bona fide Wyoming resident for not less than 30 days before the date of the next election.", "status": "Signed by the Governor February 27, 2026 (Chapter 9); effective June 1, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Wyoming Legislature (LSO) bill record (Tier 1)
- **URLs:** https://web.wyoleg.gov/LsoService/api/BillInformation/2026/SF0030
- **Evidence:** `"signedDate": "2/27/2026"`, `"effectiveDate": "6/1/2026"`, `"chapter": "CH0009"`; enrolled text: "has been a bona fide resident of Wyoming for not less than thirty (30) days before the date of the next election".
- **Rung:** 4.

### 57. Wyoming (WY) — Recent Legislation → NEW ENTRY (SF 113 / SEA 61)
- **Current value:** no entry
- **Proposed value:** add `{"bill": "SF 113 / SEA 61 (2026 election hand count comparison)", "year": 2026, "description": "Requires the county clerk of each county to complete a hand count of ballots in the 2026 primary and general elections and report the results.", "status": "Signed by the Governor March 7, 2026 (Chapter 101); effective March 7, 2026", "dateAdded": "2026-10-09", "active": true}`
- **Source(s):** Wyoming Legislature (LSO) bill record (Tier 1); Ballotpedia News (Tier 3, supporting)
- **URLs:** https://web.wyoleg.gov/LsoService/api/BillInformation/2026/SF0113 ; https://news.ballotpedia.org/2026/03/19/wyoming-expands-post-election-audit-requirements-enacts-three-other-election-bills-in-2026-session/
- **Evidence:** "requiring the completion of a hand count by the county clerk of each county in the 2026 primary and general elections", `"signedDate": "3/7/2026"`.
- **Rung:** 4, 1. Election administration rather than a voter-facing rule.

---

## Unconfirmed leads (not proposed)

These did not meet the tier standard or were judged wording rather than error. None is applied.

- **AL** — `felonyVotingRules` may misdescribe who is disqualified (only moral-turpitude felonies, restored by Certificate of Eligibility); official pages read did not say enough to confirm.
- **AK** — the RCV-repeal measure is reported as "Ballot Measure 2" and as also repealing campaign-finance disclosure rules (one Tier 3 source each).
- **AZ** — Proposition 144 status may be missing an Aug 18, 2026 Arizona Supreme Court ruling (search results only).
- **CA** — whether SB 884 changes drop-off hours for November 3 is unknown.
- **DE** — HB 180's stored description ("immediately upon completion of a felony sentence") may differ from the synopsis (disenfranchisement limited to the period of imprisonment); HB 430, HS 1 for HB 301, SB 329 and SB 2 not opened.
- **ID** — `eligibilityAge` "may pre-register at 17" not confirmed by either source.
- **IA** — SF 2203 is stored in `pendingLegislation` as failed but `active: true`; SF 2218 and SF 2472 descriptions not checked against bill text.
- **IN** — HEA 1377 (straight-ticket changes, effective January 1, 2027) is not stored; enacted content not confirmed.
- **KY** — HB 139 reportedly also removed the option for an election officer to vouch for a known voter (two Tier 3 sources); not a stored-value error.
- **LA** — the SOS calendar gives October 13 (21 days) for online registration while the SOS registration page says 20 days.
- **ME** — `notes` says RCV applies to gubernatorial elections; Ballotpedia says primaries only for governor (one Tier 3).
- **MI** — the proof-of-citizenship amendment was kept off the November ballot (one Tier 3 read); nothing stored mentions it.
- **MT** — SB 490 status ends "trial scheduled August 2026", now past; no outcome found. votemt.gov confirms the law is still blocked.
- **NH** — Vote.org's page is stale and conflicts with stored `toVote`; a Durham town notice supports the stored value, which was kept. `documentationNeeded` "Photo ID or affidavit" may mislead, since the affidavit now covers citizenship only.
- **NJ** — "(7 days for primaries)" is ambiguous as a start day.
- **OH** — `officialUrl` (`/elections-voting/`) may be a dead path: Wayback has no 200 capture of it while `/elections` is captured daily. The bot block hides its real status; needs a browser check.
- **PA, VT** — `eligibilityAge` "may pre-register at 17" not stated by the official or Vote.org pages read.
- **TN** — HB 2185 (SAVE portal) rests on Ballotpedia alone.
- **TX** — could not confirm whether the SB 2753 implementation report has been published since August.
- **VA** — other 2026 enactments (ERIC membership, Voting Rights Act of Virginia expansion, RCV for local bodies, National Popular Vote compact) rest on Ballotpedia alone.
- **VT** — S.298's stored description is loose against Act 126's sections.
- **WI** — AB 223 and AB 374 signed, AB 595 vetoed (Ballotpedia alone; not voter-facing).
- **WY** — stored ID lists are abbreviated against the SOS lists; `earlyVoting.details` has no dates.

---

## Verification gaps

Findings for these states are **provisional** where they rest on anything below Tier 1.

| State | Host | Reason | What supplied the findings |
|---|---|---|---|
| AZ | `azsos.gov` | 403 after honest-UA retry (Cloudflare challenge; robots.txt behind the same challenge) | Vote.org (Tier 2) |
| GA | `sos.ga.gov` | 403 after honest-UA retry (Cloudflare challenge); only Wayback snapshot is from 2013 | `georgia.gov` (rung 4) + Vote.org |
| IL | `elections.il.gov` | robots.txt named opt-out (`ClaudeBot`) — not fetched | Vote.org + `ilga.gov` (rung 4) |
| IA | `sos.iowa.gov` | robots.txt named opt-out (`ClaudeBot`) — not fetched | Vote.org + `legis.iowa.gov` (rung 4) |
| MA | `www.sec.state.ma.us` | robots.txt blanket disallow (`User-agent: *`, `/elections`) — not fetched | Vote.org + `malegislature.gov` (rung 4) |
| MI | `mvic.sos.state.mi.us`, `michigan.gov` | 403 after honest-UA retry; Wayback API rate-limited (429) | `legislature.mi.gov` (rung 4) + Vote.org |
| MN | `sos.mn.gov` | Radware captcha on both fetch methods; Wayback API 429 | `revisor.mn.gov` (rung 4) + Vote.org |
| NV | `nvsos.gov` | Incapsula challenge (empty body) | Vote.org (Tier 2) |
| NH | `sos.nh.gov` | 403 after honest-UA retry (Akamai; robots.txt returns the same block page) | Wayback snapshots 2026-09-28, 2026-10-08, 2026-06-09 (rung 3) + Tier 3 for court rulings |
| NY | `elections.ny.gov` | 403 after honest-UA retry (Cloudflare challenge) | Wayback snapshots 2026-10-07 (rung 3) + Vote.org |
| OH | `ohiosos.gov` | 403 after honest-UA retry on every path, robots.txt included | Three Tier 3 sources (rung 5) for #41–42; Vote.org for other fields |
| RI | `vote.sos.ri.gov`, `elections.ri.gov` | 403 after honest-UA retry (robots.txt is a 404 — no opt-out); Wayback snapshot is navigation only | Vote.org + `webserver.rilegislature.gov` (rung 4) |
| TN | `sos.tn.gov`, `govotetn.gov` | 403 after honest-UA retry (robots.txt returns a CloudFront block page) | Vote.org + `wapp.capitol.tn.gov` (rung 4) |
| WA | `sos.wa.gov` | robots.txt named opt-out (`ClaudeBot`) — not fetched | `app.leg.wa.gov` (rung 4, Tier 1) + Vote.org |
| WI | `elections.wi.gov`, `myvote.wi.gov` | 403 after honest-UA retry; Wayback API 429 on three attempts | Vote.org (Tier 2) only |

Partial gaps: **AL** (one SOS page 403; felony-restoration pages 404 on guessed URLs), **CA** (bill
system `leginfo.legislature.ca.gov` 403 — `gov.ca.gov` supplied bill outcomes; `sos.ca.gov` readable),
**KY** (no official page found describing fallback-ID rules after HB 139), **VA** (LIS bill pages are
JavaScript shells — the Code of Virginia host supplied the substance), **NM** (official page readable
but carries no rule detail — Vote.org used).

No new robots.txt opt-out was found this run; the four known disallows (IL, WA, IA, MA) were left
untouched. No stored `officialUrl` returned 404.

---

## Addendum — what was applied (2026-10-09)

**Approved as proposed (51):** #1–#20, #22–#34, #36, #38–#40, #42–#45, #48–#57.

**Modified (6):**

| # | State | What changed from the proposal |
|---|---|---|
| 21 | KS | SAFE Act status drops the word "separate" before "constitutional amendment (HCR 5004)". |
| 35 | NH | `toVote` adds a closing clause: "the Secretary of State has said he will seek to pause that ruling". |
| 37 | NH | HB 323 status adds the same closing clause. |
| 41 | OH | `toRegister` states the legal position ("the BMV documentary proof of citizenship requirement is enforceable again while the appeal proceeds") instead of "must again provide"; BMV practice was not confirmed. |
| 46 | UT | `toRegister` reworded: the federal-only ballot applies to voters whose citizenship cannot be confirmed through driver license records or SAVE and who do not provide proof to their county clerk; adds that the state notifies affected voters and that a May 2026 state review confirmed 99.72% of registered voters as citizens. |
| 47 | UT | `documentationNeeded` third item qualified: "Proof of U.S. citizenship, only if the state could not confirm your citizenship (to vote in state and local races)". |

**Rejected (0).**

Each applied change set the state's `lastVerified` to 2026-10-09 and appended one `changes` entry
(57 entries across 29 states).

**Additional source read during review:** Utah Lieutenant Governor, "Utah Voter Registration
Citizenship Review", May 27, 2026 (Tier 1) —
https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf. It confirms the HB 209
federal-only ballot rule and supplied the wording for #46 and #47.

**Re-checks during review (search results only, not docket checks):** no report of a stay being
filed or granted against the October 2 New Hampshire student ID ruling; no reversal of the Sixth
Circuit stay in Ohio; no lawsuit found against Utah HB 209.

**Vote.org source links (separate item): fixed.** All 50 two-letter URLs were re-tested (404) along
with their full-state-name replacements (200), and the 50 `sources[]` URLs were rewritten. DC already
used the full-name form. By the user's decision no `changes` entries were added and `lastVerified`
was not touched for this fix, since no rule or requirement changed.

**Still open for a later run:** the NH student ID stay question (#35, #37), whether the Ohio BMV has
resumed asking for documents (#41), and everything under "Unconfirmed leads".
