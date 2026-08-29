#!/usr/bin/env node
/**
 * Agenda-map analysis over the LLM-classified corpus.
 *
 * Within-state topic SHARES only -- raw per-state volume correlates 0.871 with
 * how often the research runs happened to search a state, so counts would measure
 * cadence, not behaviour. Bloc means weight each state equally. DC is excluded:
 * the skill's National-stories rule files federal stories there.
 *
 * Reference data provenance:
 *   2024 winner  -- verified state-by-state against published returns.
 *   Governor     -- as of January 2026; no gubernatorial elections since.
 *   Legislature  -- post-2024; LOWER CONFIDENCE, sources disagree on split
 *                   chambers and nominal counts mislead where coalitions govern.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const corpus = JSON.parse(fs.readFileSync(path.join(HERE, "..", "..", "_data", "stateNews.json"), "utf8"));
const topics = JSON.parse(fs.readFileSync(path.join(HERE, "topics.json"), "utf8")).items;
const tax = JSON.parse(fs.readFileSync(path.join(HERE, "taxonomy.json"), "utf8"));
const SUBJECTS = Object.keys(tax.subjects);

const TRUMP = new Set("AL AK AZ AR FL GA ID IN IA KS KY LA MI MS MO MT NE NV NC ND OH OK PA SC SD TN TX UT WV WI WY".split(" "));
const HARRIS = new Set("CA CO CT DE HI IL ME MD MA MN NH NJ NM NY OR RI VT VA WA".split(" "));
const GOV_R = new Set("AL AK AR FL GA ID IN IA LA MS MO MT NE NV NH ND OH OK SC SD TN TX UT VT WV WY".split(" "));
const GOV_D = new Set("AZ CA CO CT DE HI IL KS KY ME MD MA MI MN NJ NM NY NC OR PA RI VA WA WI".split(" "));
const LEG_R = new Set("AL AK AZ AR FL GA ID IN IA KS KY LA MS MO MT ND OH OK SC SD TN TX UT WV WI WY".split(" "));
const LEG_D = new Set("CA CO CT DE HI IL MD MA NV NM NY OR RI VA WA ME VT".split(" "));

// ---- join classifications back to states
const seen = new Set();
const rows = [];
for (const run of corpus.runs || []) {
  for (const [abbr, list] of Object.entries(run.states || {})) {
    for (const it of list) {
      const id = `${it.url || ""}|${it.title || ""}`;
      if (seen.has(id)) continue;
      seen.add(id);
      const t = topics[id];
      if (!t || t.error) continue;
      rows.push({ abbr, ...t });
    }
  }
}

const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;

function permTest(a, b, iters = 20000) {
  const obs = Math.abs(mean(a) - mean(b));
  const pool = [...a, ...b];
  let s = 7, hits = 0;
  const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  for (let i = 0; i < iters; i++) {
    for (let j = pool.length - 1; j > 0; j--) {
      const k = Math.floor(rnd() * (j + 1));
      [pool[j], pool[k]] = [pool[k], pool[j]];
    }
    if (Math.abs(mean(pool.slice(0, a.length)) - mean(pool.slice(a.length))) >= obs - 1e-12) hits++;
  }
  return hits / iters;
}

function lnFact(n) { let r = 0; for (let i = 2; i <= n; i++) r += Math.log(i); return r; }
function lnC(n, k) { return lnFact(n) - lnFact(k) - lnFact(n - k); }
function fisher(a, b, c, d) {
  const n = a + b + c + d;
  const p0 = Math.exp(lnC(a + b, a) + lnC(c + d, c) - lnC(n, a + c));
  let p = 0;
  for (let i = 0; i <= Math.min(a + b, a + c); i++) {
    const j = a + c - i;
    if (j < 0 || j > c + d) continue;
    const pi = Math.exp(lnC(a + b, i) + lnC(c + d, j) - lnC(n, a + c));
    if (pi <= p0 + 1e-12) p += pi;
  }
  return Math.min(1, p);
}

// filter: which rows count toward a topic (all, or only live conflict)
function analyse(axis, A, B, la, lb, filter, label) {
  const per = new Map(), hit = new Map();
  for (const r of rows) {
    per.set(r.abbr, (per.get(r.abbr) || 0) + 1);
    if (!filter(r)) continue;
    for (const s of r.subjects || []) {
      if (!hit.has(s)) hit.set(s, new Map());
      hit.get(s).set(r.abbr, (hit.get(s).get(r.abbr) || 0) + 1);
    }
  }
  const states = [...per.keys()].filter((s) => s !== "DC");
  const a = states.filter((s) => A.has(s)), b = states.filter((s) => B.has(s));

  console.log(`\n${"=".repeat(74)}`);
  console.log(`${axis}   ${label}   (${la} n=${a.length}, ${lb} n=${b.length})`);
  console.log("=".repeat(74));
  console.log(`${"topic".padEnd(21)}${la.padStart(8)}${lb.padStart(8)}${"diff".padStart(8)}${"perm p".padStart(9)}   presence      Fisher p`);

  const out = [];
  for (const s of SUBJECTS) {
    const m = hit.get(s) || new Map();
    const xa = a.map((x) => (m.get(x) || 0) / per.get(x));
    const xb = b.map((x) => (m.get(x) || 0) / per.get(x));
    const pa = a.filter((x) => m.get(x)).length, pb = b.filter((x) => m.get(x)).length;
    out.push({ s, ma: mean(xa), mb: mean(xb), pp: permTest(xa, xb), pa, na: a.length, pb, nb: b.length,
               fp: fisher(pa, a.length - pa, pb, b.length - pb) });
  }
  const bonf = 0.05 / SUBJECTS.length;
  out.sort((x, y) => x.fp - y.fp);
  for (const o of out) {
    const mark = o.fp < bonf ? " **" : o.fp < 0.05 ? " *" : "";
    console.log(
      `${o.s.padEnd(21)}${(100 * o.ma).toFixed(1).padStart(7)}%${(100 * o.mb).toFixed(1).padStart(7)}%` +
      `${((o.ma - o.mb) * 100 >= 0 ? "+" : "") + ((o.ma - o.mb) * 100).toFixed(1) + "pt"}`.padStart(9) +
      `${o.pp.toFixed(3).padStart(9)}   ${String(o.pa).padStart(2)}/${o.na} vs ${String(o.pb).padStart(2)}/${o.nb}   ${o.fp.toFixed(4)}${mark}`
    );
  }
  console.log(`  ** survives Bonferroni (p<${bonf.toFixed(4)});  * p<0.05 uncorrected`);
  return out;
}

const ALL = () => true;
const CONFLICT = (r) => r.engagement === "conflict";
const DESCRIPTIVE = (r) => r.engagement === "descriptive";

analyse("2024 presidential vote", TRUMP, HARRIS, "Trump", "Harris", ALL, "ALL items");
analyse("2024 presidential vote", TRUMP, HARRIS, "Trump", "Harris", CONFLICT, "LIVE CONFLICT only");
analyse("2024 presidential vote", TRUMP, HARRIS, "Trump", "Harris", DESCRIPTIVE, "DESCRIPTIVE only");
analyse("governor party", GOV_R, GOV_D, "R gov", "D gov", CONFLICT, "LIVE CONFLICT only");
analyse("legislature control", LEG_R, LEG_D, "R leg", "D leg", CONFLICT, "LIVE CONFLICT only");
