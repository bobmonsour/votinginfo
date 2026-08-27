# Periodic Research — Requirements Update

**Date of research:** 2026-08-27 (Pacific Time)
**Run mode:** Requirements update (data verification only; no news capture)
**Branch:** `research/2026-08-27` (based on `origin/main` @ `dc8c663`)
**States reviewed:** 51 of 51 (50 states + DC)
**Proposed changes:** 22
**States with no changes found:** 29

Research was fanned out across seven read-only agents batched alphabetically. Each agent received
its states' verbatim stored values from `_data/states.json` and was required to compare against them
directly, to prevent fabricated ("phantom") discrepancies. All structural claims — stale URLs and
robots.txt opt-outs — were independently re-verified by the orchestrator before being written here;
two agent characterizations were found to be wrong and are corrected in the relevant entries below.

---

## Summary of findings

| Category | Count |
|---|---|
| Broken/stale `officialUrl` (confirmed 404/403) | 5 |
| `officialUrl` modernization (not broken) | 1 |
| Voter-facing fact corrections | 3 |
| Legislation status changes (enacted / vetoed / enjoined / passed) | 6 |
| Legislation entries missing entirely | 6 |
| Legislation description corrections | 2 |
| **Total proposed changes** | **22** |

### Distribution by state
AR (1), AZ (1), CA (1), CO (2), DE (1), GA (1), IA (1), ID (1), KS (1), LA (3), ME (1),
NC (1), ND (1), OH (2), OK (1), PA (1), TX (1), WA (1)

### States with no changes found (29)
AL, AK, CT, FL, HI, IL, IN, KY, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, OR,
RI, SC, SD, TN, UT, VT, VA, WV, WI, WY, DC

---

## Proposed changes

### 1. Arkansas (AR) — Registration Methods → Online
- **Current value:** `"registrationMethods": {"online": true, "mail": true, "inPerson": true}`
- **Correct value:** `"online": false` — Arkansas does not offer online voter registration; a paper
  Voter Registration Application is required.
- **Source(s):** Arkansas Secretary of State (**Tier 1**); NCSL Online Voter Registration table (Tier 3, corroborating)
- **URLs:** https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information ; https://www.ncsl.org/elections-and-campaigns/online-voter-registration
- **Evidence:** AR SOS: "How Do I Register to Vote? You must fill out a paper Voter Registration
  Application." Arkansas is absent from NCSL's "Table 1: States with Online Voter Registration."
- **Note:** Highest voter-facing impact in this run — the state card currently advertises an online
  registration method that does not exist.

### 2. Colorado (CO) — Early Voting → details
- **Current value:** `"All elections conducted primarily by mail. Ballot drop-offs and vote centers available starting 22 days before election."`
- **Correct value:** Voter Service and Polling Centers (in-person early voting) open **15 days**
  before Election Day (Oct 19 for the Nov 3, 2026 general). Only ballot **drop boxes** use the
  22-day window (Oct 12), per HB26-1113.
- **Source(s):** Colorado SOS 2026 Election Calendar (**Tier 1**)
- **URLs:** https://www.sos.state.co.us/pubs/elections/calendars/2026ElectionCalendar.pdf
- **Evidence:** Calendar (updated 7/31/2026): "19-October ... to 3-November: The minimum number of
  required Voter Service and Polling Centers must be open ... (Beginning at least 15 days before...)"
  vs. "12-October: Drop boxes must begin to accept mail ballots ... (Beginning 22 days prior...)."
- **Note:** The current text conflates two distinct windows into one number.

### 3. Colorado (CO) — Pending Legislation (missing entry)
- **Current value:** `"pendingLegislation": []`
- **Correct value:** Add Initiative 362 — constitutional amendment requiring voters to write the last
  four digits of an SSN, Colorado driver's license, or REAL ID number on mail-ballot envelopes.
  Qualified for the Nov 3, 2026 ballot; signature sufficiency confirmed Aug 26, 2026.
- **Source(s):** Colorado SOS confirmation (**Tier 1**, via reporting) + Ballotpedia (Tier 3)
- **URLs:** https://coloradosun.com/2026/08/26/mail-ballot-id-colorado-initiative/ ; https://news.ballotpedia.org/2026/07/20/signatures-submitted-for-colorado-initiative-requiring-mail-in-ballots-to-contain-a-voter-identification-number/ ; https://www.sos.state.co.us/pubs/elections/Initiatives/titleBoard/filings/2025-2026/362Final.pdf
- **Evidence:** "The Colorado Secretary of State's Office said that the supporters of Initiative 362
  turned in a sufficient number of voter signatures to get the question on this year's ballot."

### 4. California (CA) — Pending Legislation (missing entry)
- **Current value:** `pendingLegislation` lists only Proposition 39 (2026 ballot initiative)
- **Correct value:** Add the California Voting Rights Act of 2026 (SB 1164 and SB 1360) — would
  codify voter-suppression protections, preclearance for jurisdictions with a discrimination history,
  and language-access guarantees. Passed the Senate May 2026; cleared Assembly Appropriations
  Aug 13, 2026; pending final floor votes before the Aug 31 adjournment.
- **Source(s):** envirovoters.org + California Democracy Partnership/LWV (Tier 3, two corroborating)
- **URLs:** https://envirovoters.org/california-voting-rights-act-2026/ ; https://www.cademocracypartnership.org/news/finalsb1164
- **Evidence:** "Both bills passed the State Senate in May 2026 and the Assembly Appropriations
  committee on August 13, 2026. The Legislature adjourns August 31..."
- **Note:** Time-sensitive — status will change at or before the Aug 31 adjournment.

### 5. Arizona (AZ) — Pending Legislation → Proposition 144 status
- **Current value:** status ends "...a Maricopa County Superior Court judge rejected a challenge and
  allowed the bundled measure to proceed (late July 2026); an appeal is pending"
- **Correct value:** The appeal is resolved — the Arizona Supreme Court rejected the challenge on
  Aug 19, 2026, upholding Secretary of State Fontes' ballot description and clearing the way for printing.
- **Source(s):** KJZZ + Arizona Mirror (Tier 3, two corroborating; AZ Tier 1 inaccessible — see gaps)
- **URLs:** https://www.kjzz.org/elections/2026-08-19/arizona-supreme-court-upholds-fontes-prop-144-election-reform-ballot-language ; https://azmirror.com/2026/08/17/gop-appeals-election-measure-ballot-description-to-arizona-supreme-court/
- **Evidence:** "The Arizona Supreme Court rejected a lawsuit against Secretary of State Adrian
  Fontes... the three voters challenging the description didn't have standing."

### 6. Delaware (DE) — HB 444 (Delaware John Lewis Voting Rights Act): pending → enacted
- **Current value:** "Passed both chambers on the final night of the session, which adjourned
  June 30, 2026; awaiting the governor's signature as of July 31, 2026 (a signing was reported as
  expected around July 18, 2026 but could not be confirmed)"
- **Correct value:** Signed by Gov. Matt Meyer on **Aug 6, 2026**. Establishes a state-level Voting
  Rights Act prohibiting voter discrimination, suppression and vote dilution, and requires the
  Department of Elections to provide language assistance. Effective July 1, 2027.
  **Move from `pendingLegislation` to `recentLegislation`.**
- **Source(s):** State of Delaware official news release (**Tier 1**) + WHYY, Delaware Public Media,
  Spotlight Delaware, WDEL (Tier 3, corroborated)
- **URLs:** https://news.delaware.gov/2026/08/06/governor-meyer-signs-john-lewis-voting-rights-act-strengthening-voting-rights-protections-in-delaware/ ; https://whyy.org/articles/delaware-voting-rights-act/ ; https://www.delawarepublic.org/politics-government/2026-08-07/delaware-passes-state-level-voting-rights-protections
- **Evidence:** "Governor Matt Meyer signed House Bill 444, the Delaware John Lewis Voting Rights
  Act... House Bill 444 takes effect July 1, 2027."
- **Note:** Directly resolves the open uncertainty recorded in the current value.

### 7. Idaho (ID) — Official URL (confirmed broken)
- **Current value:** `"officialUrl": "https://sos.idaho.gov/elections/"`
- **Correct value:** `https://voteidaho.gov/`
- **Source(s):** Idaho Secretary of State (**Tier 1**)
- **URLs:** https://sos.idaho.gov/elections/ (404) ; https://voteidaho.gov/ (200)
- **Evidence:** Orchestrator-verified: stored URL returns HTTP 404 with no redirect; voteidaho.gov
  returns 200 with title "Home Page | VoteIdaho.Gov" and Secretary of State branding.
- **Note:** The originating agent's evidence line mistakenly cited `sos.ga.gov` for this Idaho claim.
  The conclusion was re-verified independently and holds; only the citation string was garbled.

### 8. Georgia (GA) — Recent Legislation → SB 3EX description
- **Current value:** "...mandates hand recounts of top statewide races decided within a 0.5 percent margin."
- **Correct value:** The mandate applies to the **top two** statewide races on the ballot decided
  within a 0.5% margin, not "top statewide races" generally.
- **Source(s):** Ballotpedia + Rough Draft Atlanta + The Current GA + CNHI local papers (Tier 3, 4+ corroborating)
- **URLs:** https://news.ballotpedia.org/2026/06/29/georgia-enacts-legislation-extending-voting-machine-deadline-establishing-automatic-hand-recounts/ ; https://roughdraftatlanta.com/2026/06/28/georgia-qr-code-law/ ; https://thecurrentga.org/2026/06/27/kemp-signs-elections-bill-locking-in-qr-code-voting-machines-for-november/
- **Evidence:** "...mandates hand recounts of the top two statewide races on the ballot when the
  results are within a 0.5% margin."

### 9. Iowa (IA) — Official URL (confirmed broken)
- **Current value:** `"officialUrl": "https://sos.iowa.gov/elections/"`
- **Correct value:** `https://sos.iowa.gov/elections-voting`
- **Source(s):** Iowa Secretary of State (**Tier 1**, via indexed URLs — host not crawled, see gaps)
- **URLs:** https://sos.iowa.gov/elections-voting
- **Evidence:** Orchestrator-verified: stored URL returns HTTP 404; the new path returns 200.

### 10. Kansas (KS) — Official URL (confirmed broken, soft 404)
- **Current value:** `"officialUrl": "https://sos.ks.gov/elections/"`
- **Correct value:** `https://sos.ks.gov/elections/elections.html`
- **Source(s):** Kansas Secretary of State (**Tier 1**)
- **URLs:** https://sos.ks.gov/elections/elections.html
- **Evidence:** Orchestrator-verified: stored URL returns HTTP 200 but the final resolved URL is
  `sos.ks.gov/messages/page404.html` — a soft 404. The `elections.html` path returns a working page.
- **Note:** A plain status-code check would miss this; it fails only on the resolved-URL check.

### 11. Louisiana (LA) — Official URL (confirmed broken)
- **Current value:** `"officialUrl": "https://www.sos.la.gov/ElectionsAndVoting/"`
- **Correct value:** `https://www.sos.la.gov/elections-voting`
- **Source(s):** Louisiana Secretary of State (**Tier 1**)
- **URLs:** https://www.sos.la.gov/elections-voting
- **Evidence:** Orchestrator-verified: stored URL returns HTTP 404; the new path returns 200 with
  full "GeauxVote"/elections content.

### 12. Maine (ME) — Early Voting → details
- **Current value:** `"In-person absentee voting available at town clerk offices 30–45 days before election."`
- **Correct value:** In-person absentee voting is available starting **30 days** before Election Day
  (not a 30–45 day range) and runs through the Thursday before Election Day, absent special circumstances.
- **Source(s):** Maine Secretary of State (**Tier 1**)
- **URLs:** https://www.maine.gov/sos/elections-voting/absentee-guide
- **Evidence:** "Absentee ballots are available at the municipal clerk's office 30 days before the
  election... The deadline for absentee voting in the presence of the clerk, unless special
  circumstances exist, is the Thursday before the election."

### 13. Louisiana (LA) — Recent Legislation (missing entry: voter ID overhaul)
- **Current value:** `recentLegislation` contains only the 2024 SB 436 citizenship-documentation entry
- **Correct value:** Add SB 319 (Act 5 of 2026), signed by Gov. Landry. Eliminates the voter-ID
  affidavit-attestation option; voters without photo ID cast a "conditional" ballot and must appear
  in person at the registrar's office within 48 hours with an approved photo ID or two secondary
  documents for the ballot to count. Effective July 1, 2027.
- **Source(s):** Ballotpedia + WBRZ + WWLTV (Tier 3, 3+ corroborating)
- **URLs:** https://news.ballotpedia.org/2026/07/14/louisiana-enacts-20-election-bills-during-2026-session-including-new-congressional-maps-and-voter-id-changes/ ; https://www.wbrz.com/news/gov-jeff-landry-signs-several-bills-into-law-designed-to-secure-louisiana-s-election-process/ ; https://www.wwltv.com/article/news/local/local-politics/louisiana-voters-could-face-stricter-id-requirements-if-gov-landry-signs-new-bill/289-808239d5-b718-4b77-8773-48fb369a6bf9
- **Evidence:** "Under Senate Bill 319, voters without a photo ID can no longer just sign an affidavit
  at their polling place. Instead, they will cast a 'conditional' paper ballot... appear in person at
  the registrar of voters office within 48 hours."

### 14. Louisiana (LA) — Recent Legislation (missing entry: SAVE database checks)
- **Current value:** Not present in `recentLegislation`
- **Correct value:** Add HB 691 (Act 6 of 2026) — requires the Secretary of State to annually check
  every registered voter against the federal SAVE (Systematic Alien Verification for Entitlements)
  database and refer suspected noncitizens to parish registrars for challenge.
- **Source(s):** Ballotpedia + LegiScan + The Lens (Tier 3, corroborated)
- **URLs:** https://news.ballotpedia.org/2026/07/14/louisiana-enacts-20-election-bills-during-2026-session-including-new-congressional-maps-and-voter-id-changes/ ; https://legiscan.com/LA/bill/HB691/2026 ; https://thelensnola.org/2026/04/03/louisiana-voter-data-bill-hb691-privacy-homeland-security/
- **Evidence:** "HB 691... requires the secretary of state to annually conduct a check of every
  registrant's name in the state voter registration computer system against the... (SAVE) program."

### 15. North Dakota (ND) — Official URL (modernization, NOT broken)
- **Current value:** `"officialUrl": "https://vip.sos.nd.gov/"`
- **Correct value (proposed):** `https://www.sos.nd.gov/elections`
- **Source(s):** North Dakota Secretary of State (**Tier 1**)
- **URLs:** https://vote.nd.gov (301 → sos.nd.gov/elections) ; https://www.sos.nd.gov/elections (200)
- **Evidence:** Orchestrator-verified: `vote.nd.gov` 301-redirects to `www.sos.nd.gov/elections`,
  indicating the canonical elections hub has moved.
- **⚠ Correction to the originating agent's claim:** The agent reported that vip.sos.nd.gov "states
  the site is no longer active," implying a dead link. **This is not accurate.** The stored URL
  returns HTTP 200, serves a live portal, and carries the title "Vote.nd.gov"; the "no longer active"
  text could not be reproduced. This is therefore an optional modernization, not a breakage fix, and
  is materially lower priority than items 7, 9, 10, 11 and 21.

### 16. North Carolina (NC) — Pending Legislation → HB 958 status
- **Current value:** `"status": "Moving through the 2025-2026 legislature; not enacted as of July 2026"`
- **Correct value:** Passed the legislature (Senate 28–13 on July 28, 2026) and was **vetoed by
  Gov. Josh Stein on Aug 17, 2026**. Legislative leaders have said they will not attempt an override
  until after the November 2026 midterms. Still not enacted, but the status has materially changed.
- **Source(s):** NC General Assembly official bill record (**Tier 1**, government primary) +
  Ballotpedia (Tier 3) + Carolina Public Press (Tier 3, corroborated)
- **URLs:** https://www.ncleg.gov/BillLookup/2025/H958 ; https://news.ballotpedia.org/2026/08/19/north-carolina-gov-stein-vetoes-election-omnibus-bill/ ; https://carolinapublicpress.org/76005/nc-house-advances-massive-elections-bill-with-major-changes/
- **Evidence:** ncleg.gov: "Governor's Veto of House Bill 958 ... Vetoed 08/17/2026."

### 17. Ohio (OH) — ID Requirements → To Register (BMV proof of citizenship)
- **Current value:** "BMV registrations require documentary proof of citizenship (birth certificate,
  passport, or naturalization document); ... BMV requirement is under legal challenge."
- **Correct value:** On Aug 25–26, 2026, U.S. District Judge Solomon Oliver Jr. granted a
  **preliminary injunction blocking enforcement** of the BMV documentary-proof-of-citizenship
  requirement, finding it preempted by the NVRA. Ohio has said it will appeal, but the requirement is
  currently **enjoined**, not merely "under challenge" — BMV applicants should not presently be
  required to produce documentary proof.
- **Source(s):** Elias Law Group + The Washington Post + Ohio Statehouse News Bureau
  (Tier 3, 3+ corroborating; OH Tier 1 inaccessible — see gaps)
- **URLs:** https://elias.law/press-release/federal-court-blocks-ohios-documentary-proof-of-citizenship-requirement-for-voter-registration-at-bmv/ ; https://www.washingtonpost.com/politics/2026/08/25/court-halts-ohio-proof-of-citizenship-requirement-motor-vehicle-offices/ ; https://www.statenews.org/government-politics/2026-08-26/judge-puts-proof-of-citizenship-requirement-for-voters-registering-at-ohio-bmvs-on-hold
- **Evidence:** "A federal court blocked Ohio from enforcing a documentary proof-of-citizenship
  requirement... ruling that the requirement is preempted by the National Voter Registration Act."
- **Note:** Highest-urgency legal change in this run — the site currently tells Ohio voters they must
  produce documents that a federal court has enjoined. Two days old; monitor for a stay on appeal.

### 18. Ohio (OH) — Recent Legislation → HB 54 status
- **Current value:** `"status": "Signed by Gov. DeWine April 1, 2025; effective June 2025; under federal challenge in Red Wine & Blue and Ohio Alliance for Retired Americans v. LaRose, filed August 2025, with no final ruling as of July 2026"`
- **Correct value:** Update to record that on Aug 25–26, 2026 the court issued a preliminary
  injunction blocking enforcement of the BMV proof-of-citizenship provision, and that Secretary of
  State LaRose said he would immediately appeal.
- **Source(s):** WOSU + Elias Law Group (Tier 3, corroborated — same event as item 17)
- **URLs:** https://www.wosu.org/politics-government/2026-08-26/federal-judge-blocks-enforcement-of-ohio-proof-of-citizenship-requirement-for-voter-registration ; https://elias.law/press-release/federal-court-blocks-ohios-documentary-proof-of-citizenship-requirement-for-voter-registration-at-bmv/
- **Evidence:** "Secretary of State Frank LaRose, a Republican, said he would immediately appeal."

### 19. Oklahoma (OK) — State Question 846: pending → passed
- **Current value:** `"status": "Referred by the Legislature in the 2026 session; on the statewide ballot August 25, 2026"` (in `pendingLegislation`, `active: true`)
- **Correct value:** SQ 846 was voted on Aug 25, 2026 and **passed with approximately 56.1%**, adding
  a voter-ID requirement to the Oklahoma Constitution and barring future legislatures from repealing
  it. No longer pending — **move to `recentLegislation`.**
- **Source(s):** NonDoc + News9 + Tulsa Flyer (Tier 3, 3 corroborating)
- **URLs:** https://nondoc.com/2026/08/25/state-questions-voter-id-amendment-approved-property-tax-reform-rejected/ ; https://www.news9.com/oklahoma-elections/oklahoma-voter-id-state-question-846-results ; https://tulsaflyer.org/2026/08/25/la-semana/post/voter-id-requirement-state-question-passes/
- **Evidence:** "SQ 846 passed, with over 55 percent of the vote... 56.1% of the vote as of 8:30 p.m."
- **⚠ Caveat:** The 56.1% figure is an **election-night partial count** ("as of 8:30 p.m.") from two
  days ago, and certification has not been confirmed. The outcome (passage) is well corroborated;
  the precise percentage should be phrased as approximate, or omitted pending certification.

### 20. Pennsylvania (PA) — Pending Legislation (missing entry)
- **Current value:** `"pendingLegislation": []`
- **Correct value:** Add HB 1396 (sponsored by Speaker Joanna McClinton) — omnibus election bill that
  would create true in-person early voting, mandate at least two mail-ballot drop boxes per county,
  and require electronic pollbooks by 2027. Passed the PA House; a related standalone pre-canvassing
  bill also passed the House. Both remain stalled in the Republican-controlled Senate; not enacted.
- **Source(s):** Spotlight PA + Votebeat (Tier 3, two corroborating — meets the two-source rule)
- **URLs:** https://www.spotlightpa.org/news/2026/07/election-law-changes-democratic-trifecta-2026-midterm-shapiro-elections/ ; https://www.votebeat.org/pennsylvania/2026/07/08/election-law-changes-democratic-trifecta-2026-midterm-shapiro/
- **Evidence:** "the bill hasn't come up for a vote in the Republican-controlled Senate because GOP
  leaders have insisted that any election legislation include expanded voter ID requirements."

### 21. Texas (TX) — Official URL (confirmed broken)
- **Current value:** `"officialUrl": "https://www.sos.texas.gov/elections/"`
- **Correct value:** `https://www.sos.texas.gov/elections/index.shtml` (direct equivalent) or
  `https://www.votetexas.gov/` (the state's voter-facing portal)
- **Source(s):** Texas Secretary of State (**Tier 1**)
- **URLs:** https://www.sos.texas.gov/elections/index.shtml (200) ; https://www.votetexas.gov/ (200)
- **Evidence:** Orchestrator-verified: stored URL returns HTTP 403 carrying the site's own error body
  — "Sorry, but the requested file was not found ... The Elections Division has recently revised and
  reorganized many of its online forms."
- **Note:** Requires a choice between the two valid replacements. `votetexas.gov` is the more
  voter-appropriate destination and matches the voter-facing intent of the other 50 entries.

### 22. Washington (WA) — Recent Legislation → SB 6035 description
- **Current value:** "Requires county auditors to consult regularly with federally recognized tribes on election access."
- **Correct value:** SB 6035 — "Ensuring access to voting services for military, overseas, Native
  American, and disabled voters" — authorizes the Secretary of State to study and implement
  electronic ballot-return options and other access measures for "covered voters" (service members,
  overseas voters, disabled voters, and tribal members residing on reservations). It is **not** a
  general tribal-consultation requirement; that provision belongs to HB 1710 / other WVRA measures.
- **Source(s):** Washington State Legislature bill page (official .gov primary) + Ballotpedia (Tier 3)
- **URLs:** https://app.leg.wa.gov/billsummary?BillNumber=6035&Year=2025&Initiative=false ; https://news.ballotpedia.org/2026/04/20/washington-legislators-update-state-voting-rights-act-enact-eight-other-election-related-bills/
- **Evidence:** Official bill title/summary as above; signed Mar 25, 2026, Chapter 214, effective
  Jun 11, 2026.
- **Note:** PROVISIONAL — WA's Tier 1 site could not be consulted (robots.txt opt-out).

---

## Verification gaps

Findings for the states below are **provisional**: their Tier 1 or Tier 2 source could not be read
directly. This is not a clean bill of health.

### robots.txt opt-outs — respected, not worked around

| State | Host | Directive | Status |
|---|---|---|---|
| IL | elections.il.gov | `User-agent: ClaudeBot` / `Disallow: /` | Known; re-confirmed |
| WA | sos.wa.gov | `User-agent: ClaudeBot` / `Disallow: /` | Known; re-confirmed |
| **IA** | **sos.iowa.gov** | `User-agent: ClaudeBot` / `Disallow: /` | **NEW this run** |
| **MA** | **www.sec.state.ma.us** | `User-agent: *` / `Disallow: /elections`, `/ele` | **NEW this run — different category** |

**Correction to the originating agent's claim on MA:** the agent reported that `sec.state.ma.us`
"explicitly disallows ClaudeBot." It does not. The file contains exactly one user-agent group,
`User-agent: *`, across 76 lines, and names no bot anywhere (no ClaudeBot, GPTBot, CCBot, or
anthropic). The practical effect is the same — `/elections` is disallowed to every crawler, so MA
must be treated as Tier 3-only — but the reason is a blanket path disallow, not a Claude-specific
opt-out, and future runs should record it as such. Note also that the bare `sec.state.ma.us` host
(no `www`) times out entirely; only `www.sec.state.ma.us` resolves.

Both IA and MA should be added to the opt-out list in `.claude/skills/voting-research/SKILL.md` and
`CLAUDE.md`, in their correct respective categories. That is a documentation change, proposed
separately from the `states.json` changes above.

### Tier 1 unreachable — generic bot mitigation (NOT publisher opt-outs)

Each of these was checked against `robots.txt` before escalating, per the skill's ladder. None names
ClaudeBot; all are WAF/CDN bot-management blocks, so the ladder correctly descended.

| State | Host | Block type | Ladder rung used |
|---|---|---|---|
| AZ | azsos.gov | Cloudflare JS challenge (robots.txt also challenged) | Tier 3, two-source |
| GA | sos.ga.gov | 403 on WebFetch + honest UA; Wayback only 2013 | Tier 2 + Tier 3 |
| MI | mvic.sos.state.mi.us | Cloudflare; alternate michigan.gov/sos also 403 (Akamai) | Tier 2 + Tier 3 |
| MT | sosmt.gov | Cloudflare challenge; Wayback 2026-08-24 nav-shell only | Tier 2 + Tier 3 |
| NH | sos.nh.gov | Akamai WAF, 403 incl. on robots.txt itself | Tier 3 |
| NV | nvsos.gov | Incapsula | Tier 2 (complete direct read) |
| NY | elections.ny.gov | Cloudflare JS challenge | Wayback 2026-08-13T02:33:21Z + search |
| OH | ohiosos.gov, vote.ohio.gov | Cloudflare interstitial/403; no Wayback | Tier 3, 3+ sources |
| TN | sos.tn.gov | CloudFront 403 (robots.txt also 403) | Tier 3 only |
| TX | sos.texas.gov/elections/ | 403 — the stale URL itself (item 21) | Alternate page, same host |
| WI | elections.wi.gov, myvote.wi.gov | Cloudflare "Just a moment..."; Wayback unusable | Tier 2 + Tier 3 |

### Tier 1 reachable but thin

- **NJ** — nj.gov/state/elections/ returned an empty/JS-rendered body; relied on nj.gov Governor's
  Office press releases plus Ballotpedia/ACLU-NJ.
- **NM** — sos.nm.gov loaded but navigational only.
- **MS, MO, NE** — Tier 1 returned 200 but as navigation hubs without specific rule text; deeper
  subpages not located within the research window.
- **SD** — sdsos.gov subpages intermittently 404'd by path; the 46-day early-voting window and
  registration deadlines rest on Tier 3.
- **MN** — stored Tier 1 `sos.state.mn.us` 302-redirects to `sos.mn.gov`. A redirect, not a breakage,
  so no change is proposed; optional modernization only.
- **RI** — stored `vote.ri.gov` redirects to `vote.sos.ri.gov`, which 403'd; substituted the RI Board
  of Elections (`elections.ri.gov`), a valid alternate official host. Tier 1 via rung 4, not a gap.

### Tier 2 (Vote.org) availability

Vote.org was **entirely unavailable** to the AL–CT batch: WebFetch returned 403 for all seven states,
and honest-UA curl returned 200 with an effectively empty JS-rendered body. Those seven states have
no Tier 2 corroboration this run. Vote.org was read successfully by other batches, so the failure was
per-session rather than a site-wide block.

### Ballotpedia availability

Ballotpedia direct fetches were intermittently blocked by an AWS WAF JavaScript challenge — total for
the OK–TN batch, partial for AL–CT, and successful for others. Where blocked, other Tier 3 outlets
were substituted to satisfy the two-source rule.

### Awareness note — Kansas (no change proposed)

The live Kansas SOS voter-information page still states that "Beginning in 2026... Kansas elections
will no longer include a 3-day grace period" for mail ballots. That content appears stale: it has not
been updated since the July 16, 2026 Douglas County injunction blocking SB 4. Three Tier 3 sources
(Ballotpedia News, KCTV5, KWCH) confirm the injunction remains in force as of Aug 27, 2026, so the
stored `recentLegislation` narrative on SB 4 is judged accurate and no change is proposed. Flagged
because a future run reading Tier 1 alone could "correct" the site into being wrong.

---

## Methodology note

All 22 proposed changes above are candidates only. Per the skill's one-at-a-time review protocol,
none has been written to `_data/states.json`. Each will be presented individually for approval,
rejection, or modification, and applied only on an explicit decision. An addendum recording the
disposition of every item will be appended to this report once the review is complete.

Research agents were run read-only and had no ability to write to the data file.

---

# Addendum — Disposition of proposed changes

Completed 2026-08-27. Every item below was presented individually and applied only on an explicit
decision, per the one-at-a-time review protocol. **23 items reviewed: 22 approved, 1 rejected.**

The count rose from the 22 originally proposed to 23 because a **new discrepancy was found during
verification** (Georgia's SB 3EX signing date) that none of the research agents reported.

## Approved and applied (22)

| # | State | Field | Outcome |
|---|---|---|---|
| 1 | Arizona | Pending Legislation — Prop 144 | Status updated: AZ Supreme Court rejected the appeal Aug 19, 2026 |
| 2 | Arkansas | Registration Methods — Online | `true` → `false`; supersedes the unsourced 2026-02-25 entry |
| 3 | California | Pending Legislation | Added SB 1164 / SB 1360 CVRA expansion |
| 4 | Colorado | Early Voting — details | Split conflated 22-day figure into drop boxes (22d) vs. VSPCs (15d) |
| 5 | Colorado | Pending Legislation | Added Initiative 362 (mail-ballot ID) |
| 6 | Delaware | HB 444 | Moved pending → recent; signed Aug 6, 2026 |
| 7 | Georgia | Recent Legislation — SB 3EX description | Narrowed to "top two statewide executive races" |
| 8 | Georgia | Recent Legislation — SB 3EX status | Signing date corrected Jun 26 → **Jun 25, 2026** |
| 9 | Idaho | Official URL | → `https://voteidaho.gov/` (old URL 404) |
| 10 | Iowa | Official URL | → `https://sos.iowa.gov/elections-voting` (old URL 404) |
| 11 | Kansas | Official URL | → `https://sos.ks.gov/elections/elections.html` (old URL soft-404) |
| 12 | Louisiana | Official URL | → `https://www.sos.la.gov/elections-voting` (old URL 404) |
| 13 | Louisiana | Recent Legislation | Added SB 319 (Act 5 of 2026), voter-ID affidavit repeal |
| 14 | Louisiana | Recent Legislation | Added HB 691 (Act 6 of 2026), annual SAVE check |
| 15 | Maine | Early Voting — details | "30–45 days" → starts 30 days out, through the Thursday before |
| 16 | North Carolina | Pending Legislation — HB 958 | Status updated: vetoed by Gov. Stein Aug 17, 2026 |
| 18 | Ohio | ID Requirements — toRegister | "under legal challenge" → preliminarily enjoined Aug 25, 2026 |
| 19 | Ohio | Recent Legislation — HB 54 status | Records the preliminary injunction and stated appeal |
| 20 | Oklahoma | State Question 846 | Moved pending → recent; approved by voters Aug 25, 2026 |
| 21 | Pennsylvania | Pending Legislation | Added HB 1396 (year corrected to 2025) |
| 22 | Texas | Official URL | → `https://www.votetexas.gov/` (old URL 403) |
| 23 | Washington | Recent Legislation — SB 6035 | Description and status corrected |

## Rejected (1)

| # | State | Field | Reason |
|---|---|---|---|
| 17 | North Dakota | Official URL | **Agent's premise did not hold.** `vip.sos.nd.gov` returns HTTP 200 and serves a live portal titled "Vote.nd.gov"; the claimed "no longer active" text could not be reproduced. Reclassified from a breakage fix to an optional modernization and declined, consistent with leaving Maine's and Minnesota's redirecting URLs alone. |

## Changes made to the agents' proposals before applying

Several items were **modified** rather than applied as proposed. In every case the agent's
conclusion survived but its sourcing or precision did not.

- **#3 California** — agent cited two advocacy sites (envirovoters.org, cademocracypartnership.org)
  and reported the bills as having "cleared Assembly Appropriations Aug 13, pending final votes."
  Replaced with the Legislature's own record: SB 1164 **passed the Assembly Aug 25, 2026** and awaits
  Senate concurrence. Sourcing upgraded Tier 3 → **Tier 1**; status was two days stale.
- **#5 Colorado** — agent described the ID requirement as "SSN, CO driver's license, or REAL ID."
  The measure's actual constitutional text requires a **REAL ID-compliant** number specifically.
- **#8 Georgia** — **new finding, not in any agent report.** Discovered while verifying #7.
- **#13/#14 Louisiana** — agent had Tier 3 only. The Louisiana Legislature confirmed **Act 5** and
  **Act 6**, and supplied HB 691's effective date (**Aug 1, 2026**), which the agent omitted entirely
  and which means that law is already operative.
- **#20 Oklahoma** — agent proposed recording "approximately 56.1%." Three sources gave three
  different figures (53.1 / 55.6 / 56.1), all election-night partial counts, and the Oklahoma State
  Election Board results page returned HTTP 403. **Percentage omitted**; passage recorded on the AP
  projection.
- **#21 Pennsylvania** — agent implied 2026 activity. Legislature record shows the House passed it
  **102-101 on May 13, 2025** and it has sat in Senate State Government since **May 22, 2025**.
  Bill year corrected to 2025.
- **#23 Washington** — agent had Tier 3. `sos.wa.gov` is a ClaudeBot opt-out and was **not** accessed,
  but `app.leg.wa.gov` has no robots.txt at all, so the Legislature's record was legitimately
  available. Sourcing upgraded Tier 3 → **Tier 1**; status sharpened to Chapter 214, effective
  Jun 11, 2026.

## Corrections to the research agents' reports

Two agent claims were **factually wrong** and are corrected in the body of this report:

1. **North Dakota** — claimed the stored URL was effectively dead. It returns HTTP 200. (→ rejected, #17)
2. **Massachusetts** — claimed `sec.state.ma.us` "explicitly disallows ClaudeBot." It does **not**.
   The file has exactly one group, `User-agent: *`, over 76 lines, naming no bot anywhere. The
   practical effect is the same (`Disallow: /elections` binds every crawler, so MA remains
   Tier 3-only) but the category is different and the docs should say so.

A third agent output had a **garbled citation** — the Idaho URL finding cited `sos.ga.gov` as its
evidence. The conclusion was re-verified independently and held (#9); only the citation string was wrong.

## robots.txt opt-out list — proposed doc updates (not applied)

These are documentation changes to `.claude/skills/voting-research/SKILL.md` and `CLAUDE.md`, outside
the scope of the `states.json` review, and were **not** applied:

- **Add IA** (`sos.iowa.gov`) — verified `User-agent: ClaudeBot` / `Disallow: /`. A genuine new opt-out
  alongside IL and WA.
- **Add MA** (`www.sec.state.ma.us`) — in a **separate category**: blanket `User-agent: *` with
  `Disallow: /elections`, not a Claude-specific opt-out.

## Optional URL modernizations — identified, not proposed

Three stored `officialUrl` values return HTTP 200 but redirect. None is broken, so no change was
proposed, and ND was explicitly declined on this basis. Listed for a future decision:

| State | Stored URL | Redirects to |
|---|---|---|
| ME | `maine.gov/sos/cec/elec/` | `maine.gov/sos/elections-voting` |
| MN | `sos.state.mn.us/elections-voting/` | `sos.mn.gov/elections-voting/` |
| ND | `vip.sos.nd.gov/` | live portal; `vote.nd.gov` → `sos.nd.gov/elections` |

## Data integrity

- `_data/states.json` parses cleanly; **51 entries** intact.
- **17 states** had `lastVerified` advanced to 2026-08-27.
- **22 change-log entries** added. (The file also contains 4 "Recent News" entries dated 2026-08-27
  from that morning's scheduled news run — those pre-existed and were not touched.)
- All edits were made with scoped `Edit` calls. The `\uXXXX` escape count went **16 → 15**: the single
  reduction is the Maine en dash, deliberately retired by change #15. No re-serialization occurred.
