#!/usr/bin/env node
/**
 * Measure classifier accuracy against a hand-labelled sample.
 *
 *   node validate.mjs --sample 150     Draw a stratified sample and write
 *                                      validation-sample.json for hand coding.
 *                                      Model labels are NOT included -- coding
 *                                      blind is the point; seeing the model's
 *                                      answer first anchors the coder and
 *                                      inflates agreement.
 *   node validate.mjs --score          Compare hand labels to model labels and
 *                                      print precision / recall / F1 per subject,
 *                                      engagement accuracy, and Cohen's kappa.
 *
 * Publish the numbers this prints. A classifier without a measured error rate
 * cannot support a published claim.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CORPUS = path.join(HERE, "..", "..", "_data", "stateNews.json");
const TOPICS = path.join(HERE, "topics.json");
const TAXONOMY = path.join(HERE, "taxonomy.json");
const SAMPLE = path.join(HERE, "validation-sample.json");

const tax = JSON.parse(fs.readFileSync(TAXONOMY, "utf8"));
const SUBJECTS = Object.keys(tax.subjects);

function loadItems() {
  const data = JSON.parse(fs.readFileSync(CORPUS, "utf8"));
  const seen = new Set(), items = [];
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

// Deterministic PRNG so a given seed always draws the same sample.
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sample(n, seed = 42) {
  const items = loadItems();
  const topics = JSON.parse(fs.readFileSync(TOPICS, "utf8")).items;
  const rand = mulberry32(seed);

  // Stratify by predicted subject so rare subjects get audited too -- a uniform
  // random draw would give ~2 felony_rights items and tell us nothing about them.
  const bySubject = new Map(SUBJECTS.map((s) => [s, []]));
  const none = [];
  for (const it of items) {
    const t = topics[it.id];
    if (!t || t.error) continue;
    if (!t.subjects?.length) { none.push(it); continue; }
    for (const s of t.subjects) bySubject.get(s)?.push(it);
  }

  const perSubject = Math.max(4, Math.floor((n * 0.85) / SUBJECTS.length));
  const picked = new Map();
  for (const [, pool] of bySubject) {
    const shuffled = [...pool].sort(() => rand() - 0.5);
    for (const it of shuffled.slice(0, perSubject)) picked.set(it.id, it);
  }
  const noneShuffled = [...none].sort(() => rand() - 0.5);
  for (const it of noneShuffled.slice(0, Math.max(6, Math.round(n * 0.15)))) picked.set(it.id, it);

  const out = [...picked.values()].map((it) => ({
    id: it.id,
    state: it.abbr,
    source: it.source,
    headline: it.title,
    summary: it.summary,
    // --- fill these in by hand; see taxonomy.json for definitions ---
    human_subjects: [],
    human_engagement: "",
    human_off_topic: null,
    coded: false,
  }));

  fs.writeFileSync(SAMPLE, JSON.stringify(out, null, 1));
  console.log(`wrote ${path.relative(process.cwd(), SAMPLE)} -- ${out.length} items to code`);
  console.log(`\nFor each item set human_subjects, human_engagement, human_off_topic,`);
  console.log(`then set coded: true. Valid subjects:\n  ${SUBJECTS.join(", ")}`);
  console.log(`Engagement: conflict | descriptive | none`);
  console.log(`\nThen: node validate.mjs --score`);
}

function f1(tp, fp, fn) {
  const p = tp + fp ? tp / (tp + fp) : 0;
  const r = tp + fn ? tp / (tp + fn) : 0;
  return { p, r, f: p + r ? (2 * p * r) / (p + r) : 0 };
}

function score() {
  const rows = JSON.parse(fs.readFileSync(SAMPLE, "utf8")).filter((r) => r.coded);
  if (!rows.length) { console.error("No coded rows. Set coded:true on items you've labelled."); process.exit(1); }
  const topics = JSON.parse(fs.readFileSync(TOPICS, "utf8")).items;

  console.log(`Scored against ${rows.length} hand-coded items.\n`);

  // ---- per-subject
  const stat = new Map(SUBJECTS.map((s) => [s, { tp: 0, fp: 0, fn: 0 }]));
  for (const r of rows) {
    const model = new Set(topics[r.id]?.subjects || []);
    const human = new Set(r.human_subjects || []);
    for (const s of SUBJECTS) {
      const m = model.has(s), h = human.has(s);
      if (m && h) stat.get(s).tp++;
      else if (m && !h) stat.get(s).fp++;
      else if (!m && h) stat.get(s).fn++;
    }
  }

  console.log("subject                 prec   recall   F1    n(human)");
  console.log("-".repeat(58));
  let microTp = 0, microFp = 0, microFn = 0;
  for (const s of SUBJECTS) {
    const { tp, fp, fn } = stat.get(s);
    microTp += tp; microFp += fp; microFn += fn;
    if (tp + fp + fn === 0) continue;
    const { p, r, f } = f1(tp, fp, fn);
    const flag = f < 0.6 && tp + fn >= 3 ? "  <-- weak" : "";
    console.log(
      `${s.padEnd(22)} ${(100 * p).toFixed(0).padStart(4)}%  ${(100 * r).toFixed(0).padStart(4)}%  ${(100 * f).toFixed(0).padStart(4)}%  ${String(tp + fn).padStart(6)}${flag}`
    );
  }
  const micro = f1(microTp, microFp, microFn);
  console.log("-".repeat(58));
  console.log(`${"MICRO-AVERAGE".padEnd(22)} ${(100 * micro.p).toFixed(0).padStart(4)}%  ${(100 * micro.r).toFixed(0).padStart(4)}%  ${(100 * micro.f).toFixed(0).padStart(4)}%`);

  // ---- engagement: the field the agenda-map analysis leans on hardest
  let engOk = 0;
  const confusion = new Map();
  for (const r of rows) {
    const m = topics[r.id]?.engagement, h = r.human_engagement;
    if (m === h) engOk++;
    const k = `${h} -> ${m}`;
    confusion.set(k, (confusion.get(k) || 0) + 1);
  }
  console.log(`\nEngagement accuracy: ${(100 * engOk / rows.length).toFixed(1)}%  (${engOk}/${rows.length})`);
  const wrong = [...confusion.entries()].filter(([k]) => k.split(" -> ")[0] !== k.split(" -> ")[1]);
  if (wrong.length) {
    console.log("  most common confusions (human -> model):");
    wrong.sort((a, b) => b[1] - a[1]).slice(0, 5).forEach(([k, v]) => console.log(`    ${k}: ${v}`));
  }

  // ---- off-topic + kappa on that binary call
  let a = 0, b = 0, c = 0, d = 0;
  for (const r of rows) {
    const m = !!topics[r.id]?.off_topic, h = !!r.human_off_topic;
    if (m && h) a++; else if (m && !h) b++; else if (!m && h) c++; else d++;
  }
  const n = rows.length;
  const po = (a + d) / n;
  const pe = ((a + b) * (a + c) + (c + d) * (b + d)) / (n * n);
  const kappa = pe === 1 ? 1 : (po - pe) / (1 - pe);
  console.log(`\nOff-topic agreement: ${(100 * po).toFixed(1)}%   Cohen's kappa: ${kappa.toFixed(3)}`);

  console.log(`\n--- Report these figures alongside any published claim. ---`);
  if (micro.f < 0.7) console.log(`WARNING: micro-F1 below 0.70. Revise taxonomy definitions before publishing.`);
}

const argv = process.argv.slice(2);
if (argv[0] === "--sample") sample(Number(argv[1] || 150), Number(argv[2] || 42));
else if (argv[0] === "--score") score();
else { console.log("usage: validate.mjs --sample [N] [seed] | --score"); process.exit(1); }
