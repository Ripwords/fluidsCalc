module.exports = {
	publicPath: "/fluidsCalc/",
	configureWebpack: {
		devServer: {
			historyApiFallback: true,
		},
	},
	pwa: {
		name: "fluidsCalc",
		themeColor: "#262626",
		msTileColor: "#000000",
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: "black",
	}
}
