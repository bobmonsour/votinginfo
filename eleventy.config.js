export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ "public/": "/" });

	eleventyConfig.addFilter("lower", (str) => (str || "").toLowerCase());

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
