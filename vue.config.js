module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/fluidsCalc/'
    : '/',
	configureWebpack: {
		devServer: {
			historyApiFallback: true,
		},
	},
}
