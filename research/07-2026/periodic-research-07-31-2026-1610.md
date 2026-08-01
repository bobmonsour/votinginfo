# Periodic Research — Requirements Update

**Date of research:** 2026-07-31 (Pacific Time, 16:10)
**Run mode:** Requirements update (data verification only — no news capture)
**Branch:** `research/2026-07-31`

## Summary of findings

- **Entries reviewed:** 51 (50 states + DC)
- **Proposed changes identified:** 35 substantive, plus 1 editorial judgment call (Maine)
- **Entries with no changes found:** 24
- **Verification gaps (source unreachable):** see "Verification gaps" at end

Research was performed by eight parallel agents, each given the exact current stored
values for its assigned states so that every discrepancy is compared against real file
contents rather than recalled values.

Source tiers applied per skill rules: Tier 1 = state official election site; Tier 2 =
Vote.org; Tier 3 = NCSL / Ballotpedia / news reporting (requires two corroborating
sources).

---

## Proposed changes by state

### Alaska (AK) — pendingLegislation

- **Current value:** `[]`
- **Correct value:** Add two qualified 2026 ballot measures: (1) Alaska Repeal Top-Four
  Ranked-Choice Voting Initiative, certified Dec 31, 2025 for the Nov 3, 2026 ballot
  (42,837 signatures verified across 40 House districts); (2) a citizenship-verification
  ballot measure, making Alaska the fifth state with such a 2026 measure.
- **Sources:** Ballotpedia (Tier 3) — https://ballotpedia.org/Alaska_Repeal_Top-Four_Ranked-Choice_Voting_Initiative_(2026) ;
  Anchorage Daily News (Tier 3) — https://www.adn.com/politics/2025/12/31/another-initiative-to-repeal-open-primaries-and-ranked-choice-voting-set-to-appear-on-alaskas-2026-ballot/ ;
  Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/03/30/alaska-becomes-fifth-state-with-2026-ballot-measure-on-citizenship-requirement-for-voting/
- **Note:** SB 64 (bipartisan election reform) was vetoed April 30, 2026; override failed
  38–22 on May 4, 2026. It is dead, not pending, and is correctly omitted.

### Arizona (AZ) — pendingLegislation

- **Current value:** Two items — HB 2492 (9th Circuit ruling / SCOTUS cert petition) and
  HB 2038 (MVD/AVID citizenship-verification timeline).
- **Correct value:** Add Proposition 144 / HCR 2001 ("Fast, Accurate, Secure, Transparent
  Election Results Act"), referred to the Nov 3, 2026 ballot in June 2026. Would require
  all voters including mail voters to present government-issued ID (replacing signature
  verification for mail ballots), enshrine a citizenship requirement in the state
  constitution, bar foreign contributions, and change tabulation procedures. Maricopa
  County Superior Court rejected a challenge (reported July 27–31, 2026); appeal pending.
  Most provisions would take effect in 2028.
- **Sources:** Arizona Capitol Times (Tier 3) — https://azcapitoltimes.com/news/2026/07/27/judge-allows-comprehensive-election-measure-to-proceed/ ;
  KJZZ (Tier 3) — https://www.kjzz.org/elections/2026-07-31/judge-keeps-election-reform-measure-that-could-affect-mail-in-voting-on-arizona-ballot ;
  Votebeat (Tier 3) — https://www.votebeat.org/arizona/2026/06/13/2026-ballot-measure-voting-changes-republican-voter-id-fast-election-results/ ;
  Ballotpedia (Tier 3) — https://ballotpedia.org/Arizona_Proposition_144,_Voter_Identification_and_Citizenship_Voting_Requirements_Amendment_(2026)

### Colorado (CO) — recentLegislation

- **Current value:** One item — SB 1 (Colorado Voting Rights Act).
- **Correct value:** Add HB26-1113 ("Modifications to Elections"), signed June 1, 2026.
  Extends drop-box acceptance window from 15 to 22 days; reduces large-campus vote-center
  open period from 15 to 10 days; changes mail-ballot-packet mailing timeframe (effective
  July 1, 2026); grants two hours paid leave to vote on any day a vote center is open;
  requires wait-time reporting; bars a presidential candidate seeking a third term from
  the ballot.
- **Sources:** Colorado Secretary of State (Tier 1) — https://www.coloradosos.gov/pubs/newsRoom/pressReleases/2026/PR20260602ElectionsSecurity.html ;
  Colorado General Assembly (Tier 1) — https://leg.colorado.gov/bills/hb26-1113 ;
  Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/07/08/colorado-lawmakers-enact-omnibus-elections-bill-seven-other-election-related-laws-in-2026-session/
- **Note:** Stored `earlyVoting.details` already reflects the 22-day rule; no change needed there.

### Delaware (DE) — recentLegislation / pendingLegislation

- **Current value:** Both arrays `[]`.
- **Correct value:** Add HB 180 to `pendingLegislation` — first-leg constitutional amendment
  restoring felony voting rights immediately upon completion of sentence; passed House 30–10
  June 16, 2026; must pass a second, differently-elected General Assembly. Add HB 444
  ("Delaware John Lewis Voting Rights Act") — cleared the full General Assembly on the final
  night of the session (adjourned June 30, 2026); expected signing ~July 18, 2026 but the
  signature date could not be independently confirmed.
- **Sources:** Delaware Public Media (Tier 3) — https://www.delawarepublic.org/politics-government/2026-07-06/measures-on-elections-and-voting-that-did-and-didnt-pass-the-general-assembly-this-year ;
  Delaware House Democrats (Tier 3) — https://housedems.delaware.gov/2026/06/16/house-passes-legislation-to-strengthen-the-democratic-process-in-the-first-state/ ;
  NAACP LDF (Tier 3) — https://www.naacpldf.org/press-release/ldf-and-aclu-of-delaware-secure-final-passage-of-delaware-voting-rights-act/

### Florida (FL) — idRequirements.toRegister

- **Current value:** `"FL driver's license or state ID number AND last 4 of SSN. Online registration requires both. If neither, write \"NONE\" and register by paper form; must provide ID before first vote. Florida is considering legislation to require documentary proof of citizenship for new registrants."`
- **Correct value:** The "is considering legislation" clause is stale. HB 991 was signed into
  law April 1, 2026, effective January 1, 2027, and is subject to two federal lawsuits
  (transferred to S.D. Fla. May 6, 2026). HB 991 is already captured in Florida's own
  `recentLegislation`, so the stored data is internally inconsistent.
- **Sources:** WUSF (Tier 3) — https://www.wusf.org/politics-issues/2026-04-01/desantis-receives-bills-voter-id-domestic-terrorist-designations ;
  Florida Phoenix (Tier 3) — https://floridaphoenix.com/2026/04/01/desantis-signs-bill-requiring-proof-of-citizenship-to-register-to-vote-voting-rights-group-sue/ ;
  ACLU of Florida (Tier 3) — https://www.aclufl.org/press-releases/voting-rights-advocates-sue-to-block-floridas-restrictive-show-your-papers-law/

### Georgia (GA) — recentLegislation

- **Current value:** Two items — SB 189 (2024) and HB 296 (2025).
- **Correct value:** Add SB 3EX, signed ~June 26, 2026 in special session, delaying SB 189's
  QR-code ban from July 1, 2026 to January 1, 2028 and mandating hand recounts of top
  statewide races within a 0.5% margin.
- **Sources:** The Current (Tier 3) — https://thecurrentga.org/2026/06/27/kemp-signs-elections-bill-locking-in-qr-code-voting-machines-for-november/ ;
  Rough Draft Atlanta (Tier 3) — https://roughdraftatlanta.com/2026/06/28/georgia-qr-code-law/

### Illinois (IL) — recentLegislation

- **Current value:** `[]`
- **Correct value:** Add HB 4339 ("Rev. Jesse Jackson Sr. Young Voter Empowerment Act"),
  signed mid-July 2026, requiring school districts to give eligible graduating high school
  students an opportunity to register beginning with the 2026–2027 school year (no
  compliance penalty).
- **Sources:** Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/07/30/illinois-lawmakers-require-school-districts-to-provide-voter-registration-opportunities-and-move-rcv-task-force-dates-in-2026-session/ ;
  Shaw Local (Tier 3) — https://www.shawlocal.com/opinion/2026/07/15/eye-on-illinois-no-penalty-for-noncompliance-means-new-voter-registration-law-is-toothless/

### Indiana (IN) — recentLegislation (SB 12 signing date)

- **Current value:** `"status": "Signed by Gov. Braun Feb 27, 2026; effective July 1, 2026"`
- **Correct value:** Signed February 24, 2026 (Public Law 5). Effective date July 1, 2026 is correct.
- **Sources:** Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/02/27/indiana-becomes-the-19th-state-to-ban-ranked-choice-voting/ ;
  BillTrack50 official action log (Tier 3) — https://www.billtrack50.com/billdetail/1914886 ;
  Ballot Access News (Tier 3) — https://ballot-access.org/2026/02/27/indiana-governor-signs-bill-banning-ranked-choice-voting/

### Kansas (KS) — recentLegislation (SB 4 status)

- **Current value:** `"status": "Enacted (veto overridden); under court challenge"`
- **Correct value:** SB 4 is now blocked. Douglas County District Court issued a temporary
  injunction July 16, 2026; the Kansas Supreme Court denied the Secretary of State's
  emergency motions to reinstate July 30–31, 2026. The 3-day mail-ballot grace period
  remains in effect for the August 4, 2026 primary.
- **Sources:** Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/07/30/kansas-three-day-grace-period-for-mail-ballots-temporarily-reinstated-ahead-of-primary/ ;
  KCTV5 (Tier 3) — https://www.kctv5.com/2026/07/31/kansas-supreme-court-upholds-mail-ballot-grace-period-ahead-primary-election/ ;
  KWCH (Tier 3) — https://www.kwch.com/2026/07/28/kansas-court-appeals-upholds-ruling-that-reinstates-3-day-grace-period-mail-in-ballots/ ;
  WIBW (Tier 3) — https://www.wibw.com/2026/07/31/mail-ballot-grace-period-remains-primary-election-supreme-court-declines-review-sec-state-appeal/
- **Time-sensitive:** the Kansas primary is August 4, 2026.

### Maryland (MD) — recentLegislation

- **Current value:** Two items — SB 255 (Maryland Voting Rights Act of 2026) and HB 115 / SB 241.
- **Correct value:** Add SB 141 (authorizes the State Election Administrator to act on
  election misinformation/disinformation/deepfakes, including seeking removal orders;
  effective June 1, 2026) and SB 670 / HB 1001 (police on duty at polling places must follow
  election officials' orders; permits arrests for breach of peace or interference).
- **Sources:** Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/05/20/maryland-lawmakers-enact-state-level-voting-rights-act-21-other-election-bills-in-2026/ ;
  Maryland General Assembly official bill pages (Tier 1) — https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/hb1001 ,
  https://mgaleg.maryland.gov/mgawebsite/legislation/details/sb0670

### Massachusetts (MA) — pendingLegislation (status)

- **Current value:** `"status": "Legislature took no action by the May 5, 2026 deadline. Proponents must collect approximately 12,429 additional signatures by July 8, 2026 to place the question on the November 2026 ballot."`
- **Correct value:** The signature drive succeeded. Secretary Galvin certified the same-day
  voter registration initiative — along with eight other questions — for the November 3,
  2026 ballot on July 17, 2026. The measure is qualified, not merely proposed.
- **Sources:** Boston Globe (Tier 3) — https://www.bostonglobe.com/2026/07/17/metro/massachusetts-ballot-questions-certified-galvin/ ;
  Ballotpedia (Tier 3) — https://ballotpedia.org/Massachusetts_Permit_Same-Day_Voter_Registration_Initiative_(2026) ;
  CBS Boston (Tier 3) — https://www.cbsnews.com/boston/news/massachusetts-ballot-questions-2026/

### Michigan (MI) — recentLegislation

- **Current value:** `[]`
- **Correct value:** Add SB 240, SB 241, HB 4698, HB 4699 — signed June 22, 2026. Set uniform
  term-start dates for local elected officials so overseas/military absentee ballots (which
  can arrive up to 6 days after Election Day) are counted before officials are sworn in.
- **Sources:** Votebeat (Tier 3) — https://www.votebeat.org/michigan/2026/06/23/to-accommodate-overseas-voters-michigan-changes-start-dates-for-local-officials/ ;
  Michigan Advance (Tier 3) — https://michiganadvance.com/2026/06/24/to-accommodate-overseas-voters-michigan-changes-start-dates-for-local-officials/ ;
  CBS Detroit (Tier 3) — https://www.cbsnews.com/detroit/news/michigan-local-officials-all-votes-certified-new-laws/

### Michigan (MI) — pendingLegislation (HB 4765)

- **Current value:** `[]`
- **Correct value:** Add HB 4765 — would require documentary proof of U.S. citizenship before
  a registration application is processed. Passed the House along party lines April 2026;
  stalled in the Senate.
- **Sources:** Michigan Advance (Tier 3) — https://michiganadvance.com/2026/04/15/michigan-house-passes-controversial-voter-id-bill-along-party-lines/ ;
  Civic Media (Tier 3) — https://civicmedia.us/news/2026/04/15/michigan-house-passes-controversial-voter-id-bill-along-party-lines ;
  The Michigan Independent (Tier 3) — https://michiganindependent.com/politics/michigan-house-republicans-pass-bill-requiring-proof-of-citizenship-to-vote/

### Michigan (MI) — pendingLegislation (SB 961–964)

- **Current value:** `[]`
- **Correct value:** Add the Michigan Voting Rights Act package (SB 961–964), passed the
  Senate 20–17 on June 16, 2026; stalled in the House. Creates a state elections research
  institute, requires local language assistance, sets a polling-place assistance process.
- **Sources:** Michigan Advance (Tier 3) — https://michiganadvance.com/2026/06/16/michigan-senate-passes-state-voting-rights-act-as-federal-act-loses-teeth/ ;
  Michigan Daily (Tier 3) — https://www.michigandaily.com/news/government/may-2026-michigan-legislative-roundup-voting-rights-act-chemical-weapons-ban-and-restrictions-on-digital-workplace-communications/

### Minnesota (MN) — earlyVoting

- **Current value:** `{ "available": true, "details": "In-person absentee voting available 46 days before election day." }`
- **Correct value:** Minnesota now has two in-person early methods: the existing 46-day
  absentee voting, plus a new "Early Voting" option (ballot cast directly into a tabulator)
  beginning 18 days before election day, per HF4240 / Chapter 102, approved May 18, 2026.
- **Sources:** MN Revisor of Statutes, Session Law Ch. 102 (Tier 1) — https://www.revisor.mn.gov/laws/2026/0/Session+Law/Chapter/102/ ;
  CBS News Minnesota (Tier 3) — https://www.cbsnews.com/minnesota/news/early-voting-minnesota-primary-2026-what-to-know/ ;
  Blue Earth County (Tier 3) — https://www.blueearthcountymn.gov/431/Voting-Early-In-Person-or-By-Mail

### Minnesota (MN) — recentLegislation

- **Current value:** `[]`
- **Correct value:** Add HF4240 (Chapter 102, 2026), approved May 18, 2026 — establishes the
  18-day Early Voting option and updates absentee/canvassing procedures.
- **Sources:** MN Revisor of Statutes (Tier 1) — https://www.revisor.mn.gov/laws/2026/0/Session+Law/Chapter/102/ ;
  CBS News Minnesota (Tier 3) — https://www.cbsnews.com/minnesota/news/early-voting-minnesota-primary-2026-what-to-know/

### Mississippi (MS) — idRequirements.toRegister

- **Current value:** `"MS driver's license or state ID number, or last 4 of SSN. If neither, leave blank and a number is assigned. No online voter registration available. Must show photo ID when voting."`
- **Correct value:** As of July 1, 2026 (SHIELD Act / SB 2588 in effect), an applicant who
  cannot provide a driver's license number is treated as a "potential noncitizen" and run
  through the federal SAVE database; if flagged, the applicant has 30 days to provide
  documentary proof of citizenship or is placed in "pending" status, limited to affidavit
  ballots.
- **Sources:** Fair Elections Center (Tier 3) — https://fairelectionscenter.org/advocacy/mississippi-shield-act-citizenship-checks-law/ ;
  ACLU of Mississippi (Tier 3) — https://www.aclu-ms.org/legislation/sb-2588-shield-act/ ;
  Mississippi Center for Justice (Tier 3) — https://mscenterforjustice.org/mississippis-new-shield-act-takes-effect-today/

### Mississippi (MS) — recentLegislation (SB 2588 status)

- **Current value:** `"status": "Signed by Gov. Reeves April 1, 2026; effective July 1, 2026"`
- **Correct value:** The law took effect on schedule, but on June 22, 2026 a federal judge
  ruled the overhauled SAVE database — the mechanism SB 2588 relies on — unlawful.
  Mississippi was among ~25 states named; the ruling's effect on Mississippi's
  implementation was reported as unclear.
- **Sources:** Mississippi Free Press (Tier 3) — https://www.mississippifreepress.org/states-cant-use-save-to-check-voter-citizenship-judge-rules/ ;
  Votebeat (Tier 3) — https://www.votebeat.org/national/2026/06/22/judge-rules-against-trump-overhaul-save-database-noncitizen-voters/ ;
  WJTV/AP (Tier 3) — https://www.wjtv.com/news/ap-judge-blocks-use-of-federal-database-to-check-citizenship-saying-it-could-wrongly-purge-voters/

### Mississippi (MS) — pendingLegislation

- **Current value:** `[]`
- **Correct value:** Add HB 908 — would move Mississippi's mail-ballot receipt deadline up,
  but only if the U.S. Supreme Court invalidated the existing 5-day grace period. SCOTUS
  upheld the law 5–4 in *Watson v. RNC* on June 29, 2026, so HB 908 is enacted but dormant.
- **Sources:** Brennan Center (Tier 3) — https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-may-2026 ;
  NPR (Tier 3) — https://www.npr.org/2026/06/29/nx-s1-5815312/supreme-court-mail-ballot-grace-period-ruling ;
  Mississippi Today (Tier 3) — https://mississippitoday.org/2026/03/22/mail-in-ballots-election-day/

### Missouri (MO) — pendingLegislation → recentLegislation

- **Current value:** HB 174 / SB 152 entry with `"status": "Passed Missouri House 101-47 and Senate in May 2026; sent to Gov. Kehoe who has until July 15, 2026 to act"`
- **Correct value:** Signed July 13, 2026 as HB 1871 (a different vehicle bill number).
  Restores voting rights to an estimated 40,000–41,100 Missourians on probation/parole,
  effective August 28, 2026. Those convicted of murder, child endangerment, first- or
  second-degree assault, or incest remain barred — note this differs from the stored
  description's "first-degree burglary." Should move from `pendingLegislation` to
  `recentLegislation`.
- **Sources:** Governor Kehoe press release (Tier 1) — https://governor.mo.gov/press-releases/archive/governor-kehoe-takes-action-remaining-legislation ;
  KCUR/NPR (Tier 3) — https://www.kcur.org/politics-elections-and-government/2026-07-14/missouri-governor-signs-elections-law-restoring-some-voting-rights-and-limiting-automatic-donations ;
  Bolts (Tier 3) — https://boltsmag.org/gop-run-missouri-becomes-latest-state-to-roll-back-felony-disenfranchisement/

### Missouri (MO) — felonyVotingRules

- **Current value:** `"Rights restored upon final discharge from sentence, including completion of any probation or parole term. People on probation or parole for a felony may not vote."`
- **Correct value:** Under HB 1871, effective **August 28, 2026**, most people on felony
  probation/parole regain voting rights; only those convicted of murder, child endangerment,
  first- or second-degree assault, or incest remain barred while on probation or parole.
- **Sources:** Same as the Missouri legislation entry above.
- **Timing caveat:** the effective date is 28 days after this research run. The stored value
  is still accurate as of 2026-07-31; the change becomes accurate on 2026-08-28. This is an
  editorial decision about whether to write now with forward-looking wording or defer.

### Montana (MT) — recentLegislation

- **Current value:** Three items (Photo ID Law, SB 490, SB 276), none mentioning a birth-year
  requirement.
- **Correct value:** Add HB 719 (2025 session) — requires absentee/mail voters to write their
  birth year in four pre-printed boxes on the return envelope in addition to signing.
  Effective October 1, 2025; challenged in Lewis and Clark District Court (filed May 2025,
  no injunction issued, requirement in effect).
- **Sources:** votemt.gov (Tier 1) ;
  Montana Free Press (Tier 3) — https://montanafreepress.org/2025/10/27/new-montana-law-requires-voters-put-their-birth-year-on-ballots/ ;
  Daily Montanan (Tier 3) — https://dailymontanan.com/2025/10/23/hundreds-of-ballots-rejected-following-new-law-requiring-voters-write-birth-year-on-ballot-envelopes/
- **Note:** SB 490's trial remains scheduled for Aug 24, 2026; that entry's status is still accurate.

### Montana (MT) — mailInVoting

- **Current value:** `{ "available": true, "details": "No-excuse absentee voting. Counties with fewer than 800 voters may conduct all-mail elections.", "noExcuseRequired": true }`
- **Correct value:** Details should add that mail voters must write their birth year on the
  return envelope in addition to signing (HB 719, effective Oct 1, 2025); ballots missing it
  are subject to rejection/cure notices — counties reported hundreds of rejections in 2025.
- **Sources:** votemt.gov (Tier 1) ;
  Montana Free Press (Tier 3) — https://montanafreepress.org/2026/05/07/new-voting-rules-in-play-as-primary-election-begins/

### Nevada (NV) — pendingLegislation

- **Current value:** `[]`
- **Correct value:** Add Nevada Question 7 (Require Voter Identification Initiative) —
  approved 73%–27% on Nov 5, 2024 (first passage). Nevada requires initiated constitutional
  amendments to pass in two consecutive even-year elections, so a final vote occurs
  November 3, 2026. Would require photo ID for in-person voters and last-4 of DL/SSN for
  mail voters.
- **Sources:** Ballotpedia (Tier 3) — https://ballotpedia.org/Nevada_Question_7,_Require_Voter_Identification_Initiative_(2026) ;
  The Nevada Independent (Tier 3) — https://thenevadaindependent.com/article/nevadans-approve-ballot-question-to-require-voter-id-measure-heads-to-2026-ballot ;
  8NewsNow (Tier 3) — https://www.8newsnow.com/news/politics/id-required-what-question-7-means-to-voting-in-nevada/

### New Hampshire (NH) — recentLegislation (HB 1569 status)

- **Current value:** `"status": "Enacted; federal court struck down the documentary-proof-of-citizenship / affidavit-elimination provisions as unconstitutional May 28, 2026; affidavit option reinstated; state expected to appeal"`
- **Correct value:** The appeal has been filed — New Hampshire appealed to the First Circuit
  around June 25, 2026 and sought a stay pending appeal. On July 24, 2026, Judge Elliott
  refused to stay the ruling, so the block remains in effect while the appeal is pending.
  "State expected to appeal" is now stale.
- **Sources:** New Hampshire Bulletin (Tier 3) — https://newhampshirebulletin.com/2026/06/25/weeks-before-election-state-appeals-ruling-striking-down-proof-of-citizenship-voting-law/ ;
  NHPR (Tier 3) — https://www.nhpr.org/politics/2026-06-25/state-appeals-ruling-striking-down-proof-of-citizenship-voting-law-nh ;
  Democracy Docket (Tier 3) — https://www.democracydocket.com/news-alerts/judge-refuses-to-pause-ruling-blocking-new-hampshires-proof-of-citizenship-law/

### New Jersey (NJ) — eligibilityAge

- **Current value:** `"18 (may pre-register at 17)"`
- **Correct value:** The New Voter Empowerment Act (A3690/S1888), effective January 1, 2026,
  goes beyond pre-registration: a registered 17-year-old may vote in a primary election if
  they turn 18 on or before the following general election. First used in the June 2, 2026
  primary.
- **Sources:** NJ State Bar Foundation (Tier 3) — https://njsbf.org/2026/03/16/for-the-first-time-17-year-olds-are-able-to-vote-in-new-jersey-primaries/ ;
  WHYY (Tier 3) — https://whyy.org/articles/new-jersey-17-year-olds-primary-election-voting/ ;
  Monmouth County Clerk (Tier 3, official county government) — https://www.monmouthcountyclerk.gov/press-releases/new-law-expands-primary-election-voting-to-17-year-olds-in-new-jerseys-upcoming-primary-election/

### New Jersey (NJ) — recentLegislation

- **Current value:** One entry — A4745 / S420, signed April 6, 2026.
- **Correct value:** Add the John R. Lewis Voter Empowerment Act of New Jersey (ACS for
  A-1715 / SCS for S-282), signed July 2, 2026 — the first state-level voting rights act
  enacted after *Louisiana v. Callais*. Requires AG pre-clearance for certain election
  changes in jurisdictions with a history of discrimination, expands language access, and
  creates a public election-data database.
- **Sources:** NJ Governor's Office (Tier 1) — https://www.nj.gov/governor/news/2026/20260702a.shtml ;
  New Jersey Monitor (Tier 3) — https://newjerseymonitor.com/2026/05/21/nj-voting-rights-bill/ ;
  Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/07/08/new-jersey-becomes-the-11th-state-to-enact-a-state-level-voting-rights-act/ ;
  New Jersey Globe (Tier 3) — https://newjerseyglobe.com/campaigns/sherrill-signs-john-r-lewis-voter-empowerment-act-into-law-creating-new-jerseys-own-voting-rights-statute/

### Ohio (OH) — recentLegislation

- **Current value:** One entry — SB 293 (eliminated post-Election Day grace period for
  absentee ballot receipt).
- **Correct value:** Add HB 54, the transportation budget signed April 1, 2025 (effective
  ~June 2025), which requires BMV voter-registration applicants to provide proof of
  citizenship beyond sworn attestation. Under federal challenge (*Red Wine & Blue and Ohio
  Alliance for Retired Americans v. LaRose*, filed Aug. 2025); no final ruling as of late
  July 2026.
- **Sources:** Ohio Capital Journal (Tier 3) — https://ohiocapitaljournal.com/2025/08/29/lawsuit-challenges-new-proof-of-citizenship-requirements-at-ohio-bmv-for-voter-registration/ ;
  Statehouse News Bureau (Tier 3) — https://www.statenews.org/government-politics/2025-04-01/dewine-signs-ohios-transportation-budget-at-the-finish-line-all-items-pass-through-without-vetoes ;
  Democracy Docket (Tier 3) — https://www.democracydocket.com/news-alerts/trump-doj-bid-to-defend-ohios-anti-voting-law-is-useless-and-untimely-court-rules/
- **Note:** the substance is already correctly described in `idRequirements.toRegister`; only
  the `recentLegislation` array entry is missing.

### Oklahoma (OK) — pendingLegislation

- **Current value:** `[]`
- **Correct value:** Add State Question 846 (originated as SJR 47), a legislative
  constitutional referral adding proof-of-identity language to the Oklahoma Constitution and
  directing the Legislature to set the specific ID requirements. On the statewide ballot
  August 25, 2026.
- **Sources:** Oklahoma Policy Institute (Tier 3) — https://okpolicy.org/sq846/ ;
  Oklahoma Watch (Tier 3) — https://oklahomawatch.org/2026/07/10/what-to-know-about-state-question-846-the-voter-identification-measure/

### Rhode Island (RI) — sameDayRegistration

- **Current value:** `false`
- **Correct value:** Rhode Island has a limited election-day registration provision: voters
  who miss the 30-day deadline may register and vote **only for President/Vice-President**
  at their local Board of Canvassers on the day of a presidential election (R.I.G.L. 17-1-3).
  It does not apply to any other office or election.
- **Sources:** Rhode Island Board of Elections FAQ (Tier 1) — https://elections.ri.gov/faq ;
  Vote.org Rhode Island (Tier 2) — https://www.vote.org/state/rhode-island/ ;
  WJAR/Turn to 10 (Tier 3) — https://turnto10.com/i-team/same-day-registration-and-voting-still-available-in-ri
- **Schema caveat:** `sameDayRegistration` is a boolean driving the home-page filter. Flipping
  it to `true` would group RI with general-SDR states and mislead. Recommended handling is to
  keep `false` and record the exception in `notes`.

### Tennessee (TN) — recentLegislation (SB 336 / HB 687 signing date)

- **Current value:** `"status": "Signed by Gov. Lee in early April 2026"`
- **Correct value:** Signed March 26, 2026 (late March, not early April).
- **Sources:** Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/06/03/tennessee-enacts-bill-changing-voter-restoration-requirements-for-individuals-convicted-of-a-felony-10-other-election-bills-in-2026-regular-session/ ;
  KSAT/AP (Tier 3) — https://www.ksat.com/news/national/2026/04/03/tennessee-eases-up-on-its-unique-child-support-rule-for-restoring-voting-rights-after-a-felony/

### Texas (TX) — pendingLegislation

- **Current value:** `[]`
- **Correct value:** Add SB 2753 (89th Legislature), signed June 22, 2025. Restructures the
  early-voting calendar (eliminating the 4-day gap; new schedule runs the 12th day before
  through the day before Election Day) and standardizes hours/weekend access. Not yet in
  effect — per the SOS advisory it applies only to elections ordered after the SOS publishes
  an implementation report and procedures, targeted around 2027.
- **Sources:** Texas Secretary of State advisory (Tier 1) — https://www.sos.state.tx.us/elections/laws/advisory2025-10.shtml ;
  Ballotpedia (Tier 3) — https://news.ballotpedia.org/2025/06/25/texas-gov-abbott-r-signs-bill-to-allow-early-voting-on-weekends-and-up-to-election-day/ ;
  Votebeat (Tier 3) — https://www.votebeat.org/texas/2025/06/06/senate-bill-2753-expands-early-voting-access-weekend/
- **Note:** stored `earlyVoting.details` ("17 to 4 days before election day") remains accurate
  until implementation.

### Virginia (VA) — pendingLegislation

- **Current value:** `[]`
- **Correct value:** Add the Virginia Voting Rights Restoration Amendment (HJ 2 / SJ 2),
  which cleared the General Assembly in two consecutive sessions (House 65–33, Senate 21–18;
  final passage Jan 14/16, 2026) and appears on the November 3, 2026 ballot. If approved,
  felony voting-rights restoration becomes automatic upon release from incarceration,
  replacing the current case-by-case gubernatorial process.
- **Sources:** Ballotpedia (Tier 3) — https://ballotpedia.org/Virginia_Voting_Rights_Restoration_for_Felons_Upon_Release_Amendment_(2026) ;
  Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/01/21/virginia-general-assembly-places-constitutional-amendments-on-same-sex-marriage-abortion-voting-rights-following-criminal-convictions-on-the-nov-2026-ballot/ ;
  Virginia Mercury (Tier 3) — https://virginiamercury.com/2026/07/31/spanberger-restores-voting-rights-to-more-than-60000-virginians/

### Washington (WA) — recentLegislation

- **Current value:** `[]`
- **Correct value:** Add 2026-session laws effective June 2026: HB 1710 (preclearance —
  jurisdictions with a history of voting-rights violations, currently Pasco, Yakima, and
  Yakima County, need AG approval before changing voting policies/systems); HB 1916
  (auditors must cancel a WA registration when a more recent out-of-state registration is
  verified; tightens improper-challenge dismissal); SB 5892 (class C felony for election
  officials disclosing private voter data); SB 6035 (auditors must consult regularly with
  federally recognized tribes on election access).
- **Sources:** Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/04/20/washington-legislators-update-state-voting-rights-act-enact-eight-other-election-related-bills/ ;
  MRSC (Tier 3) — https://mrsc.org/stay-informed/mrsc-insight/july-2026/2026-elections-laws
- **Sourcing caveat:** sos.wa.gov returned 403 on every attempt, so this rests on two
  agreeing Tier 3 sources rather than a Tier 1 read.

### Wyoming (WY) — recentLegislation

- **Current value:** One entry — HB 156 (documentary proof of citizenship + 30-day durational
  residency).
- **Correct value:** The HB 156 entry is accurate, but the WY Secretary of State's own page
  lists seven additional 2025 election-integrity enactments not captured: HB 318 / HEA 62
  (voter-list maintenance; SAVE-system and WYDOT cross-referencing), HB 165 / HEA 71 (bans
  ranked-choice voting), SF 78 / SEA 10 (restricts distribution of unsolicited absentee
  request forms), HB 337 / HEA 61 (bans foreign-national ballot-measure funding), HB 228 /
  HEA 65 (bans private election-administration funding), SF 166 / SEA 74 (moves new-party
  filing deadline June 1 → May 1), SF 165 / SEA 75 (allows email notice of registration
  cancellation). HEA 62 in particular is substantively tied to the citizenship-verification
  changes already described in `idRequirements`.
- **Sources:** Wyoming Secretary of State, "2025 Election Integrity Laws" (Tier 1) — https://sos.wyo.gov/Elections/Legislation/2025.aspx

---

## Editorial judgment call (not a discrepancy)

### Maine (ME) — recentLegislation

- **Current value:** `[]`
- **Situation:** The Legislature passed LD 1666 on Feb 10, 2026, extending ranked-choice
  voting to gubernatorial/legislative general elections, but the Maine Supreme Judicial Court
  held on April 6, 2026 that such expansion is unconstitutional under the state's
  plurality-based constitution, so it did not take effect.
- **Why it's a judgment call:** it does not change any tracked field and does not misstate any
  stored value, but other states' `recentLegislation` arrays do include RCV-related items
  (e.g., Iowa's HF954 RCV ban), so consistency may argue for adding an entry noting the
  attempted-but-blocked expansion.
- **Sources:** Maine Public (Tier 3) — https://www.mainepublic.org/politics/2026-04-06/maine-supreme-court-says-proposed-ranked-choice-voting-expansion-is-unconstitutional ;
  Ballotpedia News (Tier 3) — https://news.ballotpedia.org/2026/04/08/maine-supreme-court-says-bill-expanding-ranked-choice-voting-is-unconstitutional/ ;
  Maine Morning Star (Tier 3) — https://mainemorningstar.com/2026/04/06/maine-supreme-court-says-proposed-ranked-choice-voting-expansion-is-not-constitutional/

---

## States with no changes found

Alabama, Arkansas, California, Connecticut, Hawaii, Idaho, Iowa, Kentucky, Louisiana, Maine
(see judgment call above), Nebraska, New Mexico, New York, North Carolina, North Dakota,
Oregon, Pennsylvania, South Carolina, South Dakota, Utah, Vermont, West Virginia, Wisconsin,
District of Columbia.

---

## Verification gaps

The following official (Tier 1) or Vote.org (Tier 2) sources could not be fetched during this
run — typically HTTP 403 bot-blocking or certificate errors. Findings for the affected states
rest on corroborating Tier 3 sources rather than a direct authoritative read, and should be
treated as provisional rather than a confirmed clean bill of health:

- **Tier 1 blocked:** alabamavotes.gov (AL), elections.alaska.gov (AK), sos.ga.gov (GA),
  elections.il.gov (IL), mvic.sos.state.mi.us and michigan.gov/sos/elections (MI),
  sos.state.mn.us (MN), sos.ms.gov/elections (MS, 404), sos.mo.gov/elections (MO),
  sosmt.gov (MT), nj.gov/state/elections (NJ), sos.wa.gov (WA), sos.texas.gov (TX),
  Kansas SOS elections subpage (KS), scvotes.gov / sdsos.gov / sos.oregon.gov subpages
- **Tier 2 blocked:** vote.org state pages for AL, AK, CO, MI, MN, MO, NV, TX

### Items surfaced but deliberately not reported (failed the two-source Tier 3 rule)

- **Minnesota:** a claim about new ID requirements for online absentee-ballot applications
  (single source)
- **Nebraska:** LB1075 allegedly shortening the provisional-ballot cure period and repealing
  an ID requirement (single source, not corroborated by the official Legislature record)
- **Arkansas:** Act 403 of 2025 (nursing-home co-witness requirement) — coverage traced to one
  newspaper's two mirror sites, not two independent sources

### Items to re-check on a future run

- **Wyoming SF 29 (2026):** would have tightened acceptable voter-ID forms (dropping
  Medicare/Medicaid cards and some student IDs); final disposition unconfirmed. Re-check once
  the WY SOS posts its 2026 session summary.
- **DC — H.R. 884:** passed the U.S. House 266–148 on June 10, 2025 to ban noncitizen voting in
  DC local elections; still pending in Senate committee. No change to DC data unless enacted.
- **Delaware HB 444:** confirm whether Gov. Meyer signed it (expected ~July 18, 2026).
- **New York:** the official 2026 Election Law Update PDF could not be read in full; confirm
  whether the "election integrity and worker protection reforms" bills were signed.

---

## Addendum — disposition of proposed changes

All proposed changes were reviewed individually. Final count: **39 prompts, 38 approved
(several with modifications), 1 rejected.** The count rose from the 35 identified above
because Maryland's two bills, Delaware's two bills, and Alaska's two ballot measures were
each split into separate prompts per the one-fact-per-prompt rule.

28 of 51 entries had `lastVerified` advanced to 2026-07-31, and 38 change-log entries were
added.

### Approved as proposed

- **AK** — Repeal Top-Four RCV Initiative added to `pendingLegislation`
- **AZ** — Proposition 144 / HCR 2001 added to `pendingLegislation`
- **CO** — HB26-1113 added to `recentLegislation`
- **DE** — HB 180 added to `pendingLegislation`
- **FL** — `idRequirements.toRegister` corrected; stale "considering legislation" clause
  replaced with the enacted HB 991
- **GA** — SB 3EX added to `recentLegislation`
- **IL** — HB 4339 added to `recentLegislation` (signing date recorded as "July 2026" since
  only "mid-July" could be sourced)
- **IN** — SB 12 signing date corrected Feb 27 → Feb 24, 2026
- **KS** — SB 4 status updated with the July 16 injunction and July 30–31 Supreme Court denial
- **ME** — LD 1666 added to `recentLegislation` (the editorial judgment call; approved)
- **MD** — SB 141 added to `recentLegislation`
- **MD** — SB 670 / HB 1001 added to `recentLegislation`
- **MI** — SB 240 / SB 241 / HB 4698 / HB 4699 added to `recentLegislation` as one combined entry
- **MI** — HB 4765 added to `pendingLegislation`
- **MI** — SB 961–964 (Michigan Voting Rights Act) added to `pendingLegislation`
- **MN** — `earlyVoting.details` updated to cover both the 46-day absentee and new 18-day
  early voting windows
- **MN** — HF4240 (Chapter 102) added to `recentLegislation`
- **MS** — SB 2588 status updated with the June 22, 2026 SAVE database ruling
- **MO** — felony-rights bill moved from `pendingLegislation` to `recentLegislation` as
  HB 1871; offense list corrected from "first-degree burglary" to "first- or second-degree
  assault, and incest"
- **MT** — HB 719 added to `recentLegislation`
- **MT** — `mailInVoting.details` updated with the birth-year envelope requirement
- **NV** — Question 7 added to `pendingLegislation`
- **NH** — HB 1569 status updated: appeal filed June 25, stay denied July 24, 2026
- **NJ** — `eligibilityAge` expanded to cover 17-year-old primary voting
- **NJ** — John R. Lewis Voter Empowerment Act added to `recentLegislation`
- **OH** — HB 54 added to `recentLegislation`
- **OK** — State Question 846 added to `pendingLegislation`
- **TN** — SB 336 / HB 687 signing date corrected to March 26, 2026
- **TX** — SB 2753 added to `pendingLegislation`
- **VA** — Voting Rights Restoration Amendment added to `pendingLegislation`
- **WA** — HB 1710, HB 1916, SB 5892, SB 6035 added to `recentLegislation` as four entries

### Approved with modifications

- **DE — HB 444 (John Lewis VRA):** proposed for `recentLegislation`; recorded in
  `pendingLegislation` instead, because the bill's passage is well sourced but no
  gubernatorial signature could be confirmed. Status notes a signing was expected around
  July 18, 2026. **Promote to `recentLegislation` once the signature is confirmed.**
- **MA — same-day registration initiative:** status updated to certified for the November 3,
  2026 ballot, and the `description`'s trailing signature-deadline sentence revised so the
  two fields no longer contradict each other.
- **MS — `idRequirements.toRegister`:** SHIELD Act process added, but worded to note that the
  federal SAVE database it relies on was ruled unusable in its current form in June 2026, so
  application of the requirement is unsettled. Recording it as settled current practice would
  have overstated what is actually happening.
- **MO — `felonyVotingRules`:** written with forward-looking wording rather than switching
  outright. The field now states the current rule *and* that HB 1871 restores rights to most
  people on probation or parole beginning August 28, 2026. This is accurate both before and
  after that date, so no follow-up edit is strictly required — but see the watch list below.
- **RI — `sameDayRegistration`:** boolean deliberately left `false`; the presidential-only
  election-day registration exception (R.I.G.L. 17-1-3) recorded in `notes` instead. Flipping
  the boolean would have grouped Rhode Island with general-SDR states in the home-page filter.
  This matches the existing treatment of Alaska, which has the identical presidential-only
  provision documented in its `notes` with `sameDayRegistration: false`.
- **VA — Voting Rights Restoration Amendment:** description worded to sit alongside the
  existing *King v. Youngkin* entry (in effect since June 1, 2026) rather than implying
  restoration is still purely case-by-case gubernatorial action.
- **WY — 2025 session laws:** four of the seven additional bills added — HEA 62 (list
  maintenance / SAVE), HEA 71 (RCV ban), SEA 10 (unsolicited absentee request forms), and
  SEA 75 (email cancellation notice). The three campaign-finance and party-filing-deadline
  bills (HEA 61, HEA 65, SEA 74) were left out as outside the site's tracked scope.

### Rejected

- **AK — citizenship-verification ballot measure.** Supported by a single Tier 3 source with
  no measure number and no ballot-certification detail, failing the two-source Tier 3 rule.
  Re-check on a future run once a measure number and corroborating source exist.

### Watch list for future runs

- **MO, after 2026-08-28:** HB 1871 takes effect. The `felonyVotingRules` text is written to
  remain accurate through the transition, but it could be simplified afterward to state the
  new rule directly rather than as a forthcoming change.
- **DE HB 444:** confirm the signature and move the entry from `pendingLegislation` to
  `recentLegislation`.
- **OK SQ 846:** statewide vote August 25, 2026 — the nearest-term measure recorded.
- **KS SB 4:** litigation continues past the August 4, 2026 primary; the injunction is
  preliminary, not final.
- **NV Question 7, AZ Prop 144, VA restoration amendment, MA same-day registration:** all on
  the November 3, 2026 ballot; each would change tracked fields if approved.
- Plus the unresolved items listed under "Items to re-check on a future run" above
  (WY SF 29, DC H.R. 884, New York's 2026 election law update).

### Verification

`npm run build` completed successfully after all edits (159 files written), confirming the
JSON parses and the `checkNewsDuplication` guard passes. `git diff --stat` showed 504
insertions and 61 deletions across `_data/states.json` — proportionate to 38 surgical edits,
with no evidence of whole-file re-serialization.
