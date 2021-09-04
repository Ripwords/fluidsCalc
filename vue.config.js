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
					installationIcon: "public/assets/icon/favicon.png",
					uninstallerIcon: "public/assets/icon/favicon.png",
				},
			},
		},
	},
}
