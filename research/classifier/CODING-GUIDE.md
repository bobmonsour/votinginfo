# Coding guide

Offline reference for hand-coding `validation-sample.json`. Fill in
`human_subjects`, `human_engagement`, `human_off_topic`, then set `coded: true`.
Uncoded items are skipped by `--score`.

## The three fields

```jsonc
"human_subjects": ["voter_id"],      // array of exact strings below; [] if none
"human_engagement": "conflict",       // exactly one: conflict | descriptive | none
"human_off_topic": false,             // JSON boolean, not a string
"coded": true                         // required, or the row is ignored
```

## Rules that resolve most hard cases

1. **Off-topic wins.** If `human_off_topic` is `true`, leave `human_subjects` empty
   and set `human_engagement` to `"none"`.
2. **Prefer the specific subject.** Use `election_admin` only when no specific
   subject fits. It is the catch-all, not the default.
3. **Ballot measures double-code.** A measure *about* voter ID is both
   `ballot_measures` and `voter_id`.
4. **`ranked_choice` vs `primary_systems` is the trap.** Ranking or top-two/top-four
   is `ranked_choice`. Open/closed/semi-open primaries are `primary_systems`.
   These get conflated constantly; an earlier classifier read New Mexico as a
   ranked-choice hotspot when every match was its semi-open primary.
5. **Engagement is about the STORY, not the rule.** A voter guide explaining an ID
   law is `descriptive` even if that law is contested elsewhere. A bill to change
   it is `conflict`.
6. **Code what the text supports.** Headline and summary only — the model saw no
   more than that, so using outside knowledge makes the comparison unfair.
7. **Don't pad.** Most items have one or two subjects. Three is unusual.

## Subjects

### `redistricting`

**Is:** Drawing or challenging legislative or congressional district boundaries, including racial gerrymandering claims and Voting Rights Act districting cases.

**Not:** General Voting Rights Act news that is not about district lines. A candidate running in a new district.

### `voter_id`

**Is:** Requirements to present identification in order to register or cast a ballot, including photo ID, non-photo ID, signature-in-lieu-of-ID, and student or tribal ID acceptance.

**Not:** Proof of citizenship documentation, which is its own subject. Identity verification of election officials or candidates.

### `citizenship_proof`

**Is:** Documentary proof-of-citizenship requirements for registration, noncitizen voting claims, and citizenship-verification databases such as SAVE.

**Not:** Voter ID at the polling place. Immigration policy with no stated link to voting or registration.

### `mail_absentee`

**Is:** Voting by mail or absentee, including applications, ballot return, drop boxes, postmark and receipt deadlines, grace periods, and ballot curing.

**Not:** Early in-person voting, which is its own subject.

### `early_voting`

**Is:** In-person voting before election day: the length of the early-voting period, hours, locations, and weekend or Sunday voting.

**Not:** Mail or absentee voting. Election-day polling-place operations.

### `registration_access`

**Is:** How and when eligible people may register: deadlines, same-day and election-day registration, automatic registration, online registration, and preregistration of minors.

**Not:** Removal of existing registrations, which is roll maintenance. ID or citizenship documents required to register.

### `roll_maintenance`

**Is:** Removing, cancelling, or challenging existing registrations: purges, list maintenance, inactive-voter processes, and mass voter challenges.

**Not:** Adding new registrations. Data-sharing agreements with no stated removal consequence.

### `ranked_choice`

**Is:** Ranked-choice or instant-runoff voting, and top-two or top-four systems that pair a nonpartisan primary with a ranked general election.

**Not:** Open, closed, or semi-open primaries that do not involve ranking -- that is primary_systems. This distinction matters: they are frequently conflated.

### `primary_systems`

**Is:** Who may vote in a party primary: open, closed, semi-open, and semi-closed primaries, and independent or unaffiliated voter participation.

**Not:** Ranked-choice or top-two systems. Primary election results or candidate news.

### `felony_rights`

**Is:** Voting eligibility for people with felony convictions: disenfranchisement, rights restoration, clemency, and voting while incarcerated or on parole.

**Not:** Criminal prosecution for election-related offences.

### `election_admin`

**Is:** The machinery of running elections: election officials and clerks, poll workers, polling-place operations, canvassing, certification of results, and election-office funding or structure.

**Not:** The substance of any voting rule listed above. Prefer the specific subject when one applies.

### `machines_audits`

**Is:** Voting equipment, tabulators, ballot-marking devices, hand counts, post-election audits, and equipment certification or decertification.

**Not:** Routine certification of results, which is election_admin.

### `turnout_access`

**Is:** Practical ability to cast a ballot: turnout levels, wait times and long lines, polling-place closures or consolidation, disability access, language assistance, and access for tribal or rural voters.

**Not:** Legal eligibility rules. Get-out-the-vote campaign activity.

### `ballot_measures`

**Is:** The initiative and referendum process itself: signature requirements and gathering, qualification for the ballot, single-subject rules, and supermajority thresholds for passage.

**Not:** A ballot measure whose SUBJECT is another category -- classify by subject as well. A measure on voter ID is both ballot_measures and voter_id.

## Engagement

### `conflict`

The story is about a proposed, enacted, contested, or overturned CHANGE to a rule, or an active dispute over one. Bills, lawsuits, rulings, ballot measures, vetoes, rulemaking, campaigns to change a rule.

### `descriptive`

The story describes rules that ALREADY EXIST without a change or dispute being at issue. Voter guides, 'what you need to know before you vote', deadline reminders, explainers.

### `none`

No voting rule is at issue at all.

## Off-topic

`true` — The story is about campaigns, candidates, endorsements, horse-race polling, or election RESULTS, and not about how voting works. Mark true and leave subjects empty.

`false` — anything about how voting works.

## When done

```bash
node validate.mjs --score
```

You do not need to code all 146. Forty or fifty gives an early read; score as
often as you like. Micro-F1 below 0.70 means the taxonomy needs revision before
any figure is published.
