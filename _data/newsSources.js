import fs from "node:fs";

// News outlets that republish other outlets' reporting. An item's URL on one
// of these hosts points at the republisher, not the source, so linking its
// home page would be misleading — drop those items from the source list.
const REPUBLISHERS = new Set(["yahoo.com", "msn.com", "news.yahoo.com"]);

// Derive the list of news sources per state from the captured news corpus.
// Nothing is stored: the full corpus is rescanned on every build (~5ms over
// 3,700 items), so a source appears here on the first build after the first
// news item that cites it. See CLAUDE.md → "News sources by state".
export default function () {
	let news, states;
	try {
		news = JSON.parse(fs.readFileSync("_data/stateNews.json", "utf8"));
		states = JSON.parse(fs.readFileSync("_data/states.json", "utf8"));
	} catch {
		return [];
	}

	// abbr -> host -> { names: Map(name -> count), hosts: Map(fullHost -> count) }
	const byState = new Map();

	for (const run of news.runs || []) {
		for (const [abbr, items] of Object.entries(run.states || {})) {
			for (const item of items || []) {
				if (!item.source || !item.url) continue;

				let url;
				try {
					url = new URL(item.url);
				} catch {
					continue; // unparseable URL — no home page to derive
				}
				const fullHost = url.hostname.toLowerCase();
				const host = fullHost.replace(/^www\./, "");
				if (REPUBLISHERS.has(host)) continue;

				if (!byState.has(abbr)) byState.set(abbr, new Map());
				const hosts = byState.get(abbr);
				if (!hosts.has(host)) hosts.set(host, { names: new Map(), hosts: new Map() });
				const entry = hosts.get(host);

				const name = item.source.trim();
				entry.names.set(name, (entry.names.get(name) || 0) + 1);
				entry.hosts.set(fullHost, (entry.hosts.get(fullHost) || 0) + 1);
			}
		}
	}

	// Most-used value, ties broken alphabetically so the same corpus always
	// produces the same output (no mystery diffs between builds).
	const mostUsed = (counts) =>
		[...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];

	const result = [];
	for (const state of states) {
		const hosts = byState.get(state.abbreviation);
		if (!hosts) continue;

		// One row per host, labeled with that host's most-used source name.
		let sources = [...hosts.entries()].map(([host, entry]) => ({
			name: mostUsed(entry.names),
			host,
			url: `https://${mostUsed(entry.hosts)}/`,
		}));

		// Hosts that resolved to the same display name are the same outlet on
		// different subdomains (npr.org / apps.npr.org). Keep the shortest host.
		const byName = new Map();
		for (const source of sources) {
			const existing = byName.get(source.name);
			if (!existing || source.host.length < existing.host.length) {
				byName.set(source.name, source);
			}
		}
		sources = [...byName.values()].sort((a, b) =>
			a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
		);

		result.push({ state: state.state, abbr: state.abbreviation, sources });
	}

	return result.sort((a, b) => a.state.localeCompare(b.state));
}
