const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	// devtool: 'eval-source-map', // More accurate source maps, but slow build.
	devtool: 'eval-cheap-module-source-map', // Less accurate source maps, but faster build times.
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
			logging: 'warn',
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
