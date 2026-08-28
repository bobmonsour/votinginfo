import fs from "node:fs";

// Build-time sanity check: a single national/federal story must not be
// recorded as the news item for many states (see voting-research SKILL.md
// "National stories"). If one story is carried by more than this many states
// in the latest run, the build FAILS loudly so the regression cannot deploy
// silently. The duplication is detected per exact URL and per normalized
// title, so the same headline or the same link spread across states is caught.
const MAX_STATES_PER_STORY = 5;

function checkNewsDuplication() {
	let data;
	try {
		data = JSON.parse(fs.readFileSync("_data/stateNews.json", "utf8"));
	} catch {
		return; // no/unreadable data — nothing to check
	}
	const runs = data.runs || [];
	const latest = runs[runs.length - 1];
	if (!latest || !latest.states) return;

	const norm = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
	const byKey = {}; // story key -> Set of state abbreviations carrying it
	for (const abbr of Object.keys(latest.states)) {
		for (const item of latest.states[abbr] || []) {
			const keys = [];
			if (item.url) keys.push("url:" + item.url);
			if (item.title) keys.push("title:" + norm(item.title));
			for (const key of keys) (byKey[key] ||= new Set()).add(abbr);
		}
	}

	let worst = 0;
	for (const states of Object.values(byKey)) worst = Math.max(worst, states.size);
	console.log(
		`[stateNews] run ${latest.date}: ${Object.keys(latest.states).length} states, top story spans ${worst} state(s) (limit ${MAX_STATES_PER_STORY}).`
	);

	const offenders = Object.entries(byKey)
		.filter(([, s]) => s.size > MAX_STATES_PER_STORY)
		.sort((a, b) => b[1].size - a[1].size);
	if (offenders.length) {
		const lines = offenders
			.map(([key, s]) => `  - ${s.size} states (${[...s].sort().join(", ")})\n      ${key}`)
			.join("\n");
		throw new Error(
			`[stateNews] Duplicate-story check FAILED for run ${latest.date}: a single ` +
				`story is carried by more than ${MAX_STATES_PER_STORY} states. This is the ` +
				`national-story duplication regression — a national/federal event must be ` +
				`recorded for at most one representative state (see voting-research SKILL.md ` +
				`"National stories"). Offending stories:\n${lines}`
		);
	}
}

export default function (eleventyConfig) {
	eleventyConfig.on("eleventy.before", checkNewsDuplication);

	eleventyConfig.addPassthroughCopy({ "public/": "/" });

	eleventyConfig.addFilter("lower", (str) => (str || "").toLowerCase());

	eleventyConfig.addFilter("slug", (str) =>
		(str || "").toLowerCase().replace(/\s+/g, "-")
	);

	eleventyConfig.addFilter("recentNews", (runs, abbr) => {
		const seen = new Set();
		const items = [];
		for (const run of runs || []) {
			for (const item of (run.states && run.states[abbr]) || []) {
				const key = (item.url || "") + "|" + (item.title || "");
				if (!seen.has(key)) {
					seen.add(key);
					items.push(item);
				}
			}
		}
		items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
		return items.slice(0, 4);
	});

	eleventyConfig.addFilter("recentNewsAll", (runs, states, limit) => {
		const slugMap = {};
		const nameMap = {};
		for (const s of states || []) {
			slugMap[s.abbreviation] = (s.state || "").toLowerCase().replace(/\s+/g, "-");
			nameMap[s.abbreviation] = s.state || "";
		}
		const seen = new Set();
		const items = [];
		const reversedRuns = [...(runs || [])].reverse();
		for (const run of reversedRuns) {
			for (const abbr of Object.keys(run.states || {})) {
				if (!slugMap[abbr]) continue;
				for (const item of run.states[abbr]) {
					const key = (item.url || "") + "|" + (item.title || "");
					if (!seen.has(key)) {
						seen.add(key);
						items.push({
							...item,
							stateAbbr: abbr,
							stateSlug: slugMap[abbr],
							stateName: nameMap[abbr],
						});
					}
				}
			}
		}
		items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
		return limit ? items.slice(0, limit) : items;
	});

	eleventyConfig.addFilter("latestVerified", (states) => {
		let max = "";
		for (const s of states || []) {
			if (s.lastVerified && s.lastVerified > max) max = s.lastVerified;
		}
		return max;
	});

	eleventyConfig.addFilter("latestRunNews", (runs, states, limit) => {
		const slugMap = {};
		const nameMap = {};
		for (const s of states || []) {
			slugMap[s.abbreviation] = (s.state || "").toLowerCase().replace(/\s+/g, "-");
			nameMap[s.abbreviation] = s.state || "";
		}
		const latest = (runs || [])[((runs || []).length || 1) - 1];
		if (!latest) return [];
		const seen = new Set();
		const items = [];
		for (const abbr of Object.keys(latest.states || {})) {
			if (!slugMap[abbr]) continue;
			for (const item of latest.states[abbr]) {
				const key = (item.url || "") + "|" + (item.title || "");
				if (seen.has(key)) continue;
				seen.add(key);
				items.push({
					...item,
					stateAbbr: abbr,
					stateSlug: slugMap[abbr],
					stateName: nameMap[abbr],
				});
			}
		}
		items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
		return limit ? items.slice(0, limit) : items;
	});

	eleventyConfig.addFilter("latestRunDate", (runs) => {
		const latest = (runs || [])[((runs || []).length || 1) - 1];
		return latest ? latest.date || "" : "";
	});

	eleventyConfig.addFilter("latestRunAbbrs", (runs) => {
		const latest = (runs || [])[((runs || []).length || 1) - 1];
		if (!latest) return [];
		return Object.keys(latest.states || {});
	});

	eleventyConfig.addFilter("latestRunCount", (runs) => {
		const latest = (runs || [])[((runs || []).length || 1) - 1];
		if (!latest) return 0;
		let count = 0;
		for (const abbr of Object.keys(latest.states || {})) {
			count += (latest.states[abbr] || []).length;
		}
		return count;
	});

	eleventyConfig.addFilter("allNewsCount", (runs, abbr) => {
		const seen = new Set();
		let count = 0;
		for (const run of runs || []) {
			for (const item of (run.states && run.states[abbr]) || []) {
				const key = (item.url || "") + "|" + (item.title || "");
				if (!seen.has(key)) {
					seen.add(key);
					count++;
				}
			}
		}
		return count;
	});

	// The change log tracks changes to voting rules, requirements, and
	// legislation. News runs also append a boilerplate "Added recent news items"
	// entry per state per run, which swamps the substantive entries (~93% of all
	// changes); those are surfaced on the news pages instead. Denylist rather
	// than allowlist so new field names coined by a requirements run show up
	// automatically instead of being silently dropped.
	const NON_SUBSTANTIVE_FIELDS = new Set(["Recent News"]);

	eleventyConfig.addFilter("substantiveChanges", (changes) =>
		(changes || []).filter((c) => !NON_SUBSTANTIVE_FIELDS.has(c.field))
	);

	eleventyConfig.addFilter("groupByDate", (changes) => {
		const map = new Map();
		for (const c of changes) {
			if (!map.has(c.date)) map.set(c.date, []);
			map.get(c.date).push(c);
		}
		return Array.from(map, ([date, items]) => ({ date, items })).reverse();
	});

	eleventyConfig.addFilter("rssDate", (str) => {
		const [y, m, d] = (str || "").split("-");
		const date = new Date(Date.UTC(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10)));
		return date.toUTCString();
	});

	eleventyConfig.addFilter("monthLabel", (str) => {
		const [y, m] = (str || "").split("-");
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return months[parseInt(m, 10) - 1] + " " + y;
	});

	eleventyConfig.addFilter("formatDate", (str) => {
		const [y, m, d] = (str || "").split("-");
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return months[parseInt(m, 10) - 1] + " " + parseInt(d, 10) + ", " + y;
	});

	// Long-form date ("July 31, 2026"). Used only by the home page masthead and the
	// requirements "Last updated" stamp; everywhere else still uses the short formatDate.
	eleventyConfig.addFilter("formatDateLong", (str) => {
		const [y, m, d] = (str || "").split("-");
		const months = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"];
		const name = months[parseInt(m, 10) - 1];
		if (!name || !d || !y) return "";
		return name + " " + parseInt(d, 10) + ", " + y;
	});

	// "06:00" -> "6:00am", "17:00" -> "5:00pm". Returns "" for runs captured before
	// the scheduled-slot time was recorded, so the masthead falls back to date-only.
	eleventyConfig.addFilter("formatTime", (str) => {
		const [h, min] = (str || "").split(":");
		const hour = parseInt(h, 10);
		if (Number.isNaN(hour) || !min) return "";
		const suffix = hour < 12 ? "am" : "pm";
		const display = hour % 12 === 0 ? 12 : hour % 12;
		return display + ":" + min + suffix;
	});

	eleventyConfig.addFilter("latestRunTime", (runs) => {
		const latest = (runs || [])[((runs || []).length || 1) - 1];
		return latest ? latest.time || "" : "";
	});

	return {
		dir: {
			input: "content",
			includes: "../_includes",
			data: "../_data",
			output: "_site",
		},
		templateFormats: ["njk", "md", "html"],
		htmlTemplateEngine: "njk",
	};
}
