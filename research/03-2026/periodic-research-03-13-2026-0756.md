# Periodic Research Report — Requirements Update
**Date:** March 13, 2026
**Mode:** Requirements update (no news capture)
**States reviewed:** 51 (50 states + DC)

## Summary

All 51 entries were verified against authoritative sources (state official websites, Vote.org, NCSL, Ballotpedia). **1 core data discrepancy** was found. Additionally, **3 legislation status updates** and **6 new legislation items** were identified.

---

## Core Data Discrepancy

### 1. Missouri — Registration Methods Text Contradiction
- **Field:** `idRequirements.toRegister`
- **Current value:** Text says "No online voter registration available (paper form only)" while `registrationMethods.online` is set to `true`
- **Correct value:** Missouri DOES offer online voter registration via the MO Votes Portal. The boolean `true` is correct; the text description is wrong.
- **Sources:**
  - Missouri SOS (Tier 1): https://www.sos.mo.gov/elections/govotemissouri/register
  - MO Votes Portal: https://movotesportal.sos.mo.gov/movotes/voter/login.aspx
  - NCSL (Tier 3): https://www.ncsl.org/elections-and-campaigns/online-voter-registration

---

## Legislation Status Updates

### 2. South Dakota — SB 175 Status Update
- **Field:** `pendingLegislation` (SB 175)
- **Current status:** "Passed Senate 28-6 on Feb 20, 2026; pending House action"
- **Correct status:** Passed House 64-3 on March 4, 2026; enrolled and delivered to Governor on March 10, 2026
- **Sources:**
  - LegiScan: https://legiscan.com/SD/bill/SB175/2026
  - South Dakota Searchlight: https://southdakotasearchlight.com/2026/03/08/new-south-dakota-law-allows-voters-to-challenge-other-voters-citizenship/

### 3. Florida — HB 991 Status Update
- **Field:** `pendingLegislation` (HB 991)
- **Current status:** "Passed FL House Feb 25, 2026; pending Senate action"
- **Correct status:** Passed both chambers (House 77-28, Senate 27-12) as of March 13, 2026; awaiting Governor's signature. Also removes student IDs and retirement home IDs as acceptable voter ID. Effective Jan 1, 2027 if signed.
- **Sources:**
  - WLRN (Tier 3): https://www.wlrn.org/government-politics/2026-03-13/florida-legislature-passes-bill-requiring-proof-of-citizenship-at-the-ballot-box
  - Florida Senate (Tier 1): https://www.flsenate.gov/Session/Bill/2026/991

### 4. New Hampshire — SB 287 and SB 218 Status Update
- **Field:** `recentLegislation` (SB 287, SB 218)
- **Current SB 287 status:** "Signed Aug 1, 2025; effective Sept 30, 2025"
- **Current SB 218 status:** "Signed 2025"
- **Note:** Both are already marked as signed/effective in the data. SB 218's status could be more specific: "Signed 2025; effective Sept 30, 2025"
- **Sources:**
  - NH Municipal guidance: https://www.nhmunicipal.org/sites/default/files/uploads/Guidance_Documents/changes_election_law_2025.pdf

---

## New Legislation to Add

### 5. Montana — SB 490 (2025) Election Day Registration Restrictions
- **Field:** `recentLegislation` (new entry) and `sameDayRegistration` notes
- **Description:** Restricts Election Day registration to 8 AM–noon (previously all day). Eliminates Monday-before-election registration, moving late deadline to 5 PM Saturday. Preliminary injunction granted Feb 13, 2026; litigation ongoing.
- **Sources:**
  - Montana Free Press: https://montanafreepress.org/2025/05/16/how-lawmakers-are-changing-montana-election-laws/
  - ACLU Montana: https://www.aclumontana.org/cases/sb-490-restricting-indigenous-electoral-participation/
  - Democracy Docket (injunction order): https://www.democracydocket.com/wp-content/uploads/2025/05/2026-02-13-Order-granting-plaintiffs-motion-for-preliminary-injunction.pdf

### 6. Montana — SB 276 (2025) Tightened Voter ID
- **Field:** `recentLegislation` (new entry)
- **Description:** Requires voter ID to be "current, valid, and readable." Restricts which student IDs qualify. Eliminated provisional ballot alternative verification.
- **Sources:**
  - MTFP Capitol Tracker: https://projects.montanafreepress.org/capitol-tracker-2025/bills/sb-276/

### 7. Indiana — SB 12 (2026) Ranked Choice Voting Ban
- **Field:** `recentLegislation` (new entry)
- **Description:** Bans ranked-choice voting statewide. Indiana becomes the 19th state to ban RCV.
- **Status:** Signed by Gov. Braun on Feb 27, 2026; effective July 1, 2026
- **Sources:**
  - Ballotpedia: https://news.ballotpedia.org/2026/02/27/indiana-becomes-the-19th-state-to-ban-ranked-choice-voting/

### 8. Arkansas — Act 846 (2025) Absentee Witness Requirement
- **Field:** `recentLegislation` (new entry) and `mailInVoting.details` update
- **Description:** Requires a witness (age 18+) for absentee voters who are "unavoidably absent." Witness must sign, print name, and provide mailing address.
- **Sources:**
  - Arkansas Democrat-Gazette: https://www.arkansasonline.com/news/2026/feb/14/new-arkansas-laws-affect-voter-registration-add/

### 9. Oklahoma — HB 1007 (2025) Student ID Ban
- **Field:** `recentLegislation` (new entry)
- **Description:** Prohibits student IDs from educational institutions as valid voter identification.
- **Status:** Effective November 1, 2025
- **Sources:**
  - KOSU: https://www.kosu.org/politics/2025-01-27/oklahoma-lawmakers-to-consider-early-voting-reform-photo-id-requirements-and-more-elections-changes

### 10. New Mexico — SB 16 (2025) Open Primaries
- **Field:** `recentLegislation` (new entry)
- **Description:** Independent voters can now vote in party primaries. Takes effect starting with June 2, 2026 primary.
- **Status:** Signed into law April 7, 2025
- **Sources:**
  - Unite America: https://www.uniteamerica.org/articles/nm-bill

---

## Additional Notes (not discrepancies, minor improvements)

### Massachusetts — Early Voting Description
- **Current value:** "Early voting available for general elections, beginning at least 17 days before election day."
- **Suggested improvement:** The VOTES Act (2022) expanded early voting to include primaries (~1 week for primaries, ~2 weeks for generals). The description could be updated to reflect both.
- **Source:** MA SOS: https://www.sec.state.ma.us/divisions/elections/voting-information/vote-early.htm

---

## States With No Changes Found

AL, AK, AZ, CA, CO, CT, DE, GA, HI, ID, IL, IA, KS, KY, LA, ME, MD, MI, MN, MS, NE, NV, NH, NJ, NY, NC, ND, OH, OR, PA, RI, SC, TN, TX, UT, VT, VA, WA, WV, WI, WY, DC
