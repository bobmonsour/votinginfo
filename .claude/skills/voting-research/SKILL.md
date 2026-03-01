---
name: voting-research
description: Deep dive research across all 51 state entries to verify voting data accuracy against authoritative sources and gather recent election-related news items for each state and Washington DC.
disable-model-invocation: true
allowed-tools: Read, Write, Grep, Glob, WebSearch, WebFetch, Edit, Bash(node *), Bash(git *)
---

# Research and Verify State Voting Data

## Run mode

Before doing any work, ask the user which mode to run:

- **Full run** — perform both a requirements update and news update
- **Requirements update** — verify and update state voting data against authoritative sources (no news update)
- **News update** — gather recent news items for each state (no data verification)

Then proceed with the appropriate sections below.

## Branch creation

Before making any changes, create a working branch so all modifications can be reviewed before merging into main.

1. Ensure the working tree is clean (`git status`). If there are uncommitted changes, stop and ask the user how to proceed.
2. Create and switch to a new branch named `research/YYYY-MM-DD` (using today's date). If that branch already exists (e.g. from an earlier run the same day), append a numeric suffix: `research/YYYY-MM-DD-2`, `research/YYYY-MM-DD-3`, etc.
3. Confirm the branch name to the user before continuing.

## Data file

The single source of truth is `_data/states.json`. Read this file first to understand current values.

## Data verification (Full run and Requirements update)

Perform a comprehensive review of all 51 entries (50 states + DC) in `_data/states.json` to identify any data that has changed or needs updating.

### Fields to verify for each state

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

### Authoritative sources to check

For each state, cross-reference against:

1. **The state's official election website** (the `officialUrl` in the data)
2. **NCSL (ncsl.org)** — voter ID laws, registration policies, election procedures
3. **Ballotpedia (ballotpedia.org)** — state election laws and legislative changes
4. **Vote.org** — state-specific voter information
5. **Recent news** — newly enacted or pending legislation

### Research process

1. Read `_data/states.json` in full.
2. For each state, use WebSearch and WebFetch to check current data against the authoritative sources listed above.
3. Focus especially on:
   - Legislative changes enacted since the `lastVerified` date for each state
   - Any pending legislation that has been enacted or defeated
   - Changes to registration deadlines, ID requirements, or voting methods
4. Work through states in alphabetical order. Use parallel research agents where possible to speed up the process.
5. Keep a running summary of all discrepancies found.

### Cross-referencing requirement

**CRITICAL:** Before reporting any discrepancy, the retrieved data from external sources MUST be compared against the actual current values in `_data/states.json`. Every discrepancy report must include:

1. The **exact current value** copied from the states.json file (not paraphrased or recalled from memory)
2. The **correct value** based on authoritative sources
3. A clear explanation of how they differ

Do NOT report a discrepancy based on an assumed or remembered value. If using parallel research agents, each agent must receive the relevant portion of the states.json data for the states it is responsible for, so it can compare directly. Phantom discrepancies (where the agent fabricates what the current data says) are unacceptable and waste review time.

### Research report

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

### After research is complete

Present the full report of findings to the user and ask for confirmation before making any changes to `states.json`.

If changes are approved:
1. Update the affected fields in `_data/states.json`
2. Update `lastVerified` to today's date for each changed state
3. Add entries to the state's `changes` array with `date` (today, YYYY-MM-DD format), `field` (human-readable label), and `description` (what changed)
4. Update `recentLegislation` and `pendingLegislation` as appropriate
5. Update source URLs if any have changed

## News capture (Full run and News update)

For each state, search for up to 5 recent election-related news items from reputable sources, including but not limited to those listed below.

Search for election-related news items for each stateshould return only items that are newer than the most recent news item already captured in previous runs for that state.

- Brennan Center for Justice
- NCSL (ncsl.org)
- State newspapers and local news outlets
- AP News, Reuters
- Ballotpedia
- Stateline (Pew)


### What to capture per news item

- **title** — article headline
- **source** — publication name (e.g. "Brennan Center for Justice")
- **url** — full URL to the article
- **date** — publication date in YYYY-MM-DD format
- **summary** — 1-2 sentence summary of the article's relevance to voting in the state

### Filtering out old news

Before adding news items to a new run, filter out items that are not newer than what has already been captured:

1. Read the existing `_data/stateNews.json` file.
2. For each state, find the most recent news item date across all previous runs. Scan every run's entry for that state and take the latest `date` value.
3. Discard any newly found news items whose `date` is on or before that most recent date. Only items with a strictly later date are kept.
4. If a state has no prior news items in any previous run, keep all found items (there is no date threshold).

### Writing news data

1. Append a new entry to the `runs` array with today's date and all states that had news items remaining after filtering. States with no qualifying news items are omitted from that run.
2. Write the updated file back, preserving all previous runs.

Structure of a run entry:

```json
{
  "date": "YYYY-MM-DD",
  "states": {
    "AL": [
      {
        "title": "Article title",
        "source": "Source name",
        "url": "https://...",
        "date": "YYYY-MM-DD",
        "summary": "Brief summary."
      }
    ]
  }
}
```

Each state key holds up to 5 news items per run.

### Change log entries for news

After writing news items to `stateNews.json`, for each state that received news items, add an entry to that state's `changes` array in `_data/states.json`:

```json
{
  "date": "YYYY-MM-DD",
  "field": "Recent News",
  "description": "Added recent news items"
}
```

## Commit and finish

After all file changes are complete:

1. Stage all modified files (`_data/states.json`, `_data/stateNews.json`, and any report in `docs/`).
2. Commit with a descriptive message, e.g. `Research run: data verification and news update for YYYY-MM-DD` (full run), `Research run: requirements update for YYYY-MM-DD` (requirements update), or `Research run: news update for YYYY-MM-DD` (news only).
3. Do **not** merge into main or deploy. Tell the user the branch is ready for review and suggest next steps:
   - Review the changes: `git diff main..research/YYYY-MM-DD`
   - If satisfied, merge and deploy: `git checkout main && git merge research/YYYY-MM-DD && npm run deploy`
   - If not satisfied, discard: `git checkout main && git branch -D research/YYYY-MM-DD`
