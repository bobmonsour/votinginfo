# Periodic Research Report — March 1, 2026

## Summary

- **Date:** March 1, 2026
- **Mode:** Requirements update (data verification only, no news)
- **States reviewed:** 51 (50 states + DC)
- **Discrepancies found:** 7
- **Sources consulted:** Official state election websites (Tier 1), Vote.org (Tier 2), NCSL, Ballotpedia (Tier 3)

## Discrepancies

### 1. Virginia (VA) — Registration Deadline

- **Field:** `registrationDeadline`
- **Current value:** `"22 days before election (same-day provisional registration available through election day)"`
- **Correct value:** `"11 days before election (same-day provisional registration available through election day)"`
- **Source:** Virginia Department of Elections (Tier 1) — https://www.elections.virginia.gov/registration/
- **Notes:** A 2025 Virginia law changed the registration deadline from 22 days to 11 days before primary and general elections. The Feb 25 change log entry that "corrected" this from 11 to 22 was an error — it went in the wrong direction. The official VA elections site clearly states "11 days before election."

### 2. Connecticut (CT) — Early Voting Start

- **Field:** `earlyVoting.details`
- **Current value:** `"Early voting available starting 14 days before election day."`
- **Correct value:** `"Early voting for general elections starts 15 days before election day and ends 2 days before (14-day period). For primaries, starts 8 days before and ends 2 days before."`
- **Source:** Connecticut SOTS Early Voting Handbook (Tier 1) — https://portal.ct.gov/sots/election-services; Vote.org CT (Tier 2) — https://www.vote.org/connecticut/
- **Notes:** The "14 days" in the current data appears to be the length of the early voting window, not the start offset. Early voting begins 15 days before election day for generals.

### 3. New Jersey (NJ) — Early Voting Description

- **Field:** `earlyVoting.details`
- **Current value:** `"In-person early voting available for 9 days before election day."`
- **Correct value:** `"In-person early voting begins 10 days before election day for general elections (7 days for primaries)."`
- **Source:** NJ Division of Elections (Tier 1) — https://www.nj.gov/state/elections/vote-early-voting.shtml
- **Notes:** The current phrasing is ambiguous. The early voting window is 9 days long (10 days before through 2 days before), but the description should indicate when it starts relative to election day for consistency with how other states are described.

### 4. South Carolina (SC) — Early Voting Description

- **Field:** `earlyVoting.details`
- **Current value:** `"In-person absentee voting available at county election offices two weeks before election."`
- **Correct value:** `"In-person absentee voting begins 15 days before election day and ends the Friday before election day, at county election offices and designated early voting centers."`
- **Source:** SC Votes (Tier 1) — https://scvotes.gov/voters/early-voting/
- **Notes:** "Two weeks" is approximate (15 days = 2 weeks + 1 day). The official period is 15 days before through Friday 4 days before.

### 5. North Dakota (ND) — Early Voting Availability

- **Field:** `earlyVoting.details`
- **Current value:** `"In-person early voting available at county auditor offices at least 15 days before election."`
- **Correct value:** `"In-person early voting available in counties that choose to offer it (not all counties participate), at county auditor offices at least 15 days before election."`
- **Source:** ND SOS (Tier 1) — https://www.sos.nd.gov/elections/voter/voting-north-dakota; Ballotpedia (Tier 3) — https://ballotpedia.org/Voting_in_North_Dakota
- **Notes:** Early voting in ND is county-optional. Only about 6 of 53 counties offered it as of late 2025. The current description implies universal availability.

### 6. Idaho (ID) — Registration Deadline Clarification

- **Field:** `registrationDeadline`
- **Current value:** `"25 days before election (same-day registration available on election day)"`
- **Correct value:** `"25 days before election by mail; 11 days before online (same-day registration available on election day)"`
- **Source:** VoteIdaho.gov (Tier 1) — https://voteidaho.gov/voter-registration/
- **Notes:** The 25-day deadline applies to mail registration. Online registration closes 11 days before election. The current data only shows the more restrictive deadline.

### 7. Illinois (IL) — Registration Deadline Clarification

- **Field:** `registrationDeadline`
- **Current value:** `"28 days before election (grace period registration and same-day registration available)"`
- **Correct value:** `"28 days before election by mail; 16 days before online (grace period registration and same-day registration available)"`
- **Source:** Illinois State Board of Elections (Tier 1) — https://www.elections.il.gov/votingandregistrationsystems/register.aspx
- **Notes:** The 28-day deadline applies to mail-in registration. Online registration closes 16 days before election. The current data only shows the mail deadline.

## States with No Discrepancies Found

Alabama, Alaska, Arizona, Arkansas, California, Colorado, Delaware, Florida, Georgia, Hawaii, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Mexico, New York, North Carolina, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Dakota, Tennessee, Texas, Utah, Vermont, Washington, West Virginia, Wisconsin, Wyoming, District of Columbia

## Notes on Agent Findings Rejected as False Positives

- **Ohio (OH):** An agent reported SB 293 incorrectly described as eliminating drop boxes. On review, the actual data correctly describes it as eliminating the grace period for mail ballot receipt. No change needed.
- **Oklahoma (OK):** An agent reported Saturday early voting missing. On review, the actual data already includes Saturday in the description. No change needed.
- **North Carolina (NC):** An agent reported early voting should be 17 days, not 19. On review, the NCSBE confirms 19 days for the 2026 primary (Feb 12 to March 3). No change needed.
- **Wyoming (WY):** An agent reported proof-of-citizenship not captured. On review, the `toRegister` field already includes full detail about HB 156's citizenship documentation requirement. No change needed.
- **New Hampshire (NH):** An agent reported IDtoVote description was incomplete. On review, the full `toRegister` field already captures HB 1569's citizenship proof requirement, and SB 218/SB 287 are in recent legislation. No change needed.
- **Louisiana (LA):** An agent reported SB 436 description was incomplete. On review, the legislation entry already says "Requires proof of citizenship to register to vote." No change needed.
- **Kansas (KS):** An agent reported SB 4's grace period elimination unclear. On review, the legislation entry already says "Eliminates 3-day mail ballot grace period; all mail ballots must be received by 7 PM on Election Day." No change needed.
