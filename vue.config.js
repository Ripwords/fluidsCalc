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
				},
				nsis: {
					allowToChangeInstallationDirectory: true,
					installerHeaderIcon: "public/assets/icon/favicon.png",
				},
			},
		},
	},
}
