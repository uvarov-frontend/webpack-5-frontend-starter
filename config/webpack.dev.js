const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	target: 'web',
	devtool: 'eval-source-map',
	performance: {
		hints: false,
	},
	output: {
		filename: `${common.externals.paths.assets.scripts}/[name].js`,
	},
	devServer: {
		open: ['index.html'],
		hot: true,
		historyApiFallback: true,
		compress: true,
		allowedHosts: 'all',
		client: {
			logging: 'info',
			overlay: true,
			progress: false,
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${common.externals.paths.assets.styles}/[name].css`,
			linkType: false,
		}),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(false),
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: true,
		}),
	],
});
