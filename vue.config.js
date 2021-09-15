module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/fluidsCalc/'
    : '/',
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
					oneClick: false,
				},
			},
		},
	},
}
