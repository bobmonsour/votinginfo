# Periodic Research Report — February 28, 2026

## Summary

- **Date of research:** 2026-02-28
- **States reviewed:** 51 (50 states + DC)
- **Initial discrepancies reported by agents:** 27 across 20 states
- **Phantom discrepancies (already correct in data):** 13
- **Discrepancies dismissed after verification:** 1 (Connecticut)
- **Confirmed valid updates:** 13 across 13 states

## Audit notes

Research agents reported 27 discrepancies, but 13 were phantom — the agents fabricated or misremembered what the current data said rather than checking the actual `states.json` file. All 14 non-phantom items were independently verified against authoritative sources. One (Connecticut registration deadline) was confirmed correct as-is. The skill has been updated to require cross-referencing against actual file data before reporting discrepancies.

## Confirmed Updates

### Arizona — pendingLegislation
- **Current value:** Empty array
- **Update:** Add 9th Circuit ruling on HB 2492 (Feb 2025, found discriminatory intent in documentary proof of citizenship requirements) and HB 2038 (2025, narrow citizenship-data-error fix for ~218K affected voter records, expires Jan 2027)
- **Sources:** Votebeat, AZ Capitol Times, AZ Legislature

### California — earlyVoting.details
- **Current value:** "Vote centers open up to 29 days before election day, depending on county."
- **Update:** Distinguish between mail ballot mailing (29 days before) and vote center opening (10 days before in VCA counties, 4 days in smaller counties)
- **Source:** CA SOS, Voter's Choice Act (Elections Code Section 4005)

### Colorado — recentLegislation
- **Current value:** Empty array
- **Update:** Add SB 1 (2025), signed May 12, 2025 — Colorado Voting Rights Act, expands tribal ID acceptance for voter registration, requires ballot drop boxes on federal reservations upon tribal council request
- **Source:** Colorado General Assembly

### Georgia — earlyVoting.details
- **Current value:** "Mandatory early voting period of at least 17 days before election day."
- **Update:** Clarify: advance voting begins on the fourth Monday before election (~22 calendar days prior) and ends the Friday before Election Day, with mandatory Saturday voting on two weekends
- **Source:** O.C.G.A. Section 21-2-385, Georgia.gov

### Georgia — recentLegislation
- **Current value:** Has SB 189 only
- **Update:** Add HB 296 (2025, effective July 1, 2025) — digital driver's license bill that excludes voting from digital ID acceptance; physical ID remains required at polls (voting ID requirements unchanged, but digital IDs explicitly not accepted)
- **Source:** Georgia Legislature, 11Alive

### Hawaii — idRequirements.toVote
- **Current value:** "ID required for in-person voting; mail ballots verified by signature"
- **Update:** ID is NOT required (statute repealed 2019). Voters may verify identity by stating name, address, and date of birth. If information cannot be matched, voter signs an affirmation and casts a provisional ballot. Mail ballots verified by signature.
- **Source:** NCSL Voter ID page, Ballotpedia

### Idaho — mailInVoting.details
- **Current value:** "No-excuse absentee voting available for all registered voters."
- **Update:** Add deadline: ballot requests must be received by 5:00 PM at least 11 days before Election Day; in-person requests accepted through the Friday before Election Day
- **Source:** Idaho SOS, VoteIdaho.gov

### Indiana — mailInVoting.details
- **Current value:** "Absentee ballot available; excuse required."
- **Update:** Add deadline (12 days before Election Day) and photo ID copy or voter identification number requirement with application
- **Source:** Indiana SOS

### Iowa — recentLegislation and pendingLegislation
- **Current value:** Both empty arrays
- **Update (recentLegislation):** Add HF 928 (2025, signed June 2, 2025 — recount thresholds and deadlines, NOT voter roll maintenance as originally reported) and HF 954 (2025, signed June 2, 2025 — citizenship verification for voter registration, RCV ban statewide, political party status thresholds)
- **Update (pendingLegislation):** Add SF 2203 (passed Senate 34-13, Feb 2026 — requires SOS to verify citizenship of all registered voters via federal SAVE database, monthly verification of new registrants)
- **Source:** Iowa Capital Dispatch, Iowa SOS

### Kansas — recentLegislation
- **Current value:** Has SAFE Act only
- **Update:** Add SB 4 (2025, enacted via veto override) — eliminates 3-day mail ballot grace period; all mail ballots must arrive by 7 PM on Election Day. Currently under court challenge.
- **Source:** Kansas Reflector, Democracy Docket, KS SOS

### Massachusetts — pendingLegislation
- **Current value:** Empty array
- **Update:** Add H.834/S.505 (2025-2026 session) — proposed same-day voter registration. S.505 referred to Senate Committee on Ways and Means.
- **Source:** Massachusetts Legislature, MassVOTE

### New Hampshire — recentLegislation
- **Current value:** Has HB 1569 only
- **Update:** Add SB 287 (signed Aug 1, 2025 — photo ID copy or notarized signature required with absentee ballot applications) and SB 218 (signed 2025 — proof of citizenship/identity required for absentee voter registration)
- **Source:** Ballotpedia News, Boston Globe, Citizens Count

### Ohio — earlyVoting.details
- **Current value:** "In-person early voting begins 29 days before election day at county boards of elections."
- **Update:** Change to 28 days (confirmed by OH SOS 2025 election calendar: Oct 7 start for Nov 4 election = 28 days)
- **Source:** Ohio SOS 2025 Elections Calendar, Cuyahoga County BOE

### Oklahoma — earlyVoting.details
- **Current value:** "In-person early voting available on Thursday and Friday before election day."
- **Update:** General, primary, and runoff elections also include Wednesday (8 AM-6 PM) and Saturday (8 AM-2 PM). Thursday/Friday only applies to other elections.
- **Source:** Oklahoma State Election Board

## Dismissed items

### Connecticut — registrationDeadline
- **Current value:** "18 days before election (same-day registration available on election day and during early voting)"
- **Agent claim:** Primary deadline is 7 days
- **Verdict:** The 18-day figure is correct as the standard registration cutoff for all elections. The 7-day claim was inaccurate. No change needed.

## Phantom discrepancies (already correct in data)

The following items were reported as discrepancies but the data was already correct:

- **Nevada** earlyVoting — already says 17 days
- **Oregon** sameDayRegistration — already set to `false`
- **Tennessee** earlyVoting — already says "20 to 5 days before"
- **West Virginia** earlyVoting — already says "begins 13 days before and ends 3 days before"
- **West Virginia** idRequirements — already updated for HB 3016 in prior run
- **Virginia** registrationDeadline — already says 22 days (corrected in prior run)
- **Virginia** idRequirements — already says "photo or non-photo" accepted
- **Ohio** recentLegislation SB 293 — already present
- **South Carolina** earlyVoting — already specifies "two weeks before"
- **Montana** sameDayRegistration — minor clarification, not an error
- **New Jersey** mailInVoting — not described as "auto-sent"
- **Wyoming** earlyVoting — no incorrect "40 days" figure in data
- **Louisiana** recentLegislation SB 436 — already present and current

## States with no changes found

Alabama, Alaska, Arkansas, Connecticut, Delaware, Florida, Illinois, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Jersey, New Mexico, New York, North Carolina, North Dakota, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming, District of Columbia
