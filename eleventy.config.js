export default function (eleventyConfig) {
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
		const items = [];
		for (const abbr of Object.keys(latest.states || {})) {
			if (!slugMap[abbr]) continue;
			for (const item of latest.states[abbr]) {
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
