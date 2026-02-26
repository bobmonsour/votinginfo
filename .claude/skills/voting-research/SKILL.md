---
name: voting-research
description: Deep dive research across all 51 state entries to verify voting data accuracy against authoritative sources
disable-model-invocation: true
allowed-tools: Read, Write, Grep, Glob, WebSearch, WebFetch, Edit, Bash(node *)
---

# Research and Verify State Voting Data

Perform a comprehensive review of all 51 entries (50 states + DC) in `_data/states.json` to identify any data that has changed or needs updating.

## Data file

The single source of truth is `_data/states.json`. Read this file first to understand current values.

## Fields to verify for each state

- **eligibilityAge** — minimum age to register/vote
- **idRequirements** — what ID is needed to vote
- **registrationDeadline** — deadline to register before an election
- **registrationMethods** — how voters can register (online, mail, in-person)
- **sameDayRegistration** — whether the state allows same-day registration
- **earlyVoting** — early voting availability and details
- **mailInVoting** — mail-in/absentee voting rules
- **felonyVotingRules** — voting rights for people with felony convictions
- **documentationNeeded** — documents required for registration
- **recentLegislation** — recently enacted laws affecting voting
- **pendingLegislation** — bills currently under consideration

## Authoritative sources to check

For each state, cross-reference against:

1. **The state's official election website** (the `officialUrl` in the data)
2. **NCSL (ncsl.org)** — voter ID laws, registration policies, election procedures
3. **Ballotpedia (ballotpedia.org)** — state election laws and legislative changes
4. **Vote.org** — state-specific voter information
5. **Recent news** — newly enacted or pending legislation

## Research process

1. Read `_data/states.json` in full.
2. For each state, use WebSearch and WebFetch to check current data against the authoritative sources listed above.
3. Focus especially on:
   - Legislative changes enacted since the `lastVerified` date for each state
   - Any pending legislation that has been enacted or defeated
   - Changes to registration deadlines, ID requirements, or voting methods
4. Work through states in alphabetical order. Use parallel research agents where possible to speed up the process.
5. Keep a running summary of all discrepancies found.

## Research report

Save the report as a markdown file in the `docs/` directory named `periodic-research-MM-DD-YYYY.md`, where MM-DD-YYYY is today's date. For example: `docs/periodic-research-02-25-2026.md`.

The report should include:

- Date of research
- Summary of findings (how many states reviewed, how many discrepancies found)
- For each discrepancy:
  - **State** and **field** affected
  - **Current value** in states.json
  - **Correct value** based on sources
  - **Source URL** supporting the change
- States where no changes were found (brief list)

## After research is complete

Present the full report of findings to the user and ask for confirmation before making any changes to `states.json`.

If changes are approved:
1. Update the affected fields in `_data/states.json`
2. Update `lastVerified` to today's date for each changed state
3. Add entries to the state's `changes` array with `date` (today, YYYY-MM-DD format), `field` (human-readable label), and `description` (what changed)
4. Update `recentLegislation` and `pendingLegislation` as appropriate
5. Update source URLs if any have changed
