#!/usr/bin/env bash
# Prints the usvoting.info usage summary at session start (SessionStart hook).
# Output is JSON with a systemMessage field, displayed to the user in the UI.

read -r -d '' MESSAGE <<'EOF'
usvoting.info — voter registration and voting requirements for all 50 states + DC

WHAT IT IS
An Eleventy 3 (Nunjucks) static site that presents voter registration, ID rules,
early voting, and mail-in ballot details for every US state plus DC. Content is
data-driven from _data/states.json (the single source of truth) and _data/stateNews.json,
with client-side search/filtering and per-state pages. It deploys to Cloudflare Workers.

WORKFLOW
1. Start the dev server: npm start  (eleventy --serve, hot reload)
2. Edit voting data in _data/states.json and templates in content/; news comes from
   the voting-research skill into _data/stateNews.json.
3. Do NOT push or deploy. Pushing to main auto-deploys via Cloudflare Workers Builds,
   so leave changes committed locally at most unless explicitly asked to push.

SKILLS
- voting-research (skill) — Deep-dive research across all 51 state entries — verifies voting data against authoritative sources and gathers recent per-state election news into _data/stateNews.json (full, requirements-only, or news-only modes).
EOF

jq -nc --arg m "$MESSAGE" '{systemMessage: $m}'
