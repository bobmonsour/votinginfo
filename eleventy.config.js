export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ "public/": "/" });

	eleventyConfig.addFilter("lower", (str) => (str || "").toLowerCase());

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
