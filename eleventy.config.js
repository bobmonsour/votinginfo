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
