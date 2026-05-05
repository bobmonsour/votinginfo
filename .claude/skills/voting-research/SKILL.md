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

### Authoritative sources and priority tiers

Sources are organized into priority tiers that determine how discrepancies are evaluated:

**Tier 1 — Primary authority:**
- The state's official election website (the `officialUrl` in the data)

**Tier 2 — Strong secondary authority:**
- Vote.org — state-specific voter information

**Tier 3 — Supporting sources (equal weight among them):**
- NCSL (ncsl.org) — voter ID laws, registration policies, election procedures
- Ballotpedia (ballotpedia.org) — state election laws and legislative changes
- Recent news — newly enacted or pending legislation

### Source priority rules

These rules govern when a discrepancy should be flagged:

1. **Tier 1 alone is sufficient** — if the state's official election website contradicts the current data, flag the discrepancy. No corroboration needed.
2. **Tier 2 alone is sufficient** — if Vote.org contradicts the current data, flag the discrepancy. No corroboration needed.
3. **Tier 3 requires corroboration** — a single Tier 3 source is NOT sufficient on its own. At least two Tier 3 sources must agree on the discrepancy before flagging it.
4. **Higher tier wins conflicts** — if Tier 1 and Tier 2 disagree, Tier 1 (the official state site) prevails. If Tier 3 sources contradict a Tier 1 or Tier 2 source, the higher-tier source wins.

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

Save the report as a markdown file in the `docs/` directory named `periodic-research-MM-DD-YYYY-HHMM.md`, where MM-DD-YYYY is today's date and HHMM is the current time in 24-hour format. For example: `docs/periodic-research-02-25-2026-1430.md`. This prevents collisions when multiple runs happen on the same day.

The report should include:

- Date of research
- Summary of findings (how many states reviewed, how many discrepancies found)
- For each discrepancy:
  - **State** and **field** affected
  - **Current value** in states.json
  - **Correct value** based on sources
  - **Source(s)** supporting the change — list each source with its **tier** (e.g., "State official site (Tier 1)", "Vote.org (Tier 2)", "NCSL + Ballotpedia (Tier 3, corroborated)")
  - **Source URL(s)** for each supporting source
- States where no changes were found (brief list)

### After research is complete

Do **not** present the findings as a single batch and do **not** apply changes in bulk. Each proposed change must be reviewed and approved individually before it is written to `_data/states.json`.

#### One-at-a-time review protocol

1. First, share a brief overview with the user: total number of states reviewed, total number of proposed changes, and the path to the saved research report. Do not list the changes themselves yet.
2. Then walk through every proposed change one by one, in alphabetical order by state and grouped by state. For each individual fact change, present a single, self-contained prompt that includes:
   - **State** (full name and abbreviation)
   - **Field** affected (human-readable label)
   - **Current value** in `_data/states.json` (copied verbatim, not paraphrased)
   - **Proposed value** based on research
   - **Source(s)** with their tier (e.g., "State official site (Tier 1)") — if Tier 3, list at least two corroborating sources
   - **Source URL(s)** — every URL that justifies this specific change
   - A short quote or paraphrase from the source explaining why this change is justified
3. Ask the user to approve, reject, or modify the change. Wait for an explicit response before doing anything else.
4. Apply the user's decision for that single change immediately:
   - **Approved:** update the field in `_data/states.json`, update the state's `lastVerified` to today's date, and append an entry to that state's `changes` array with `date` (today, YYYY-MM-DD), `field` (human-readable label), and `description` including the source used (e.g., "Updated from 'No' to 'Yes' per state official site"). For `recentLegislation` / `pendingLegislation`, add or update the relevant array entry. Update source URLs if any have changed.
   - **Rejected:** make no change and move on. Note the rejection in the running summary you keep for the final report.
   - **Modified:** apply the user's adjusted value using the same update steps as "Approved."
5. Only then move on to the next proposed change. Never batch approvals; never present the next change until the current one has been resolved and written.

#### Forbidden shortcuts

- Do **not** present a numbered list of all changes and ask "approve all?" — each change must be a separate prompt.
- Do **not** apply any change before its individual approval, even if the user previously approved similar changes.
- Do **not** skip the source reference, URL, or current/proposed value comparison on any prompt, even when the change "seems obvious."
- Do **not** combine multiple field changes for the same state into a single approval prompt — one fact = one prompt.

#### After all changes are resolved

Once every proposed change has been approved, rejected, or modified:

1. Append a brief addendum to the research report listing which changes were approved, rejected, or modified, so the report reflects what was actually applied.
2. Continue to the news capture section (if running a Full run) or proceed to commit and finish.

## News capture (Full run and News update)

For each state, search for up to 5 recent election-related news items from reputable sources, including but not limited to those listed below.

**Recency rule (strict):** Only news items with a publication date strictly later than the most recent news item already captured for that state in any previous run of `_data/stateNews.json` qualify for inclusion. Items dated on or before that threshold MUST NOT be added to the site under any circumstance, even if they appear newly relevant. Determine the per-state threshold *before* searching, and constrain the search itself by date wherever possible (e.g., date filters in WebSearch queries) so older results are not gathered in the first place.

- Brennan Center for Justice
- NCSL (ncsl.org)
- State newspapers and local news outlets
- AP News, Reuters
- Ballotpedia
- Stateline (Pew)


### Content filtering

Only include straight news reporting. Exclude editorials, opinion columns, op-eds, analysis pieces, and advocacy content. Skip any article where:

- The URL contains `/opinion/`, `/editorial/`, `/op-ed/`, `/commentary/`, or similar paths
- The article is explicitly labeled as opinion, analysis, editorial, or commentary
- The article is primarily arguing for or against a policy rather than reporting on events
- The byline identifies it as a column or opinion piece

When in doubt, prefer to exclude rather than include.

### What to capture per news item

- **title** — article headline
- **source** — publication name (e.g. "Brennan Center for Justice")
- **url** — full URL to the article
- **date** — publication date in YYYY-MM-DD format
- **summary** — 1-2 sentence summary of the article's relevance to voting in the state

### Filtering out old news

Before adding news items to a new run, enforce the recency rule. This filter is mandatory and applies even if it leaves a state with zero items for the run.

1. Read the existing `_data/stateNews.json` file.
2. For each state, compute the **per-state recency threshold**: the maximum `date` value found across every news item in every previous run for that state. Scan all runs — do not rely on the most recent run alone.
3. Discard any newly found news item whose `date` is on or before the threshold. Only items with a strictly later date (greater than the threshold) are eligible. Equal dates do not qualify.
4. If a state has no prior news items in any previous run, the threshold is undefined and all found items are eligible.
5. States that have zero eligible items after filtering are simply omitted from the new run. Do **not** lower the threshold, "make an exception," or backfill older items to ensure a state is represented. If nothing qualifies, nothing is added.

After filtering, briefly report to the user — per state — the threshold date used and how many items were discarded vs kept, so the recency enforcement is auditable.

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

### Link verification

After writing the new run to `_data/stateNews.json`, verify every news item that was just added:

1. For each news item in the new run, use WebFetch to request the URL.
2. Check that the URL is accessible (does not return a 404, paywall-only page, or redirect to a generic homepage).
3. Check that the `title` stored in the JSON file matches the actual article headline on the page. Minor differences in punctuation or whitespace are acceptable, but the title must clearly refer to the same article. If the title does not match, update it to match the actual headline.
4. If a URL is not accessible (dead link, 404, or redirects away from the article), remove that news item from the run entirely.
5. Report a summary of verification results to the user: how many links checked, how many titles corrected, and how many items removed.

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
