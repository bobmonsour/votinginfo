#!/usr/bin/env node
/**
 * Classify every news item in _data/stateNews.json against taxonomy.json.
 *
 * Two modes:
 *   node classify.mjs --smoke 8     Classify 8 items synchronously and print them.
 *                                   Validates the request shape for a few cents
 *                                   before committing to a full run.
 *   node classify.mjs --run         Submit the whole corpus as one Batch API job
 *                                   (50% cheaper), poll, and write topics.json.
 *   node classify.mjs --resume ID   Re-attach to an in-flight batch and collect it.
 *
 * Output: topics.json -- { version, model, generated, items: { [id]: {...} } }
 * where id is the same `url|title` key the site uses to dedupe news items, so
 * results join back to the corpus without depending on array order.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

const HERE = path.dirname(fileURLToPath(import.meta.url));

// Load a .env if present, so the key works however the script is invoked (npm
// script, bare `node classify.mjs`, or from another directory). Checks the
// classifier directory first, then the repo root -- the root is the more natural
// place to keep one key for the whole project. An ANTHROPIC_API_KEY already set
// in the environment wins over both.
for (const dir of [HERE, path.join(HERE, "..", "..")]) {
  if (process.env.ANTHROPIC_API_KEY) break;
  try {
    process.loadEnvFile(path.join(dir, ".env"));
  } catch {
    /* no .env here -- try the next location, then fall through to the env var */
  }
}

const CORPUS = path.join(HERE, "..", "..", "_data", "stateNews.json");
const TAXONOMY = path.join(HERE, "taxonomy.json");
const OUT = path.join(HERE, "topics.json");
const BATCH_STATE = path.join(HERE, ".batch-id");

const MODEL = "claude-opus-5";
const tax = JSON.parse(fs.readFileSync(TAXONOMY, "utf8"));
const SUBJECT_KEYS = Object.keys(tax.subjects);

// ---------------------------------------------------------------- corpus

function loadItems() {
  const data = JSON.parse(fs.readFileSync(CORPUS, "utf8"));
  const seen = new Set();
  const items = [];
  for (const run of data.runs || []) {
    for (const [abbr, list] of Object.entries(run.states || {})) {
      for (const it of list) {
        const id = `${it.url || ""}|${it.title || ""}`;
        if (seen.has(id)) continue;
        seen.add(id);
        items.push({ id, abbr, title: it.title || "", summary: it.summary || "", source: it.source || "" });
      }
    }
  }
  return items;
}

// ---------------------------------------------------------------- prompt

// Built once and byte-identical across every request so the batch shares one
// cached prefix. Nothing volatile may enter this string.
function systemPrompt() {
  const subjects = SUBJECT_KEYS.map((k) => {
    const s = tax.subjects[k];
    return `- ${k} (${s.label})\n    IS: ${s.definition}\n    NOT: ${s.not}`;
  }).join("\n");

  const engagement = Object.entries(tax.engagement)
    .map(([k, v]) => `- ${k}: ${v}`).join("\n");
  const modes = Object.entries(tax.modes)
    .map(([k, v]) => `- ${k}: ${v}`).join("\n");

  return `You classify US election and voting news items for a non-partisan reference site.

You will be given one news item: a US state, a headline, and a short summary. Classify it.

SUBJECTS -- choose every subject the item is genuinely about, or none.
${subjects}

Rules for subjects:
- Assign a subject only if the item is substantively about it. A passing mention in a list is not enough.
- Prefer the specific subject over the general one. Use election_admin only when no specific subject fits.
- Most items have one or two subjects. Three is unusual. Never pad the list.
- If the item is off-topic (see below), leave subjects empty.

ENGAGEMENT -- exactly one:
${engagement}

The engagement field carries real analytical weight. A voter guide that explains a
state's existing ID rule is "descriptive". A bill to create or repeal that rule, or a
suit over it, is "conflict". Judge what the ITEM is about, not whether the underlying
rule is contested somewhere else.

MODES -- choose every one that applies, or none:
${modes}

OFF_TOPIC -- ${tax.off_topic}

CONFIDENCE -- "high" when the headline and summary state the subject plainly;
"medium" when you inferred it; "low" when the text is too thin to be sure. Be honest:
low confidence is more useful than a confident guess, because low-confidence items are
audited separately.

Classify only what the text supports. Do not use outside knowledge about the state.`;
}

const TOOL = {
  name: "record_classification",
  description: "Record the classification of one news item.",
  strict: true,
  input_schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      subjects: {
        type: "array",
        items: { type: "string", enum: SUBJECT_KEYS },
        description: "Every subject the item is substantively about. Empty if off-topic or none apply.",
      },
      engagement: { type: "string", enum: ["conflict", "descriptive", "none"] },
      modes: {
        type: "array",
        items: { type: "string", enum: ["litigation", "legislation", "federal"] },
      },
      off_topic: { type: "boolean" },
      confidence: { type: "string", enum: ["high", "medium", "low"] },
    },
    required: ["subjects", "engagement", "modes", "off_topic", "confidence"],
  },
};

function userContent(it) {
  return `State: ${it.abbr}\nSource: ${it.source}\nHeadline: ${it.title}\n\nSummary: ${it.summary}`;
}

function requestParams(it) {
  return {
    model: MODEL,
    max_tokens: 2000,
    system: [{ type: "text", text: systemPrompt(), cache_control: { type: "ephemeral" } }],
    output_config: { effort: "low" },
    tools: [TOOL],
    tool_choice: { type: "tool", name: "record_classification" },
    messages: [{ role: "user", content: userContent(it) }],
  };
}

function extract(message) {
  const block = (message?.content || []).find((b) => b.type === "tool_use");
  return block ? block.input : null;
}

// ---------------------------------------------------------------- modes

async function smoke(client, n) {
  const items = loadItems();
  const pick = [];
  const step = Math.floor(items.length / n) || 1;
  for (let i = 0; i < items.length && pick.length < n; i += step) pick.push(items[i]);

  console.log(`Smoke test: ${pick.length} items, model ${MODEL}\n`);
  let inTok = 0, outTok = 0, cached = 0;

  for (const it of pick) {
    const res = await client.messages.create(requestParams(it));
    const out = extract(res);
    inTok += res.usage.input_tokens;
    outTok += res.usage.output_tokens;
    cached += res.usage.cache_read_input_tokens || 0;
    console.log(`[${it.abbr}] ${it.title.slice(0, 78)}`);
    console.log(`      ${JSON.stringify(out)}\n`);
  }

  console.log(`tokens: ${inTok} in (${cached} from cache), ${outTok} out`);

  // Opus 5: $5/MTok in, $25/MTok out. Cache READS bill at ~0.1x input; the Batch
  // API halves everything. Pricing cached tokens at full rate overstates the
  // total roughly threefold, since the taxonomy prefix dominates the input.
  const full = loadItems().length;
  const sampled = pick.length;
  const IN = 5 / 1e6, OUT = 25 / 1e6, BATCH = 0.5, CACHE_READ = 0.1;
  const lo =
    ((inTok / sampled) * full * IN +
      (cached / sampled) * full * IN * CACHE_READ +
      (outTok / sampled) * full * OUT) * BATCH;
  // Upper bound: batches can run for hours, so a 5-minute cache prefix may expire
  // and be re-written many times. Worst case every request pays full input rate.
  const hi =
    (((inTok + cached) / sampled) * full * IN + (outTok / sampled) * full * OUT) * BATCH;
  console.log(
    `estimated full run (${full} items, batch pricing): ~$${lo.toFixed(2)} if the ` +
      `taxonomy prefix stays cached, up to ~$${hi.toFixed(2)} if it never does.`
  );
  console.log(`\nIf the classifications above look right, run:  node classify.mjs --run`);
}

async function run(client) {
  const items = loadItems();
  console.log(`Submitting ${items.length} items as one batch...`);

  const batch = await client.messages.batches.create({
    requests: items.map((it, i) => ({
      custom_id: `i${i}`,
      params: requestParams(it),
    })),
  });

  fs.writeFileSync(BATCH_STATE, JSON.stringify({ id: batch.id, ids: items.map((x) => x.id) }));
  console.log(`batch ${batch.id} submitted. Polling (safe to Ctrl-C; resume with --resume ${batch.id})`);
  await collect(client, batch.id, items.map((x) => x.id));
}

async function collect(client, batchId, ids) {
  if (!ids) {
    const st = JSON.parse(fs.readFileSync(BATCH_STATE, "utf8"));
    ids = st.ids;
  }

  for (;;) {
    const b = await client.messages.batches.retrieve(batchId);
    const c = b.request_counts;
    process.stdout.write(
      `\r${b.processing_status}  succeeded ${c.succeeded}  errored ${c.errored}  processing ${c.processing}   `
    );
    if (b.processing_status === "ended") break;
    await new Promise((r) => setTimeout(r, 20000));
  }
  console.log("\nbatch ended, collecting results...");

  const out = {};
  let ok = 0, bad = 0;
  // Results arrive in ANY order -- key by custom_id, never by position.
  for await (const r of await client.messages.batches.results(batchId)) {
    const idx = Number(r.custom_id.slice(1));
    const id = ids[idx];
    if (r.result.type !== "succeeded") {
      bad++;
      out[id] = { error: r.result.type };
      continue;
    }
    const parsed = extract(r.result.message);
    if (!parsed) { bad++; out[id] = { error: "no_tool_use" }; continue; }
    out[id] = parsed;
    ok++;
  }

  fs.writeFileSync(OUT, JSON.stringify({
    version: tax.version,
    model: MODEL,
    generated: new Date().toISOString().slice(0, 10),
    batch: batchId,
    items: out,
  }, null, 1));

  console.log(`wrote ${path.relative(process.cwd(), OUT)} -- ${ok} classified, ${bad} failed`);
  if (bad) console.log(`  (failed items are recorded with an "error" field; re-run to retry them)`);
}

// ---------------------------------------------------------------- main

const argv = process.argv.slice(2);

// The SDK throws a bare Error from header-building when no credential resolves,
// which bypasses the typed handlers below and prints a stack trace. Check first.
if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
  console.error(
    `No Anthropic credentials found.\n\n` +
      `  cp .env.example .env      then paste your key into .env\n` +
      `  export ANTHROPIC_API_KEY=sk-ant-...   (alternative, per shell)\n\n` +
      `Get a key at https://console.anthropic.com -> Settings -> API Keys.\n` +
      `API billing is separate from a Claude.ai or Claude Code subscription.`
  );
  process.exit(1);
}

const client = new Anthropic();

try {
  if (argv[0] === "--smoke") {
    await smoke(client, Number(argv[1] || 8));
  } else if (argv[0] === "--run") {
    await run(client);
  } else if (argv[0] === "--resume") {
    await collect(client, argv[1]);
  } else {
    console.log("usage: classify.mjs --smoke [N] | --run | --resume <batch_id>");
    process.exit(1);
  }
} catch (err) {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error("Authentication failed. Set ANTHROPIC_API_KEY, or run `ant auth login`.");
  } else if (err instanceof Anthropic.RateLimitError) {
    console.error("Rate limited. Wait and retry; batches are resumable with --resume.");
  } else if (err instanceof Anthropic.APIError) {
    console.error(`API error ${err.status}: ${err.message}`);
  } else {
    throw err;
  }
  process.exit(1);
}
