# News topic classifier

Replaces the keyword-matching prototype that produced the first agenda-map draft.
That prototype matched a subject in only 60.5% of stories, and hand-checking found
one whole category wrong — New Mexico read as a ranked-choice hotspot when every
match was "open primary," its semi-open primary reform. A published claim needs a
measured error rate, which is what this produces.

Lives under `research/` deliberately: that path is in the Cloudflare build-watch
excludes, so nothing here triggers a build or deploy. It also has its own
`package.json` so the site's dependencies are untouched.

## Setup

```bash
cd research/classifier
npm install
cp .env.example .env
# then edit .env and paste your key
```

`.env` is gitignored in two places (repo root and here) because **this repository
is public** — a committed key would be scraped within minutes. The scripts call
`process.loadEnvFile()` themselves, so the key loads however you invoke them. An
`ANTHROPIC_API_KEY` already exported in your shell takes precedence over `.env`,
and `ant auth login` works too if you'd rather not keep a key on disk at all.

Get a key at **console.anthropic.com → Settings → API Keys**. API billing is
separate from a Claude.ai or Claude Code subscription — a Max plan grants no API
credits.

## Running it

```bash
node classify.mjs --smoke 8    # 8 items, synchronous, prints results + cost estimate
node classify.mjs --run        # full corpus via Batch API (50% cheaper), writes topics.json
node classify.mjs --resume ID  # re-attach to an in-flight batch
```

**Always smoke first.** It validates the request shape and prints a real cost
estimate for a few cents, so a malformed request can't waste a full run. Look at
the eight classifications it prints; if any look wrong, fix `taxonomy.json` before
spending on the batch.

The batch is resumable. Ctrl-C during polling is safe — the batch id is saved to
`.batch-id` and `--resume` picks it back up.

## Validating it

This is not optional. The numbers this prints are what make the analysis
publishable.

```bash
node validate.mjs --sample 150   # writes validation-sample.json
# ...hand-code the sample: fill in human_subjects, human_engagement,
#    human_off_topic, then set coded: true
node validate.mjs --score        # precision / recall / F1, engagement accuracy, kappa
```

The sample is **stratified by predicted subject**, so rare categories get audited
too — a uniform random draw would surface about two `felony_rights` items and tell
you nothing about them. It is also **blind**: the model's labels are deliberately
excluded from the file. Seeing them while coding anchors your judgement and
inflates agreement.

Publish the micro-F1 and engagement accuracy alongside any claim drawn from this
data. If micro-F1 comes in below 0.70, revise the taxonomy definitions and re-run
rather than publishing.

## The `engagement` field

The single most important addition over the prototype. It separates:

- **conflict** — a rule is being changed, challenged, or fought over
- **descriptive** — a voter guide explaining rules that already exist
- **none** — no voting rule at issue

The first draft's headline finding (voter ID appears in 87% of Trump states vs 37%
of Harris states) could not distinguish these, so it conflated *active political
conflict* with *the existing legal landscape*. Both are real findings, but they are
different claims. This field is what lets the analysis separate them, and it should
be reported separately in any published version.

## Files

| File | Purpose |
|---|---|
| `taxonomy.json` | Subject definitions with explicit boundaries. Source of truth — the prompt is generated from it. |
| `classify.mjs` | Batch classification of the whole corpus. |
| `validate.mjs` | Sampling and scoring harness. |
| `topics.json` | Output. Keyed by `url\|title`, the same key the site uses to dedupe news. |
| `validation-sample.json` | Hand-coding worksheet. |

## Changing the taxonomy

`taxonomy.json` has a `version`. Editing any definition changes classification
behaviour, so bump the version and re-run the **whole** corpus. Never mix results
from two taxonomy versions in one analysis — the comparison would be measuring the
taxonomy change, not the data.

## Notes

- Model is `claude-opus-5` at `effort: low`. Classification is a shallow task;
  the effort setting matters more for cost than for quality here.
- The taxonomy system prompt (~1,700 tokens) is byte-identical across every request
  and marked `cache_control: ephemeral`, so the batch shares one cached prefix.
  Nothing volatile may be added to that string or caching silently stops working.
- Batch results arrive in arbitrary order and are keyed by `custom_id`, never by
  position.
- `node_modules/` syncs via Dropbox (it is git-ignored, not Dropbox-ignored), so
  the laptop gets it without a second `npm install`. Safe here because these are
  pure-JS packages with no native builds and no absolute paths baked in — matching
  how the site's own `node_modules` is already handled.
