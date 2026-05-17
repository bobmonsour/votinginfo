---
name: summarize-run
description: TEMPORARY one-off skill — generate _data/latestRunSummary.json from the most recent run already in _data/stateNews.json. No web fetches, no branch creation, no commits, no push. Used to preview the home-page summary section against data that's already on disk. Delete this skill after the latestRunSummary feature has shipped and been validated.
disable-model-invocation: true
allowed-tools: Read, Write, Bash(python3 *), Bash(node *)
---

# Summarize the latest stored run

Temporary skill for previewing the home-page "Summary of latest election news" section against news data that's already on disk. Performs only the "Latest run summary" step from the `voting-research` skill — no branch creation, no news capture, no commit, no merge, no push.

## Process

1. Read `_data/stateNews.json` and identify the most recent run (last entry in the `runs` array). Use its `date` and `states` map.
2. Read every news item in that run.
3. Identify 4–8 notable themes from those items. A theme can be:
   - Anchored on a single article (use that article's exact URL)
   - Or span multiple states / articles around a common topic (no URL — renders as plain text)
4. Write each theme as a short prose clause (typically 4–15 words).
5. For linked items, the `url` MUST be an exact URL from one of the items in this run. Do not invent, paraphrase, or carry over URLs from prior runs. If no single article fits, omit `url`.
6. Optionally include `abbr` (state code) when the clause is clearly tied to one state.
7. **Overwrite** `_data/latestRunSummary.json` with the shape:

   ```json
   {
     "date": "YYYY-MM-DD",
     "items": [
       { "text": "...", "url": "https://...", "abbr": "XX" },
       { "text": "..." }
     ]
   }
   ```

8. Stop. Do not stage, commit, push, merge, or deploy. Do not run `npm run build` — the user has the dev server running and Eleventy will pick up the file change.

## After

Report to the user:
- The run date that was summarized
- How many themes were produced and how many of them are linked vs plain text
- Remind them to refresh the browser (the dev server should hot-reload)
