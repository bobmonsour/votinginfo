# Periodic Research — Requirements Update (2026-05-22)

**Mode:** Requirements update (data verification only — no news capture)
**Date:** 2026-05-22, 09:45 PT
**States reviewed:** 51 (50 states + DC)
**Proposed changes:** 7 across 6 states (AZ, CT, MD, MO, ND, NJ, NM)

## Methodology

Five parallel research agents verified each state's current values in `_data/states.json` against the source priority tiers defined in the `/voting-research` skill:

- **Tier 1:** State official election website (`officialUrl` field)
- **Tier 2:** Vote.org state page
- **Tier 3:** NCSL, Ballotpedia, recent reputable news (requires ≥2 corroborating sources)

Focus was on: status changes to bills in `pendingLegislation` or `recentLegislation`, newly enacted laws since `lastVerified`, and substantive changes to ID requirements, deadlines, early-voting/mail-in rules.

Agents were instructed to copy current values verbatim from the slim states.json file (no `changes` arrays) at `/tmp/voting-research-2026-05-22/states-slim.json` to avoid phantom discrepancies.

## States grouped by outcome

**No proposed changes (45):**
AL, AK, AR, CA, CO, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, MA, ME, MI, MN, MS, MT, NC, NE, NH, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, DC

(MA was implicitly included in Group 2's no-change list.)

**States with proposed changes (6):**
AZ (1), CT (1 primary + 3 implied), MD (1), MO (1), ND (1), NJ (1), NM (1)

---

## Proposed changes

### 1. AZ — Pending Legislation: HB 2492 status update

**Current value (verbatim from `pendingLegislation[0]`):**
```json
{
  "bill": "HB 2492 (9th Circuit ruling)",
  "year": 2025,
  "description": "9th Circuit unanimously found that Arizona's 2022 documentary proof of citizenship laws (HB 2492/HB 2243) were enacted with discriminatory intent; blocked requirements for proof of citizenship to vote for president and to vote by mail",
  "status": "Blocked by 9th Circuit (Feb 2025); may be appealed",
  "dateAdded": "2026-02-28",
  "active": true
}
```

**Proposed value:**
```json
{
  "bill": "HB 2492 (9th Circuit ruling / SCOTUS cert petition)",
  "year": 2025,
  "description": "9th Circuit unanimously found that Arizona's 2022 documentary proof of citizenship laws (HB 2492/HB 2243) were enacted with discriminatory intent; blocked requirements for proof of citizenship to vote for president and to vote by mail. 9th Circuit denied rehearing Sep 22, 2025. RNC and Arizona Senate Republicans filed a petition for certiorari at the U.S. Supreme Court on Feb 19, 2026 (RNC v. Mi Familia Vota, No. 25-1017).",
  "status": "Blocked by 9th Circuit (Feb 2025); rehearing denied Sep 2025; SCOTUS cert petition filed Feb 19, 2026 (No. 25-1017), pending",
  "dateAdded": "2026-02-28",
  "active": true
}
```

**Justification:** The 9th Circuit denied rehearing September 22, 2025, and Republican petitioners filed a SCOTUS cert petition February 19, 2026 (docket No. 25-1017). The "may be appealed" language is stale — an appeal has been filed.

**Sources:**
- Tier 3 — Democracy Docket (case file) — https://www.democracydocket.com/cases/arizona-citizenship-requirement-challenge/
- Tier 3 — SCOTUS docket (No. 25-1017) — https://www.supremecourt.gov/DocketPDF/25/25-1017/396719/20260219115214399_RNC%20v.%20MFV%20Cert%20Petition.pdf
- Tier 3 — AZ Family — https://www.azfamily.com/2026/02/19/republicans-ask-us-supreme-court-hear-arizona-proofofcitizenship-case/

---

### 2. CT — HB 5001 signed into law (Public Act 26-42)

This is one law change with multiple downstream field implications. Each will be presented individually during review.

#### 2a. Move HB 5001 from `pendingLegislation` to `recentLegislation`

**Current value (verbatim from `pendingLegislation[0]`):**
```json
{
  "bill": "HB 5001",
  "year": 2026,
  "description": "An Act Concerning Absentee Voting for All and Various Other Reforms to the Administration of Elections — eliminates the excuse requirement for absentee ballots (implementing the November 2024 constitutional amendment); also adds absentee-ballot tracking software, allows 17-year-olds who will be 18 by election day to vote absentee/early, and creates penalties for tampering with drop boxes.",
  "status": "Passed House and Senate (Senate 25-11) on May 6-7, 2026 (final day of session); awaiting Governor Lamont's signature as of 2026-05-10",
  "dateAdded": "2026-05-10",
  "active": true
}
```

**Proposed value (move to `recentLegislation`, update wording):**
```json
{
  "bill": "HB 5001 (Public Act 26-42)",
  "year": 2026,
  "description": "An Act Concerning Absentee Voting for All and Various Other Reforms to the Administration of Elections — eliminates the excuse requirement for absentee ballots (implementing the November 2024 constitutional amendment); also adds absentee-ballot tracking software, allows 17-year-olds who will be 18 by election day to vote absentee/early, makes tampering with an absentee-ballot drop box a class D felony, and elevates harassment of election workers to a felony on a second offense.",
  "status": "Signed by Gov. Lamont May 19, 2026 as Public Act 26-42; effective immediately upon signing",
  "dateAdded": "2026-05-10",
  "active": true
}
```

#### 2b. Update `mailInVoting.details` to reflect no-excuse absentee now law

**Current value (verbatim):**
> "Absentee ballot available; excuse required. A constitutional amendment for no-excuse absentee voting was approved in 2024, but enabling legislation is pending."

**Proposed value:**
> "No-excuse absentee voting available to all registered voters under Public Act 26-42 (HB 5001), signed by Gov. Lamont May 19, 2026, implementing the 2024 constitutional amendment."

#### 2c. Update `mailInVoting.noExcuseRequired` from `false` to `true`

**Current value:** `false`
**Proposed value:** `true`

#### 2d. (Optional) Update the existing 2024 constitutional amendment entry in `recentLegislation`

Currently reads:
```json
{
  "bill": "Constitutional Amendment",
  "year": 2024,
  "description": "Approved constitutional amendment for no-excuse absentee voting; enabling legislation still pending",
  "status": "Amendment approved Nov 2024; enabling legislation pending",
  "dateAdded": "2026-02-25",
  "active": true
}
```

Could be updated to note enabling legislation is now in effect (Public Act 26-42, May 19, 2026).

**Sources for CT changes (apply to 2a–2d):**
- Tier 1 — CT Governor's Office press release — https://portal.ct.gov/governor/news/press-releases/2026/05-2026/governor-lamont-signs-legislation-making-absentee-ballots-an-option
- Tier 3 — CT News Junkie — https://ctnewsjunkie.com/2026/05/20/ct-expands-absentee-voting-with-lamont-bill-signing-tuesday/
- Tier 3 — Ballotpedia News — https://news.ballotpedia.org/2026/05/19/connecticut-could-become-the-37th-state-to-allow-absentee-mail-in-voting-without-an-excuse/

---

### 3. MD — Recent Legislation: HB 115 / SB 241 (automatic voter registration restoration)

**Current value (verbatim from `recentLegislation`):**
Single entry for SB 255 (Maryland Voting Rights Act of 2026). No entry for HB 115 / SB 241.

**Proposed value:** Add a new item to `recentLegislation`:
```json
{
  "bill": "HB 115 / SB 241",
  "year": 2026,
  "description": "Requires the Department of Public Safety and Correctional Services and the State Board of Elections to automatically restore the voter registration of individuals released from state correctional facilities. DPSCS must send the State Board of Elections a weekly list of released individuals (names and new residential addresses) to enable automatic re-registration.",
  "status": "Enacted in 2026 legislative session",
  "dateAdded": "2026-05-22",
  "active": true
}
```

**Justification:** Ballotpedia's May 20, 2026 roundup of 2026 MD election bills confirms HB 115/SB 241 enactment alongside SB 255. This operationalizes Maryland's release-from-incarceration restoration policy by automating re-registration.

**Sources:**
- Tier 3 — Ballotpedia News (May 20, 2026) — https://news.ballotpedia.org/2026/05/20/maryland-lawmakers-enact-state-level-voting-rights-act-21-other-election-bills-in-2026/
- Tier 3 — The Sentencing Project (April 8, 2026) — https://www.sentencingproject.org/press-releases/maryland-passes-hb-115-to-include-voter-registration-in-the-reentry-process/
- Tier 1 — MD General Assembly bill page — https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/SB0241?ys=2026rs

---

### 4. MO — Pending Legislation: Wide-reaching elections bill (HB 174 / SB 152)

**Current value (verbatim from `pendingLegislation`):** `[]` (empty)

**Proposed value:** Add a new item to `pendingLegislation`:
```json
{
  "bill": "HB 174 / SB 152 (wide-reaching elections bill)",
  "year": 2026,
  "description": "Would restore voting rights to people on probation or parole for most felonies; only those convicted of specific crimes (murder, child endangerment, first-degree burglary) would remain barred from voting while on probation or parole. Also requires affirmative consent for recurring campaign contributions and requires write-in candidates to declare their candidacy.",
  "status": "Passed Missouri House 101-47 and Senate in May 2026; sent to Gov. Kehoe who has until July 15, 2026 to act",
  "dateAdded": "2026-05-22",
  "active": true
}
```

**Justification:** A wide-reaching elections bill passed both Missouri chambers in May 2026 and awaits Gov. Kehoe's signature. If signed, it would substantially change Missouri's `felonyVotingRules`.

**Sources:**
- Tier 3 — KCUR/NPR — https://www.kcur.org/politics-elections-and-government/2026-05-13/wide-reaching-missouri-election-bill-includes-changes-to-automatic-campaign-donations
- Tier 3 — St. Louis Public Radio — https://www.stlpr.org/government-politics-issues/2026-05-12/wide-reaching-missouri-election-bill-includes-changes-to-automatic-campaign-donations

---

### 5. NJ — Recent Legislation: A4745 / S420 (early voting expansion for May municipal elections)

**Current value (verbatim from `recentLegislation`):** `[]` (empty)

**Proposed value:** Add a new item to `recentLegislation`:
```json
{
  "bill": "A4745 / S420",
  "year": 2026,
  "description": "Permits municipalities that hold nonpartisan elections in May to extend in-person early voting to begin 8 days before Election Day (ending 2 days before), giving voters 7 days of early voting — an increase of 4 days over previous law.",
  "status": "Signed by Gov. Sherrill April 6, 2026",
  "dateAdded": "2026-05-22",
  "active": true
}
```

**Justification:** Gov. Sherrill signed A4745/S420 April 6, 2026 expanding early voting for nonpartisan May municipal elections. Does not contradict existing `earlyVoting.details` (which covers general/primary), but is a substantive enacted change missing from the dataset.

**Sources:**
- Tier 1 — New Jersey Governor's Office — https://www.nj.gov/governor/news/2026/approved/20260406a.shtml
- Tier 3 — New Jersey Monitor — https://newjerseymonitor.com/briefs/nj-law-early-in-person-voting/

---

### 6. NM — Recent Legislation: SB 264 (armed federal agents at polling places)

**Current value (verbatim from `recentLegislation`):**
```json
[
  {
    "bill": "SB 16",
    "year": 2025,
    "description": "Open primaries: independent voters can now vote in party primaries",
    "status": "Signed into law April 7, 2025; effective starting June 2, 2026 primary",
    "dateAdded": "2026-03-13",
    "active": true
  }
]
```

**Proposed value:** Add a second entry to `recentLegislation`:
```json
{
  "bill": "SB 264",
  "year": 2026,
  "description": "Prohibits bringing or ordering military troops or armed federal agents to polling places, ballot drop box locations, or within 50 feet of an official ballot box; prohibits interference with election officials, voters, challengers, or watchers; provides emergency-continuity procedures for county clerks and the Secretary of State during declared emergencies.",
  "status": "Signed by Gov. Lujan Grisham March 9, 2026",
  "dateAdded": "2026-05-22",
  "active": true
}
```

**Justification:** New Mexico became the first state to ban armed federal agents from polling places. Signed before the lastVerified date (2026-04-18) but absent from the dataset.

**Sources:**
- Tier 1 — NM Secretary of State 2026 Legislation page — https://www.sos.nm.gov/legislation-and-lobbying/signed-chaptered-bills/2026-legislation/
- Tier 3 — Ballotpedia News — https://news.ballotpedia.org/2026/03/13/new-mexico-enacts-law-prohibiting-the-deployment-of-troops-to-polling-places/
- Tier 3 — Source New Mexico — https://sourcenm.com/briefs/nm-house-passes-passes-law-shielding-elections-from-federal-interference/

---

### 7. ND — Recent Legislation: HB 1165 (absentee ballot receipt deadline)

**Current value (verbatim from `recentLegislation`):** `[]` (empty)

**Proposed value:** Add a new item:
```json
{
  "bill": "HB 1165",
  "year": 2025,
  "description": "Created a receipt deadline for absentee/mail-in ballots — ballots must now be received by the close of polls on Election Day. Previously, ballots postmarked by the day before Election Day and received within 13 days after were counted.",
  "status": "Signed into law April 28, 2025; effective August 1, 2025",
  "dateAdded": "2026-05-22",
  "active": true
}
```

**Justification:** Substantive change to ND mail-in ballot deadlines, Tier 1-confirmed by the ND Secretary of State's current absentee voting page. Pre-dates the current `lastVerified` (2026-04-18) but is absent from `recentLegislation`.

**Sources:**
- Tier 1 — ND Secretary of State (Absentee Voting) — https://www.sos.nd.gov/elections/voter/voting-north-dakota/how-do-i-vote/absentee-voting
- Tier 3 — North Dakota Monitor — https://northdakotamonitor.com/2025/04/22/lawmakers-approve-earlier-deadline-for-north-dakota-absentee-ballots-to-align-with-trump-order/
- Tier 3 — ND Legislative Assembly bill page — https://ndlegis.gov/assembly/69-2025/regular/bill-overview/bo1165.html?bill_year=2025

---

## Items investigated but not flagged

Listed for context only — no edits warranted:

- **AZ HB 2038** — couldn't confirm enactment from Tier 1/2; current "Enacted 2025" status left as-is for now.
- **FL HB 991 lawsuit** — no preliminary-injunction ruling yet as of 2026-05-22.
- **AK SB 64** — vetoed and override failed; not enacted.
- **GA 2026 session** — significant bills failed; Gov. Kemp called special session June 17, 2026.
- **CO 2026 HB 1113, HB 1225** — exist but core COVRA changes already in dataset.
- **DE no-excuse constitutional amendment** — completed first leg only; requires next session.
- **HI SB 2471** — campaign-finance, not tracked here.
- **IN SB 10** — Seventh Circuit stay (April 20, 2026) already captured.
- **ID S 1322** — already captured; July 1, 2026 effective date on track.
- **IA SF 2203** — already captured as failed.
- **KS SAVE Act** — already captured.
- **KY HB 139** — already captured; barcode-equipment provision is supplementary detail not flagged.
- **LA SB 436** — implementation still pending; lawsuit ongoing.
- **MA H.834/S.505** — already captured.
- **MD SB 255** — already captured.
- **MI** — HB 4765 and MI Voting Rights Act both pending; neither passed both chambers.
- **MN omnibus elections bill** — passed both chambers but signing not yet confirmed.
- **MS SHIELD Act** — already captured.
- **MT SB 490** — already captured.
- **NE LB 1075** — campaign-finance, not tracked here.
- **NH HB 1569** — trial complete; ruling pending (matches current data).
- **NJ John R. Lewis Voter Empowerment Act (A-1715)** — committee-cleared only; not enacted.
- **NC SB 747** — federal court upheld provision; substantive fields unchanged.
- **OH SB 293** — lawsuit filed; no ruling yet.
- **OK HB 1007** — sources conflict on enactment; substantive rule already correct in data.
- **OR SB 1509 / HB 4018** — out of scope for tracked fields.
- **SC H 3628** — still in committee.
- **SD SB 175** — already captured.
- **TN SB 2204 / HB 2185** — substance overlaps existing TN PC 473 entry.
- **TX SB 16** — stalled; no enactment.
- **UT SB 153** — minor implementation-timing wording difference; not substantive.
- **VA 2026 session (SB 438, HB 1244, HB 640, HB 967, HB 1014, SB 582)** — only one Tier 3 source (Brennan Center) confirms enactment; insufficient under "Tier 3 requires corroboration" rule. **Recommend re-verifying in 1–2 weeks** once May 22 Spanberger deadline-day actions are reflected on VA LIS.
- **WA 2026 election bills (HB 1710, HB 1750, HB 1916, SB 5892, SB 6084)** — administrative/enforcement, not voter-facing tracked fields.
- **WV SB 59** — effective Jan 1, 2027; no current voter-facing change.

---

## Application addendum

All 7 proposed changes were **approved and applied** during the one-at-a-time review on 2026-05-22:

| # | State | Field | Decision |
|---|-------|-------|----------|
| 1 | AZ | `pendingLegislation` — HB 2492 status update | Approved |
| 2a | CT | Move HB 5001 from `pendingLegislation` to `recentLegislation` (Public Act 26-42) | Approved |
| 2b | CT | `mailInVoting.details` text update | Approved |
| 2c | CT | `mailInVoting.noExcuseRequired` set to `true` | Approved |
| 2d | CT | 2024 Constitutional Amendment entry refresh | Approved |
| 3 | MD | `recentLegislation` — add HB 115 / SB 241 | Approved |
| 4 | MO | `pendingLegislation` — add HB 174 / SB 152 | Approved |
| 5 | NJ | `recentLegislation` — add A4745 / S420 | Approved |
| 6 | NM | `recentLegislation` — add SB 264 | Approved |
| 7 | ND | `recentLegislation` — add HB 1165 | Approved |

`lastVerified` updated to 2026-05-22 for: AZ, CT, MD, MO, NJ, NM, ND. Each state's `changes` array received corresponding entries describing the update and citing sources.

No rejections, no modifications.
