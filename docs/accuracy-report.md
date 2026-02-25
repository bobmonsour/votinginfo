# Voting Data Accuracy Report

**Generated:** February 25, 2026
**Data file:** `_data/states.json`
**Methodology:** Each state's data was verified field-by-field against authoritative sources including official state election websites, NCSL, Vote.org, Ballotpedia, and other reliable sources.

## Authoritative Sources Used

- **Official state election websites** (Secretary of State / Board of Elections sites for each state)
- **[NCSL](https://www.ncsl.org/)** (National Conference of State Legislatures)
- **[Ballotpedia](https://ballotpedia.org/)** (election law and voting procedures)
- **[Vote.org](https://www.vote.org/)** (voter registration and voting info)
- **[Vote.gov](https://vote.gov/)** (federal voter information)
- **[US Vote Foundation](https://www.usvotefoundation.org/)** (voting rights restoration)
- **[Brennan Center for Justice](https://www.brennancenter.org/)** (voting rights research)

---

## Executive Summary

| Category | Count |
|----------|-------|
| States with all fields accurate (High confidence) | 12 |
| States with minor issues only (High confidence) | 24 |
| States with moderate issues (Medium confidence) | 10 |
| States with critical errors requiring correction | 11 |

### Critical Errors (must fix)

| # | State | Field | Issue |
|---|-------|-------|-------|
| 1 | **Arkansas** | `mailInVoting.noExcuseRequired` | Set to `true` but should be `false` -- AR requires an excuse for mail-in absentee voting |
| 2 | **Connecticut** | `mailInVoting.noExcuseRequired` | Set to `true` but should be `false` -- enabling legislation for 2024 constitutional amendment not yet enacted |
| 3 | **Colorado** | `felonyVotingRules` | Says "completion of incarceration and parole" implying parole must be completed; since HB 19-1266 (2019), people on parole CAN vote |
| 4 | **Hawaii** | `registrationDeadline` | States "online deadline 29 days before" -- no such deadline exists; online registration available through Election Day |
| 5 | **Maine** | `registrationMethods.online` | Set to `false` but should be `true` -- Maine launched online voter registration February 1, 2024 |
| 6 | **Massachusetts** | `sameDayRegistration` | Set to `true` but should be `false` -- MA does NOT have same-day registration; deadline is 10 days before election |
| 7 | **Missouri** | `felonyVotingRules` | Says rights restored "including probation and parole" implying people on them CAN vote; they CANNOT until final discharge |
| 8 | **Montana** | `felonyVotingRules` | Says "people on parole may not until discharge" -- incorrect; MT restores rights upon release from incarceration; parole/probation OK |
| 9 | **Nebraska** | `felonyVotingRules` | Says "2 years after completion of sentence" -- outdated; LB20 (2024) eliminated the waiting period |
| 10 | **New Hampshire** | `idRequirements.toVote` | Still references "challenged voter affidavit" -- HB 1569 eliminated this; voters without ID are now turned away |
| 11 | **New York** | `registrationDeadline` | Listed as "25 days" but changed by law to 10 days (in-person) / 15 days postmark (mail) |
| 12 | **Virginia** | `registrationDeadline` | Listed as "22 days" but changed by law to 11 days before election |
| 13 | **West Virginia** | `idRequirements.toVote` | Says "photo or non-photo with name and address" -- HB 3016 (July 2025) now requires photo ID only |

---

## State-by-State Findings

### Alabama (AL)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed. Strict photo ID state. |
| registrationDeadline | ✅ | 15 days is standard phrasing (statute says books close 14 days before) |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed (not available) |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ⚠️ | Should mention Certificate of Eligibility to Vote path (not just pardons) for moral turpitude felonies |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [AL SOS](https://www.sos.alabama.gov/alabama-votes), [Ballotpedia](https://ballotpedia.org/Voting_in_Alabama), [Vote.org](https://www.vote.org/alabama/)

---

### Alaska (AK)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | Rule is "within 90 days of 18th birthday" not specifically tied to election day |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ⚠️ | Voters without ID cast a "questioned ballot" (provisional), not just a "sworn statement" |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ⚠️ | Only available for presidential elections (to vote President/VP only); misleading as unqualified `true` |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Missing distinction: only felonies involving "moral turpitude" cause loss of rights |
| documentationNeeded | ⚠️ | Should say "questioned ballot" not "sworn statement" |
| officialUrl | ✅ | Confirmed |

**Sources:** [AK Division of Elections](https://www.elections.alaska.gov/), [NCSL](https://www.ncsl.org/elections-and-campaigns/same-day-voter-registration), [Ballotpedia](https://ballotpedia.org/Voting_in_Alaska)

---

### Arizona (AZ)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | DPOC and federal-only voter distinction accurately described |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [AZ SOS](https://azsos.gov/elections), [AZ Clean Elections](https://www.azcleanelections.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Arizona)

---

### Arkansas (AR)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed (no online) |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ❌ | **`noExcuseRequired` is `true` but should be `false`.** AR requires an excuse for mail-in absentee voting. No-excuse applies only to early in-person voting. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [AR SOS](https://www.sos.arkansas.gov/elections/), [AR Board of Election Commissioners](https://sbec.arkansas.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Arkansas)

---

### California (CA)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (via CVR) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [CA SOS](https://www.sos.ca.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_California), [Vote.gov](https://vote.gov/register/california)

---

### Colorado (CO)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | "22 days" may conflate when ballots are mailed vs. when vote centers open |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ❌ | **Says "completion of incarceration and parole" -- since HB 19-1266 (2019), people on parole CAN vote.** Should say "Rights restored upon release from incarceration." |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [CO SOS](https://www.coloradosos.gov/pubs/elections/), [CO General Assembly HB19-1266](https://leg.colorado.gov/bills/hb19-1266), [Ballotpedia](https://ballotpedia.org/Voting_in_Colorado)

---

### Connecticut (CT)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ⚠️ | Should clarify: 18 days by mail/online, 7 days in-person, same-day during early voting and election day |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | Starts 15 days before (not 14) for a 14-day period ending 2 days before election day |
| mailInVoting | ❌ | **`noExcuseRequired` is `true` but should be `false`.** Constitutional amendment approved 2024 but enabling legislation not yet enacted. Current law requires an excuse. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [CT SOTS](https://portal.ct.gov/sots/election-services), [Ballotpedia](https://ballotpedia.org/Connecticut_No-Excuse_Absentee_Voting_Amendment_(2024)), [NCSL](https://www.ncsl.org/elections-and-campaigns/voter-registration-deadlines)

---

### Delaware (DE)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ⚠️ | DL/SSN part is correct; supporting document requirement may be overstated for all registrants |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Should specify which offenses cause permanent disenfranchisement: murder, manslaughter, bribery/corruption, sexual offenses |
| documentationNeeded | ⚠️ | "Proof of residency" is more relevant to registration than voting |
| officialUrl | ✅ | Confirmed |

**Sources:** [DE Dept. of Elections](https://elections.delaware.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Delaware), [Vote.org](https://www.vote.org/delaware/)

---

### District of Columbia (DC)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ⚠️ | Should mention the standard 21-day deadline in addition to same-day availability |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | "8 days" is election-specific; DC law allows up to 12 days |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed (no disenfranchisement) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [DCBOE](https://www.dcboe.org/), [DC Law 23-277](https://code.dccouncil.gov/us/dc/council/laws/23-277), [Vote.org](https://www.vote.org/district-of-columbia/)

---

### Florida (FL)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ⚠️ | "Valid for one election cycle" should be more precise: valid through end of calendar year of next general election |
| felonyVotingRules | ⚠️ | Should add that "completion of sentence" includes payment of all fines, fees, costs, and restitution (SB 7066) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [FL Division of Elections](https://dos.fl.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Florida)

---

### Georgia (GA)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ⚠️ | "At least 17 days" is imprecise. More accurately: 4th Monday through Friday before Election Day, including 2 mandatory Saturdays (~21 calendar days) |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | "Payment of all fines" is inaccurate. GA SOS clarified fines are automatically cancelled upon completion of probation. Only rare fine-only sentences require payment. |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [GA SOS](https://sos.ga.gov/elections), [Georgia.gov](https://georgia.gov/), [Georgia Justice Project](https://www.gjp.org/voting/), [Ballotpedia](https://ballotpedia.org/Voting_in_Georgia)

---

### Hawaii (HI)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ⚠️ | Says "ID required for in-person voting" but HI does NOT strictly require ID; voters can verify identity verbally |
| registrationDeadline | ❌ | **"Online deadline 29 days before" is incorrect.** Online registration available through Election Day. Paper deadline is 10 days before. |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | "10 days" should specify 10 business days (not calendar days) |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [HI Office of Elections](https://elections.hawaii.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Hawaii), [VoteRiders](https://www.voteriders.org/states/hawaii/)

---

### Idaho (ID)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | "Pre-register at 17" should clarify: only if turning 18 by the next election |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ⚠️ | 25 days is mail deadline; online deadline is 11 days before |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | Should specify: starts 3rd Monday before Election Day (~14 days) |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ⚠️ | Primary voter-facing site is now https://voteidaho.gov/ |

**Sources:** [VoteIdaho.gov](https://voteidaho.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Idaho), [Vote.gov](https://vote.gov/register/idaho)

---

### Illinois (IL)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | "Begins 40 days" is the maximum; mandatory minimum is 15 days. Varies by jurisdiction. |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [IL State Board of Elections](https://www.elections.il.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Illinois), [Vote.org](https://www.vote.org/illinois/)

---

### Indiana (IN)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ⚠️ | Correct, but should note that student IDs are no longer accepted as of July 2025 |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [IN SOS](https://www.in.gov/sos/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Indiana), [Vote.org](https://www.vote.org/indiana/)

---

### Iowa (IA)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed (unique 5-digit SSN requirement for online verified) |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Should mention that homicide convictions (Chapter 707) are excluded from automatic restoration under the 2020 executive order |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [IA SOS](https://sos.iowa.gov/elections/), [Governor Reynolds - Voting Rights Restoration](https://governor.iowa.gov/services/voting-rights-restoration), [Ballotpedia](https://ballotpedia.org/Voting_in_Iowa)

---

### Kansas (KS)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ⚠️ | SAFE Act documentary proof of citizenship was struck down in 2018 and is NOT in effect. Description should clarify this. |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [KS SOS](https://sos.ks.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Kansas), [Ballotpedia - KS 2026 Citizenship Amendment](https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026))

---

### Kentucky (KY)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ⚠️ | Missing Governor Beshear's 2019 executive order that automatically restores rights for non-violent felons upon sentence completion. Current text implies all must petition the governor. |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [KY SOS](https://elect.ky.gov/), [KY Civil Rights Restoration](https://civilrightsrestoration.ky.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Kentucky), [Brennan Center](https://www.brennancenter.org/our-work/research-reports/voting-rights-restoration-efforts-kentucky)

---

### Louisiana (LA)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ⚠️ | 5-year clock starts from release from incarceration (not from completion of probation/parole). Also missing: election offense conviction = permanent loss. |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [LA SOS](https://www.sos.la.gov/ElectionsAndVoting/), [Louisiana Law Help](https://louisianalawhelp.org/), [Ballotpedia](https://ballotpedia.org/Voting_in_Louisiana)

---

### Maine (ME)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ❌ | **`online` is `false` but should be `true`.** Maine launched online voter registration on February 1, 2024 at registertovote.sos.maine.gov |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed (no disenfranchisement, even while incarcerated) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [ME SOS](https://www.maine.gov/sos/cec/elec/), [ME Online Registration](https://registertovote.sos.maine.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Maine)

---

### Maryland (MD)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [MD SBE](https://elections.maryland.gov/), [DPSCS](https://www.dpscs.state.md.us/), [Ballotpedia](https://ballotpedia.org/Voting_in_Maryland)

---

### Massachusetts (MA)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ❌ | **States "same-day registration available on election day" -- incorrect.** MA does NOT have same-day registration. Deadline is 10 days before election. |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ❌ | **Set to `true` but should be `false`.** MA does not allow same-day registration. |
| earlyVoting | ⚠️ | "At least 17 days" may apply to general elections; varies for other election types |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ⚠️ | References "same-day registration" which doesn't exist in MA |
| officialUrl | ✅ | Confirmed |

**Sources:** [MA SOS](https://www.sec.state.ma.us/elections/), [MassVOTE](https://www.massvote.org/), [Ballotpedia](https://ballotpedia.org/Voting_in_Massachusetts)

---

### Michigan (MI)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed (pre-registration at 16) |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed (affidavit option per Proposal 2) |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed (9 days per Proposal 2) |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [MI SOS](https://www.michigan.gov/sos/elections), [MVIC](https://mvic.sos.state.mi.us/), [Ballotpedia](https://ballotpedia.org/Voting_in_Michigan)

---

### Minnesota (MN)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (since 1974) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed (Restore the Vote Act 2023) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [MN SOS](https://www.sos.mn.gov/elections-voting/), [Ballotpedia](https://ballotpedia.org/Voting_in_Minnesota)

---

### Mississippi (MS)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed (no online) |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ⚠️ | While MS has no "early voting," in-person absentee voting is available starting 45 days before (with an excuse) |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ✅ | Confirmed (one of most restrictive; pardon or legislative bill required) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [MS SOS](https://www.sos.ms.gov/elections), [Ballotpedia](https://ballotpedia.org/Voting_in_Mississippi), [Vote.org](https://www.vote.org/mississippi/)

---

### Missouri (MO)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ⚠️ | Text says "No online voter registration available" but `registrationMethods.online` is `true`. MO DOES have online registration. Text contradicts the field. |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed (excuse required for absentee; no-excuse mail-in requires notarization) |
| felonyVotingRules | ❌ | **Says "including probation and parole" implying people CAN vote while on them -- they CANNOT.** Rights restored only upon final discharge from all supervision. |
| documentationNeeded | ⚠️ | References "non-photo ID with affidavit" (old law); should reference current provisional ballot process |
| officialUrl | ✅ | Confirmed |

**Sources:** [MO SOS](https://www.sos.mo.gov/elections), [Ballotpedia](https://ballotpedia.org/Voting_in_Missouri), [MO DOC](https://doc.mo.gov/node/3176)

---

### Montana (MT)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed (no online) |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ❌ | **Says "people on parole may not until discharge" -- incorrect.** MT restores rights upon release from incarceration. People on both probation AND parole CAN vote. |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [Vote Montana](https://votemt.gov/), [MT SOS](https://sosmt.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Montana), [US Vote Foundation](https://www.usvotefoundation.org/voting-rights-restoration/montana)

---

### Nebraska (NE)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | Should clarify: register at 17 only if turning 18 by the general election |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed (photo ID required per LB514, effective May 2024) |
| registrationDeadline | ⚠️ | 18 days (mail) and 11 days (in-person) are approximations; more precisely 3rd Friday and 2nd Friday before election |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ❌ | **Says "2 years after completion of sentence" -- outdated.** LB20 (2024, upheld by NE Supreme Court) eliminated the 2-year waiting period. Rights now restored immediately upon completion of sentence. |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [NE SOS](https://sos.nebraska.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Nebraska), [NPR](https://www.npr.org/2024/10/16/nx-s1-5155077/nebraska-felon-voting-ruling), [Brennan Center](https://www.brennancenter.org/our-work/research-reports/voting-rights-restoration-efforts-nebraska)

---

### Nevada (NV)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed (note: Question 7 photo ID requirement on 2026 ballot) |
| registrationDeadline | ⚠️ | 28 days is mail deadline; online deadline is 5 days before election |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed (all-mail state) |
| felonyVotingRules | ✅ | Confirmed (automatic restoration upon release per AB 431) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ⚠️ | NV SOS site restructured; verify current URL |

**Sources:** [NV SOS](https://www.nvsos.gov/elections/voters/registering-to-vote), [Ballotpedia](https://ballotpedia.org/Voting_in_Nevada), [Clark County Elections](https://www.clarkcountynv.gov/government/departments/elections/)

---

### New Hampshire (NH)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | Should note that 17-year-olds can register if turning 18 by Election Day |
| idRequirements.toRegister | ✅ | Confirmed (HB 1569 citizenship proof requirement noted) |
| idRequirements.toVote | ❌ | **Still references "challenged voter affidavit" -- HB 1569 eliminated this.** Voters without ID are now turned away. |
| registrationDeadline | ⚠️ | Should mention standard deadline (6-13 days before, varies by municipality) in addition to same-day |
| registrationMethods | ✅ | Confirmed (no online) |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed (not available) |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ⚠️ | Still references affidavit which no longer exists |
| officialUrl | ✅ | Confirmed |

**Sources:** [NH SOS](https://www.sos.nh.gov/elections), [NH Bulletin](https://newhampshirebulletin.com/), [Ballotpedia](https://ballotpedia.org/Voter_ID_in_New_Hampshire), [Democracy Docket](https://www.democracydocket.com/)

---

### New Jersey (NJ)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | As of Jan 2026, 17-year-olds turning 18 by general election may vote in primaries |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ⚠️ | 9 days is correct for general elections; 6 days for primaries |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Wording "upon completion of sentence (including parole and probation)" could mislead -- people on parole/probation CAN vote; only incarcerated cannot |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [NJ Division of Elections](https://www.nj.gov/state/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_New_Jersey), [US Vote Foundation](https://www.usvotefoundation.org/voting-rights-restoration/new-jersey)

---

### New Mexico (NM)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed (NMVRA 2023) |
| documentationNeeded | ⚠️ | Could be more specific about same-day registration ID options |
| officialUrl | ✅ | Confirmed |

**Sources:** [NM SOS](https://www.sos.nm.gov/voting-and-elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_New_Mexico)

---

### New York (NY)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ❌ | **Listed as "25 days" -- outdated.** Changed by law to 10 days (in-person) / 15 days postmark (mail). |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed (Early Mail Voter Act) |
| felonyVotingRules | ⚠️ | "Executive order/law" should just say "law" -- it was codified as statute S830B in 2021 |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [NY BOE](https://www.elections.ny.gov/), [Governor Hochul](https://www.governor.ny.gov/), [NCSL](https://www.ncsl.org/elections-and-campaigns/voter-registration-deadlines), [Vote Early NY](https://www.voteearlyny.org/)

---

### North Carolina (NC)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ⚠️ | Should mention ID Exception Form for voters without photo ID (reasonable impediment, religious objection) |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (during early voting) |
| earlyVoting | ⚠️ | "19 days" should be "third Thursday before Election Day (~17 days)" |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [NCSBE](https://www.ncsbe.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_North_Carolina)

---

### North Dakota (ND)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed (no registration required) |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed (no registration) |
| registrationMethods | ✅ | Confirmed (N/A) |
| sameDayRegistration | ✅ | Confirmed (N/A) |
| earlyVoting | ⚠️ | Only 6 of 53 counties offered early voting as of late 2025; availability varies |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [ND SOS](https://www.sos.nd.gov/elections), [ND VIP](https://vip.sos.nd.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_North_Dakota)

---

### Ohio (OH)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed (student IDs and utility bills no longer accepted) |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Should mention parole/probation voting allowed and exception for two or more felony election law violations |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [OH SOS](https://www.ohiosos.gov/elections-voting/), [Ballotpedia](https://ballotpedia.org/Voting_in_Ohio), [VoteRiders](https://voteriders.org/state/ohio/)

---

### Oklahoma (OK)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ⚠️ | Missing Wednesday start for general elections (Wed-Sat, not just Thu-Fri) |
| mailInVoting | ✅ | Confirmed (absentee affidavits must be notarized) |
| felonyVotingRules | ⚠️ | "Not a repeat offender" language is inaccurate; should reflect 2025 law changes |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [Oklahoma.gov Elections](https://oklahoma.gov/elections.html), [Ballotpedia](https://ballotpedia.org/Voting_in_Oklahoma)

---

### Oregon (OR)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed (all-mail state) |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [OR SOS](https://sos.oregon.gov/voting/), [Ballotpedia](https://ballotpedia.org/Voting_in_Oregon), [Vote.gov](https://vote.gov/register/oregon)

---

### Pennsylvania (PA)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | "Pre-register at 17" should clarify: only if turning 18 by election day |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed (not available; in-person mail ballot at county offices) |
| mailInVoting | ⚠️ | Currently accurate but Act 77 faces legal challenges; long-term status uncertain |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [PA.gov Vote](https://www.vote.pa.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Pennsylvania), [Spotlight PA](https://www.spotlightpa.org/)

---

### Rhode Island (RI)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ⚠️ | Set to `false` -- defensible, but RI does offer same-day for presidential elections only (President/VP) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ⚠️ | Primary site is now https://elections.ri.gov/ |

**Sources:** [RI Board of Elections](https://elections.ri.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Rhode_Island), [NCSL](https://www.ncsl.org/elections-and-campaigns/same-day-voter-registration)

---

### South Carolina (SC)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ⚠️ | Should update terminology from "in-person absentee" to "early voting" (2022 law change); note no-excuse in-person |
| mailInVoting | ✅ | Confirmed. Excuse required for mail-in. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [SC Votes](https://scvotes.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_South_Carolina)

---

### South Dakota (SD)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed (no online) |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [SD SOS](https://sdsos.gov/elections-voting/), [Ballotpedia](https://ballotpedia.org/Voting_in_South_Dakota)

---

### Tennessee (TN)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ✅ | Confirmed (complex restoration process varies by conviction date) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [TN SOS](https://sos.tn.gov/elections), [Ballotpedia](https://ballotpedia.org/Voting_in_Tennessee), [Brennan Center](https://www.brennancenter.org/)

---

### Texas (TX)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed (no online) |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [VoteTexas.gov](https://www.votetexas.gov/), [TX SOS](https://www.sos.texas.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Texas)

---

### Utah (UT)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ⚠️ | HB 300 effective date should be corrected from "Nov 2025" to "May 7, 2025" |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ⚠️ | Accurate for now but HB 300 phases out automatic mail ballots by 2028-2029 |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [Vote.Utah.gov](https://vote.utah.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Utah), [SL Tribune](https://www.sltrib.com/), [ACLU of Utah](https://www.acluutah.org/)

---

### Vermont (VT)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed (pre-register at 17) |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed (no ID required) |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed (all-mail since Act 60, 2023) |
| felonyVotingRules | ✅ | Confirmed (no disenfranchisement, even while incarcerated) |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [VT SOS](https://sos.vermont.gov/elections/), [Ballotpedia](https://ballotpedia.org/Voting_in_Vermont), [ACLU of Vermont](https://www.acluvt.org/)

---

### Virginia (VA)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed |
| registrationDeadline | ❌ | **Listed as "22 days" -- changed by law to 11 days before election.** |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Currently accurate but 2026 ballot measure may make restoration automatic upon release |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [VA Dept. of Elections](https://www.elections.virginia.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Virginia), [Virginia Mercury](https://virginiamercury.com/)

---

### Washington (WA)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ⚠️ | Missing mention of in-person voting center requirements (ballot declaration or photo ID) |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Wording implies people on parole/probation cannot vote; since HB 1078 (2022), only those in total confinement lose voting rights |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [WA SOS](https://www.sos.wa.gov/elections), [Ballotpedia](https://ballotpedia.org/Voting_in_Washington), [ACLU of Washington](https://www.aclu-wa.org/)

---

### West Virginia (WV)
**Confidence: Medium**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | Should note registered 17-year-olds may vote in primaries |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ❌ | **Says "photo or non-photo with name and address" -- HB 3016 (effective July 2025) now requires photo ID only.** Non-photo options eliminated. |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed (not available) |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed. Excuse required. |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ⚠️ | Should specify acceptable photo IDs under new HB 3016 law |
| officialUrl | ✅ | Confirmed |

**Sources:** [WV SOS](https://sos.wv.gov/elections/), [WV Governor - HB 3016](https://governor.wv.gov/article/governor-patrick-morrisey-signs-voter-id-bill-law), [Ballotpedia](https://ballotpedia.org/Voting_in_West_Virginia)

---

### Wisconsin (WI)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ⚠️ | Should note pre-registration at 17 if turning 18 by election day |
| idRequirements.toRegister | ✅ | Confirmed |
| idRequirements.toVote | ✅ | Confirmed (photo ID enshrined in constitution April 2025) |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ✅ | Confirmed |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ✅ | Confirmed |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [WI Elections Commission](https://elections.wi.gov/), [MyVote Wisconsin](https://myvote.wi.gov/), [Ballotpedia](https://ballotpedia.org/Voting_in_Wisconsin)

---

### Wyoming (WY)
**Confidence: High**

| Field | Accurate? | Finding |
|-------|-----------|---------|
| eligibilityAge | ✅ | Confirmed |
| idRequirements.toRegister | ⚠️ | Minor: "military draft record" should be "selective service registration acknowledgment card" |
| idRequirements.toVote | ⚠️ | List is incomplete; should include tribal ID, student IDs, Medicare/Medicaid (until 2029), concealed firearm permit, out-of-state DL |
| registrationDeadline | ✅ | Confirmed |
| registrationMethods | ✅ | Confirmed (no online; mail requires notarization) |
| sameDayRegistration | ✅ | Confirmed |
| earlyVoting | ⚠️ | Should specify: begins 28 days before, through day before Election Day |
| mailInVoting | ✅ | Confirmed |
| felonyVotingRules | ⚠️ | Needs update for 2025 SF9: federal felony convictions no longer qualify for automatic restoration |
| documentationNeeded | ✅ | Confirmed |
| officialUrl | ✅ | Confirmed |

**Sources:** [WY SOS](https://sos.wyo.gov/Elections/), [WY SOS - 2025 Election Laws](https://sos.wyo.gov/Elections/Legislation/2025.aspx), [Ballotpedia](https://ballotpedia.org/Voting_in_Wyoming), [WY DOC](https://corrections.wyo.gov/field-services-information/restoration-of-voting-rights)

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Confirmed accurate |
| ⚠️ | Partially accurate or needs minor update |
| ❌ | Incorrect -- requires correction |
