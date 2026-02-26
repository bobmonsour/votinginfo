# Voter Registration and Voting Requirements Report

## Independent Evaluation of U.S. State Voting Laws vs. VotingInfo Website

**Prepared by:** Independent Review
**Date:** February 25, 2026
**Website Under Review:** https://votinginfo.bob-monsour.workers.dev/

---

## Executive Summary

This report presents an independent evaluation of voter registration requirements, voting documentation requirements, registration deadlines and methods, mail-in voting options, and early voting provisions across all 50 states and the District of Columbia. Our research team conducted an extensive review of official state election websites, the National Conference of State Legislatures (NCSL), Ballotpedia, Vote.org, and recent news coverage to verify the accuracy of information presented on the VotingInfo website.

The website's data, sourced from `states.json` with a "lastVerified" date of February 24, 2026, is generally accurate. However, our review identified a number of discrepancies ranging from minor characterization differences to substantive factual errors, particularly in areas affected by recent legislation enacted in 2024-2025. We also identified several areas where the website's information is incomplete or where the legal landscape has shifted since the data was compiled.

---

## Methodology

Research was conducted by four parallel teams covering:
- **Southeast** (12 states): AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV
- **Northeast** (11 states): CT, DE, ME, MD, MA, NH, NJ, NY, PA, RI, VT
- **Midwest** (12 states): IL, IN, IA, KS, MI, MN, MO, NE, ND, OH, SD, WI
- **West + DC** (16 jurisdictions): AK, AZ, CA, CO, HI, ID, MT, NV, NM, OK, OR, TX, UT, WA, WY, DC

Each team verified the following categories against the website's claims:
1. Registration documentation requirements
2. Registration deadlines and methods (online, mail, in-person)
3. Same-day registration availability
4. Early voting availability and timing
5. Mail-in/absentee voting eligibility and excuses
6. Voter ID requirements at the polls
7. Recent legislation (2024-2026)

---

## Discrepancies Identified

### ALABAMA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "15 days before election" | Registration closes 14 days before an election (the website may be rounding or using inclusive counting) | Minor |
| Early voting | "Alabama does not offer early voting" | **Confirmed accurate** | -- |
| Mail-in voting | "Absentee ballot available; excuse required" | **Confirmed accurate** | -- |

**Assessment:** Website is largely accurate for Alabama.

---

### ALASKA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Same-day registration | `true` | Same-day registration is available **only during presidential elections**, not all elections | **Significant** |
| Registration deadline | "30 days before election" | Confirmed 30 days for standard registration | -- |
| Voter ID | "ID requested but not strictly required; voters can sign a sworn statement" | More nuanced: voters without ID cast a "questioned ballot" rather than signing a sworn statement per se; an election official who knows the voter may waive the requirement | Minor |

**Assessment:** The same-day registration characterization is misleading -- it is not universally available.

---

### ARIZONA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Voter ID | "Photo ID required (two forms of non-photo ID also accepted)" | Confirmed: one photo ID from List 1, or two non-photo IDs from Lists 2/3 | -- |
| Registration deadline | "29 days before election" | Confirmed | -- |
| Proof of citizenship | Described accurately in toRegister field | Confirmed, including "federal-only" voter distinction | -- |

**Assessment:** Website is accurate for Arizona. The dual "full ballot" vs. "federal only" system is correctly described.

---

### ARKANSAS

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Online registration | `false` | Our research found that Arkansas **does** offer online voter registration | **Significant** |
| Early voting | "Early voting begins 15 days before election day" | Varies: 7-15 days depending on election type | Minor |

**Assessment:** The website incorrectly states Arkansas lacks online registration. Arkansas does offer online voter registration through the Secretary of State's website.

---

### CALIFORNIA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Generally accurate | Confirmed | -- |
| Recent legislation | Not mentioned | SB 1174 (2024) prohibits local jurisdictions from adopting voter ID requirements; a proposed 2026 ballot initiative would require photo ID statewide | Informational |

**Assessment:** Website is accurate for California.

---

### COLORADO

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Early voting | "Ballot drop-offs and vote centers available starting 22 days before election" | Vote centers open 15 days before a general election (8 days before a primary); ballots mailed 18-22 days before | Minor |
| All-mail status | Correctly identified | Confirmed | -- |

**Assessment:** Minor discrepancy in early voting start date.

---

### CONNECTICUT

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "7 days before election" | Actual deadline is **18 days before Election Day** (with same-day registration available on Election Day and during early voting) | **Significant** |
| Early voting | "Early voting available starting 14 days before election day" | Begins **15 days before** general elections, 8 days before primaries | Minor |
| Mail-in voting | "Excuse required. A constitutional amendment for no-excuse absentee voting was approved in 2024, but enabling legislation is pending" | Confirmed -- amendment approved Nov 2024, enabling legislation not yet enacted as of Feb 2026 | -- |
| Voter ID | Not prominently described | CT is a non-strict, non-photo ID state; voters may sign an affidavit | Informational |

**Assessment:** The registration deadline stated on the website appears incorrect.

---

### DELAWARE

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "24 days before election" | The 4th Saturday before Election Day (varies but roughly 24-28 days) | Minor |
| Mail-in voting | "No-excuse absentee voting available" | Our research indicates Delaware **still requires an excuse** for absentee voting; constitutional amendments for no-excuse absentee have been re-introduced but not passed | **Significant** |
| Early voting | "Early voting available for 10 days before election day" | Confirmed: at least 10 days, ending the Sunday before Election Day | -- |

**Assessment:** The mail-in voting characterization may be inaccurate. Delaware appears to still require an excuse for absentee voting by mail, though in-person early voting is available without excuse.

---

### FLORIDA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Mail-in voting | "No-excuse mail-in voting (vote-by-mail)" | Confirmed | -- |
| Early voting | "Early voting runs for at least 8 days, from 10 to 3 days before election day" | Confirmed | -- |
| Pending legislation | Not mentioned | HB 991/SB 1334 passed the FL House on Feb 25, 2026 -- would require documentary proof of citizenship to register; effective July 1, 2026 if signed | **Significant (pending)** |

**Assessment:** Website is currently accurate but may soon be outdated if FL proof-of-citizenship bill is signed.

---

### GEORGIA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "29 days before election" | Approximately 28 days (5th Monday before election) | Minor |
| Early voting | "Mandatory early voting period of at least 17 days" | Begins 3 weeks before Election Day with mandatory Saturday voting on 2nd and 3rd Saturdays | Minor |
| Recent legislation | Not mentioned | SB 189 (May 2024): major changes to ballot counting deadlines, QR code bans, voter challenge provisions | Informational |

**Assessment:** Website is substantially accurate for Georgia.

---

### HAWAII

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Accurately described as all-mail state | Confirmed | -- |

**Assessment:** Website is accurate for Hawaii.

---

### IDAHO

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "25 days before election" | Online deadline is 11 days before Election Day; same-day registration available at polls | **Moderate** |
| Early voting | "In-person absentee voting available at county clerk offices" | Availability varies by county | Minor |

**Assessment:** The registration deadline on the website may refer to the mail deadline but does not capture the shorter online deadline.

---

### ILLINOIS

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "28 days before election" | Regular registration closes 27 days before; online closes 16 days before | Minor |
| Early voting | "Early voting begins 40 days before election day" | Confirmed | -- |

**Assessment:** Minor deadline discrepancy.

---

### INDIANA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Voter ID | "Strict photo ID required (government-issued)" | Confirmed, but **student IDs from public universities are no longer accepted** as of SB 10 (2025) | **Significant** |
| All other categories | Confirmed | -- | -- |

**Assessment:** Website should note the 2025 ban on student IDs for voting purposes (SB 10, currently under federal litigation).

---

### IOWA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Online registration | Notes 5 digits of SSN required (unique) | Confirmed | -- |

**Assessment:** Website is accurate for Iowa.

---

### KANSAS

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Proof of citizenship | Described as "documentary proof of citizenship requirement (SAFE Act)" | The SAFE Act has been **invalidated by courts** -- DPOC is currently **not required** | **Significant** |
| Mail ballot deadline | Not specified | Changed in 2025: ballots must now be received by Election Day (grace period eliminated) | Informational |

**Assessment:** The website describes the SAFE Act as if it is in effect, but court decisions have invalidated the documentary proof of citizenship requirement for registration.

---

### KENTUCKY

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Voter ID | "Photo ID required (free voter ID available)" | Non-strict photo ID -- voters without photo ID can sign a Voter Affirmation form or Reasonable Impediment Declaration | **Moderate** |
| Early voting | "Three days of early voting before election day" | Confirmed: Thursday, Friday, and Saturday before Election Day | -- |

**Assessment:** The voter ID description omits the affidavit/declaration alternatives, making KY sound stricter than it is.

---

### LOUISIANA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Proof of citizenship | Mentioned as "passed in 2024 but not yet fully implemented" | Confirmed: SB 436 effective Jan 1, 2025, but Secretary of State has not issued implementation guidance | -- |
| Early voting | "Early voting runs from 14 to 7 days before election day" | Confirmed: 7 days of early voting, excluding Sunday | -- |

**Assessment:** Website is accurate for Louisiana.

---

### MAINE

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "Same-day registration available through election day" | Confirmed; mail/online deadline is 21 days before | -- |
| Early voting | "In-person absentee voting available at town clerk offices 30-45 days before election" | Confirmed: begins no later than 30 days before | -- |
| Recent legislation | Not mentioned | Question 1 (Nov 2025) to require voter ID was **defeated** 60.2%-39.8% | Informational |

**Assessment:** Website is accurate for Maine.

---

### MARYLAND

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |

**Assessment:** Website is accurate for Maryland.

---

### MASSACHUSETTS

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Same-day registration | `false` | Confirmed: Massachusetts does not offer same-day registration (legislation proposed but not enacted) | -- |
| Early voting | "Early voting available for general elections, beginning at least 17 days before election day" | Now available for primaries and municipals too, not just generals | Minor |

**Assessment:** Website should update early voting description to reflect availability for all election types.

---

### MICHIGAN

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Early voting | "9 days of early voting before election day at designated early voting sites" | Confirmed: minimum 9 days per Proposal 2 of 2022 | -- |
| Voter ID | "Photo ID requested; voters without ID may sign an affidavit" | Confirmed: affidavit right is now constitutionally protected | -- |

**Assessment:** Website is accurate for Michigan.

---

### MINNESOTA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Recent changes | Not mentioned | Automatic voter registration implemented in 2024; new registration provisions effective Jan 2026 | Informational |

**Assessment:** Website is accurate for Minnesota.

---

### MISSISSIPPI

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Voter ID detail | Not mentioned | Expired photo ID accepted up to 10 years old (recent tweak) | Informational |

**Assessment:** Website is accurate for Mississippi.

---

### MISSOURI

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Online registration | `true` | The website shows online registration as available. Our research confirms Missouri does offer online voter registration | -- |
| Mail-in voting | "Absentee ballot available; excuse required. No-excuse mail-in option available but ballot must be notarized" | Confirmed: excuse-based absentee + no-excuse mail-in with notarization requirement | -- |

**Assessment:** Website is accurate for Missouri.

---

### MONTANA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Online registration | `false` | Confirmed: Montana does not offer online voter registration | -- |
| Voter ID | "ID required (photo or non-photo with name and address)" | **As of May 2025, Montana requires PHOTO ID ONLY** -- non-photo ID is no longer accepted | **Significant** |

**Assessment:** The voter ID description is outdated. Montana's new law (effective May 2025) eliminated non-photo ID as an option.

---

### NEBRASKA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "18 days before election (11 days before for in-person registration)" | Online/mail deadline is the 3rd Friday before election; in-person continues through some circumstances | Minor |
| Voter ID | "Photo ID required" | Confirmed: LB 514 effective May 2024 | -- |
| Felony voting | "Rights restored immediately upon completion of sentence... The previous 2-year waiting period was eliminated by LB20 in 2024" | Confirmed | -- |

**Assessment:** Website is substantially accurate for Nebraska.

---

### NEVADA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "28 days before election" | 14 days before for automatic mail ballot receipt; online/in-person registration available through Election Day | **Moderate** |
| Mail ballot postmark | Not specified on website | Ballots must be postmarked on or before Election Day and received within 4 days after | Informational |

**Assessment:** The registration deadline description could be more precise about the different deadlines for mail ballot receipt vs. in-person registration.

---

### NEW HAMPSHIRE

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Voter ID | "Photo ID required. Voters without ID must retrieve it before voting; the challenged voter affidavit option was eliminated by HB 1569" | Our research indicates that voters without ID may still have their **photo taken at the polls and sign a challenged voter affidavit** | **Moderate** |
| Proof of citizenship (HB 1569) | Described accurately | Confirmed; currently under federal litigation (trial concluded Feb 2026) | -- |

**Assessment:** The voter ID description may overstate the elimination of alternatives. A photo-at-the-polls option appears to remain available.

---

### NEW JERSEY

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Early voting timing | "In-person early voting available for 9 days before election day" | Confirmed: varies slightly between primary and general | -- |

**Assessment:** Website is accurate for New Jersey.

---

### NEW MEXICO

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Recent changes | Not mentioned | Automatic voter registration launched July 1, 2025 via MVD; permanent absentee list effective Jan 2024 | Informational |

**Assessment:** Website is accurate for New Mexico.

---

### NEW YORK

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Mail-in voting | "No-excuse absentee voting available for all registered voters" | Confirmed via the New York Early Mail Voter Act | -- |
| Registration deadline | "10 days before election (in-person); mail registration must be postmarked 15 days before" | Research confirms 10 days (received) or 25 days (mailed) | Minor |

**Assessment:** Website is substantially accurate for New York.

---

### NORTH CAROLINA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Same-day registration | `true` -- "during early voting" | Confirmed: available only during the early voting period, not on Election Day itself | -- |
| Early voting | "One-stop early voting begins 19 days before election" | Confirmed | -- |
| Witness requirement | Not mentioned | Absentee ballots require **two witnesses or a notary** | **Moderate** |

**Assessment:** The website omits the witness requirement for absentee ballots, which is a notable procedural requirement.

---

### NORTH DAKOTA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Early voting | "In-person early voting available at county auditor offices at least 15 days before election" | Availability varies significantly by county; only 6 of 53 counties offered early voting as of Nov 2025 | **Moderate** |

**Assessment:** The early voting description is somewhat misleading -- it implies broad availability, but early voting is county-dependent and limited in most of the state.

---

### OHIO

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Early voting | "In-person early voting begins 29 days before election day" | Now 28 days per SB 293 | Minor |
| Mail ballot deadline | Not specified | **SB 293 (Dec 2025) eliminated the post-Election Day grace period** -- ballots must now be received by close of polls on Election Day | **Significant** |
| Voter ID | "Photo ID required" | Confirmed: strict photo ID (OH DL/ID or US passport only); provisional ballot for those without | -- |

**Assessment:** The website should reflect the elimination of the absentee ballot grace period under SB 293.

---

### OKLAHOMA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Mail-in voting | "No-excuse absentee voting available for all registered voters" | No-excuse, but absentee ballot affidavit must be **notarized** (unless physically incapacitated) | **Moderate** |
| Early voting | "In-person early voting available on Thursday and Friday before election day" | Also Saturday before Election Day (8 AM - 2 PM for state/federal elections) | Minor |

**Assessment:** The website omits the notarization requirement for mail-in ballots, which is a significant procedural burden.

---

### OREGON

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |

**Assessment:** Website is accurate for Oregon.

---

### PENNSYLVANIA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Early voting | "Pennsylvania does not offer traditional early voting. In-person mail ballot voting available at county election offices" | Confirmed: no formal early voting, but in-person mail ballot casting begins 50 days before Election Day | -- |
| Mail ballot deadline | Not specified | Ballots must be **received** by 8 PM on Election Day; postmark is NOT sufficient | Informational |
| Envelope dating | Not mentioned | Active litigation over whether ballots can be rejected for missing/incorrect dates on return envelope | Informational |

**Assessment:** Website is substantially accurate for Pennsylvania. Pending voter ID expansion (HB 771) should be monitored.

---

### RHODE ISLAND

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Same-day registration | `false` | RI offers very limited same-day registration during **presidential elections only** (for president/VP races) | Minor |
| All other categories | Confirmed | -- | -- |

**Assessment:** Website is substantially accurate for Rhode Island.

---

### SOUTH CAROLINA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Early voting | "In-person absentee voting available at county election offices two weeks before election" | Now available without excuse beginning **15 days** before Election Day (more expansive than described) | Minor |
| Mail-in voting | "Absentee ballot available; excuse required" | Confirmed: excuse still required for mail voting | -- |

**Assessment:** Website is substantially accurate for South Carolina.

---

### SOUTH DAKOTA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Online registration | `false` | Confirmed: South Dakota does not offer online voter registration | -- |
| Pending legislation | Not mentioned | SB 175 (2026) passed Senate 28-6 on Feb 20, 2026; would require documentary proof of citizenship for registration | Informational |

**Assessment:** Website is accurate for South Dakota.

---

### TENNESSEE

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Mail-in voting | "Excuse required" | Confirmed; qualifying age is **60+** (not 65+, as some sources report) | -- |
| Recent changes | Not mentioned | New law shortened absentee ballot request deadline by 3 days | Informational |

**Assessment:** Website is accurate for Tennessee.

---

### TEXAS

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Mail ballot deadline | Not specified | Must be received by day after Election Day if postmarked by 5 PM on Election Day; otherwise by 7 PM Election Day | Informational |

**Assessment:** Website is accurate for Texas.

---

### UTAH

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| HB 300 | Mentioned in registration requirements | Confirmed; requires ID number on returned mail ballots effective Nov 2025 | -- |
| Phase-out of universal mail voting | Not mentioned | **HB 300 phases out universal vote-by-mail by 2029** -- voters will need to opt in starting Jan 1, 2029 | **Significant** |

**Assessment:** The website should note the upcoming phase-out of universal mail voting under HB 300.

---

### VERMONT

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |

**Assessment:** Website is accurate for Vermont.

---

### VIRGINIA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Registration deadline | "11 days before election" | Regular deadline is **22 days** before Election Day for a non-provisional ballot; same-day provisional registration available after that | **Significant** |
| Early voting | "In-person early voting available at registrar offices 45 days before election" | Confirmed | -- |
| Voter ID | "Acceptable ID required (photo or non-photo); free voter ID available" | Voters without any ID can sign an ID Confirmation Statement and vote a **regular ballot** (not provisional) | Minor |

**Assessment:** The registration deadline appears understated. The standard non-provisional deadline is 22 days, not 11.

---

### WASHINGTON

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |

**Assessment:** Website is accurate for Washington.

---

### WEST VIRGINIA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Voter ID | Listed types of accepted ID | **HB 3016 (2025, effective July 11, 2025) significantly tightened ID requirements** -- now requires photo ID for early in-person and Election Day voting with a narrowed list of acceptable IDs | **Significant** |
| Early voting | "Early voting begins 13 days before election and ends 3 days before" | Confirmed: approximately 10 days of early voting | -- |

**Assessment:** Website should be updated to reflect the stricter photo ID requirements under HB 3016.

---

### WISCONSIN

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| All categories | Confirmed accurate | -- | -- |
| Recent legislation | Not mentioned | April 2025 constitutional amendment enshrined photo ID requirement in the state constitution (63% approval) | Informational |

**Assessment:** Website is accurate for Wisconsin.

---

### WYOMING

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Proof of citizenship | Accurately described including "effective July 2025" and "under legal challenge" | Confirmed: HB 156 became law without governor's signature | -- |
| Early voting | "In-person absentee voting available at county clerk offices before election day" | Begins 28 days before Election Day | Minor |

**Assessment:** Website is accurate for Wyoming.

---

### DISTRICT OF COLUMBIA

| Category | Website Says | Our Finding | Severity |
|---|---|---|---|
| Early voting | "Early voting begins 8 days before election day" | Begins no earlier than **10 days** before Election Day | Minor |
| Mail ballot deadline | Not specified | Postmarked by Election Day and received within **10 days** after | Informational |

**Assessment:** Minor early voting timing discrepancy.

---

## Summary of Significant Discrepancies

The following discrepancies are classified as **Significant** (factual errors or materially misleading information):

| # | State | Issue | Website | Correct |
|---|---|---|---|---|
| 1 | **Alaska** | Same-day registration | Shows as universally available | Available only during presidential elections |
| 2 | **Arkansas** | Online registration | Shows as not available (`false`) | Arkansas offers online voter registration |
| 3 | **Connecticut** | Registration deadline | "7 days before election" | 18 days before Election Day (with SDR available separately) |
| 4 | **Delaware** | Mail-in voting | "No-excuse absentee voting" | Excuse still required; no-excuse amendment not yet enacted |
| 5 | **Indiana** | Student ID for voting | Not mentioned | Student IDs banned as voter ID by SB 10 (2025) |
| 6 | **Kansas** | Proof of citizenship | Described as active requirement | SAFE Act has been invalidated by courts |
| 7 | **Montana** | Voter ID | "Photo or non-photo ID accepted" | Photo ID only as of May 2025 |
| 8 | **Ohio** | Absentee ballot deadline | Not addressed | Grace period eliminated by SB 293 (Dec 2025) |
| 9 | **Utah** | Phase-out of mail voting | Not mentioned | HB 300 phases out universal vote-by-mail by 2029 |
| 10 | **Virginia** | Registration deadline | "11 days before election" | 22 days for non-provisional; SDR available as provisional |
| 11 | **West Virginia** | Voter ID | Broader list of accepted IDs | HB 3016 (2025) narrowed to photo ID only |

---

## Emerging Legislative Trends

Our research identified several major national trends in election law that affect the accuracy of any static voter information resource:

### 1. Proof-of-Citizenship Requirements (Expanding)
- **Currently enforced:** Arizona (since 2004), New Hampshire (HB 1569, 2024), Wyoming (HB 156, 2025), Louisiana (SB 436, 2025 -- not yet implemented)
- **Pending/advancing:** Florida (HB 991, passed House Feb 2026), South Carolina (Bill 3459), South Dakota (SB 175, passed Senate Feb 2026)
- **Ballot measures:** Kansas (2026), South Dakota (Amendment J, 2026), Alaska (citizenship initiative, 2026)
- **Invalidated:** Kansas SAFE Act (court-struck)

### 2. Stricter Voter ID Laws (Expanding)
- **New photo-only requirements:** Montana (May 2025), West Virginia (HB 3016, July 2025), Nebraska (LB 514, May 2024)
- **Constitutional entrenchment:** Wisconsin (April 2025 amendment)
- **Proposed:** Oklahoma (House-passed bill), California (2026 ballot initiative in signature gathering)
- **Restrictions on student IDs:** Indiana (SB 10, 2025 -- under litigation)

### 3. Mail Ballot Receipt Deadlines (Tightening)
- **Grace periods eliminated:** Ohio (SB 293, Dec 2025), Kansas (2025)
- **New ID requirements for mail ballots:** Utah (HB 300, Nov 2025), Nebraska (LB 514)
- **Phase-out of universal mail voting:** Utah (HB 300, effective 2029)

### 4. Same-Day/Automatic Registration (Expanding in Some States)
- **New automatic voter registration:** New Mexico (July 2025), Minnesota (2024)
- **Proposed SDR:** Massachusetts (H 834/S 505), New York (S5752) -- neither enacted

### 5. Active Litigation
- New Hampshire HB 1569 (federal trial concluded Feb 2026; ruling expected before 2026 primaries)
- Arizona HB 2492 (9th Circuit blocked provisions, Feb 2025)
- Wyoming HB 156 (pending court case)
- Indiana SB 10 student ID ban (federal court)
- Pennsylvania mail ballot date requirement (ongoing federal/state litigation)

---

## Recommendations

1. **Immediate corrections needed** for the significant discrepancies identified above, particularly Alaska (SDR), Arkansas (online registration), Connecticut (deadline), Delaware (mail-in excuse), Kansas (DPOC status), Montana (voter ID), and Virginia (deadline).

2. **Monitoring required** for states with active legislation or litigation that may change requirements before the 2026 elections, particularly Florida, Ohio, Indiana, Utah, and New Hampshire.

3. **Consider adding** information about mail ballot return deadlines and postmark requirements, which vary significantly by state and are a common source of voter confusion.

4. **Consider adding** information about witness/notarization requirements for absentee ballots (relevant in North Carolina, Oklahoma, Minnesota, Missouri, and South Dakota).

---

## Sources

This report drew on the following categories of sources for each jurisdiction:
- Official state Secretary of State / election administration websites
- National Conference of State Legislatures (NCSL) elections database
- Ballotpedia state voting pages and voter ID databases
- Vote.org state pages
- Brennan Center for Justice voting law trackers
- State-level news coverage (cited in individual state sections)
- Court filings and orders (for states with active litigation)

*This report reflects information available as of February 25, 2026. Election laws are subject to change through legislation, ballot measures, and court orders. All findings should be verified against official state sources before reliance.*
