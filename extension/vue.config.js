module.exports = {
	pages: {
		// override: {
		// 	template: "public/index.html",
		// 	entry: "./src/main.js",
		// 	title: "override",
		// },
	},
	pluginOptions: {
		browserExtension: {
			componentOptions: {
				contentScripts: {
					entries: {
						"content-script": ["src/main.js"],
					},
				},
			},
		},
	},
};
