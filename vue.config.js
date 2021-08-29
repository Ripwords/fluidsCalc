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
					icon: "public/assets/icon/favicon.png",
					publish: [
						{
							provider: "github",
							owner: "Ripwords",
							repo: "fluidsCalc",
						},
					],
				},
			},
		},
	},
}