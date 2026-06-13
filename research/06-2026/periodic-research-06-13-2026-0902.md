# Periodic Research — Requirements Update

- **Date of research:** 2026-06-13 (Pacific Time)
- **Mode:** Requirements update (data verification only; no news capture)
- **States reviewed:** 51 (50 states + DC), all entries in `_data/states.json`
- **Method:** 7 parallel research agents, each given the verbatim current data for its assigned states and instructed to compare directly against Tier 1 (official state sites), Tier 2 (Vote.org), and Tier 3 (NCSL, Ballotpedia, reputable news) sources per the source-priority tier rules.

## Summary of findings

- **Confident, tier-qualifying discrepancies:** 3 proposed field changes across 2 states (NH ×2, SC ×1).
- **Optional additions (borderline / awaiting status confirmation):** 2 candidate `pendingLegislation` items (HI, MI) — presented for the reviewer to opt into or skip.
- **No changes found:** 47 of 51 states.

---

## Confident discrepancies (proposed changes)

### 1. New Hampshire (NH) — ID Requirements (registration)

- **Current value (verbatim from file), `idRequirements.toRegister`:**
  > "Proof of identity required (not just an ID number): driver's license, government-issued photo ID, passport, or naturalization papers. Under HB 1569 (effective Nov 2024), all first-time registrants must provide hard-copy documentary proof of U.S. citizenship: U.S. passport, birth certificate, or naturalization papers. Proof of domicile also required. Affidavits no longer accepted. Law currently under legal challenge."
- **Correct value:** The elimination of the affidavit option under HB 1569 was **struck down** by a federal court on **May 28, 2026** (Judge Samantha Elliott); the qualified-voter affidavit (attesting to citizenship under penalty of perjury) is reinstated for registration. State expected to appeal.
- **How they differ:** Current text says "Affidavits no longer accepted. Law currently under legal challenge." The challenge has now been resolved at the district-court level against the law — affidavits are accepted again. Event postdates `lastVerified` (2026-04-18).
- **Sources (Tier 3, corroborated):**
  - Ballotpedia: https://news.ballotpedia.org/2026/06/02/federal-judge-strikes-down-part-of-new-hampshires-documentary-proof-of-citizenship-law/
  - News From The States: https://www.newsfromthestates.com/article/ahead-midterms-federal-court-strikes-down-nh-proof-citizenship-voter-registration-law
  - (Also ACLU-NH: https://www.aclu-nh.org/press-releases/victory-court-declares-nh-anti-voter-law-unconstitutional/)
- **Justification:** Court held "a sworn affidavit capable of exposing an affiant to criminal prosecution is a method of proving citizenship." Reinstated affidavits available for the Sept 8 primary; AG indicated it will appeal.

### 2. New Hampshire (NH) — Recent Legislation (HB 1569 status)

- **Current value (verbatim from file), `recentLegislation[HB 1569].status`:**
  > "Enacted; federal trial concluded Feb 2026, ruling pending"
- **Correct value:** "Enacted; federal court struck down the documentary-proof-of-citizenship / affidavit-elimination provisions as unconstitutional May 28, 2026; affidavit option reinstated; state expected to appeal"
- **How they differ:** Status said "ruling pending"; the ruling has now issued (against the law), same May 28, 2026 event as #1.
- **Sources (Tier 3, corroborated):** Same as #1.

### 3. South Carolina (SC) — Early Voting

- **Current value (verbatim from file), `earlyVoting.details`:**
  > "In-person absentee voting begins 15 days before election day and ends the Friday before election day, at county election offices and designated early voting centers."
- **Correct value:** For **general elections**, early voting runs Monday (15 days prior) through the **Saturday three days before** Election Day; for primaries/most other elections it ends the Friday four days prior. Term is "early voting," not "in-person absentee voting."
- **How they differ:** Current text states a flat "ends the Friday before election day" rule, which is only correct for primaries — it understates the general-election window by one day and omits the general-vs-primary distinction.
- **Sources:** SC Election Commission – Early Voting (Tier 1): https://scvotes.gov/voters/early-voting/ ; corroborated by AARP/WIS-TV (Tier 3).
- **Justification:** SC Election Commission: general elections run "Monday, 15 days prior to election day, through Saturday, three days prior to election day," while primaries run "through Friday, four days prior to election day."

---

## Optional additions (borderline — reviewer decides)

### A. Hawaii (HI) — possible new pendingLegislation: SB 2239 (automatic/opt-out voter registration)

- **Current value:** `recentLegislation: []`, `pendingLegislation: []`
- **Candidate:** SB 2239 (2026) shifts HI registration from opt-in to opt-out ("automatic") at DMV/state-ID transactions; effective Jan 1, 2027. Passed legislature (Senate 24-1; House 40-11), sent to Gov. Green early May 2026.
- **Caveat:** Agent **could not confirm** the governor signed it. Recommend recording as `pendingLegislation` with status "Passed legislature; awaiting Governor Green's action as of early May 2026" rather than enacted, unless a signing can be confirmed.
- **Sources (Tier 3):** Hawaii Public Radio https://www.hawaiipublicradio.org/local-news/2026-04-30/automatic-voter-registration-close-to-becoming-law-in-hawaii ; Courthouse News https://courthousenews.com/hawaii-legislature-passes-bills-for-automatic-voter-registration-native-homestead-rights/

### B. Michigan (MI) — possible new pendingLegislation: HB 4765

- **Current value:** `pendingLegislation: []`
- **Candidate:** HB 4765 (documentary proof of citizenship to register + voter ID to vote) passed the MI House on a party-line vote April 14, 2026; referred to the Senate Government Operations Committee and widely expected to die there. Not enacted; does not contradict any existing field.
- **Note:** Agent flagged this as optional only.

---

## States with no changes found (47)

AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, DC.

(MI and HI appear here for all existing fields; the optional items above are *additions*, not corrections to existing values.)

### Notable items checked but NOT flagged (verified, not missed)

- **AZ** — RNC v. Mi Familia Vota (No. 25-1017) cert petition still pending; DOJ SG brief filed May 26, 2026; distributed for June 18, 2026 conference. "Pending" status still accurate.
- **FL HB 991** — confirmed signed April 1, 2026, effective Jan 1, 2027; matches file.
- **IN SB 10** — Seventh Circuit stayed injunction April 20, 2026; matches file.
- **IA SF 2203** — did not become law (session adjourned May 3, 2026); file's "Failed" status correct.
- **KS** — SAFE Act still court-struck; HCR 5004 citizenship amendment on Nov 3, 2026 ballot; matches file.
- **MO** — wide-reaching elections bill still pending with Gov. Kehoe (deadline ~July 15, 2026); status unchanged. Bill-number label "HB 174 / SB 152" may differ from news refs to "HB1871" — could not confirm across two sources; flagged for human spot-check only.
- **MT SB 490**, **NM SB 16**, **VA King v. Youngkin (June 1, 2026)**, **WV SJR 9 (Nov 3, 2026 ballot)**, **TN SB 336/PC 473**, **SD SB 175**, **UT HB 209**, **WY HB 156** — all confirmed consistent with current data.
- **TN** — signing-date wording ("early April 2026" vs Ballotpedia "March 26, 2026") not flagged; two Tier 3 sources do not agree and substance is correct.

---

## Addendum — applied changes

Reviewed one at a time on 2026-06-13. Outcomes:

**Approved (applied to `_data/states.json`):**
1. **NH — ID Requirements (registration):** updated `idRequirements.toRegister` to reflect the May 28, 2026 federal ruling striking down HB 1569's affidavit-elimination provision. `lastVerified` → 2026-06-13; change-log entry added.
2. **NH — Recent Legislation:** updated HB 1569 `status` from "ruling pending" to reflect the May 28, 2026 ruling against the law. Change-log entry added.
3. **SC — Early Voting:** clarified `earlyVoting.details` — general elections run through the Saturday three days before election day; primaries end the Friday four days before (SC Election Commission, Tier 1). `lastVerified` → 2026-06-13; change-log entry added.
4. **HI — Pending Legislation (optional addition, approved):** added SB 2239 (automatic/opt-out voter registration) to `pendingLegislation` with status "awaiting Gov. Green's action." `lastVerified` → 2026-06-13; change-log entry added.

**Rejected / skipped:**
- **MI — HB 4765 (optional addition):** skipped. House-passed only, single source, expected to stall in Senate committee; not enacted and not contradicting any existing field.

**No other changes:** the remaining 47 states were verified with no field changes.
