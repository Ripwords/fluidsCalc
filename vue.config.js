module.exports = {
	configureWebpack: {
		devServer: {
			historyApiFallback: true,
		},
	},
	pluginOptions: {
		electronBuilder: {
			preload: "src/preload.js",
			builderOptions: {
				win: {
					icon: "public/favicon.png",
				},
			},
		},
	},
}
