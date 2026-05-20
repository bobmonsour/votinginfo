#!/usr/bin/env bash
# SessionStart hook: if origin/main is ahead of local main, tell Claude to
# suggest pulling before doing other work. Silent otherwise.

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null) || exit 0
[ "$branch" = "main" ] || exit 0

git rev-parse --verify origin/main >/dev/null 2>&1 || exit 0
git fetch origin main --quiet 2>/dev/null || exit 0

behind=$(git rev-list --count HEAD..origin/main 2>/dev/null) || exit 0
[ "${behind:-0}" -gt 0 ] || exit 0

jq -n --arg b "$behind" '{
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext: ("origin/main is " + $b + " commit(s) ahead of local main. Before making changes, suggest the user run `git pull --rebase origin main` — the scheduled news routine commits to main daily and the local branch is now stale.")
  }
}'
