const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlBeautifierPlugin = require('html-beautifier-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

const common = require('./webpack.common.js');

const PRETTY_HTML = process.env.PRETTY_HTML === 'true';

module.exports = merge(common, {
	// devtool: false, // Completely disable source map.
	devtool: 'nosources-source-map', // Show error in source file but don't download source code.
	output: {
		filename: `${common.externals.paths.assets.scripts}/[name].[contenthash:6].js`,
	},
	performance: {
		maxEntrypointSize: 1024000,
		maxAssetSize: 1024000,
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				extractComments: false,
				terserOptions: {
					format: {
						comments: false,
					},
				},
			}),
			PRETTY_HTML ? new HtmlBeautifierPlugin({
				html: {
					end_with_newline: true,
					indent_size: 2,
					indent_with_tabs: true,
					indent_inner_html: true,
					preserve_newlines: true,
					inline: [],
				},
			}) : new HtmlMinimizerPlugin({
				parallel: true,
				minimizerOptions: {
					collapseWhitespace: true,
					conservativeCollapse: false,
				},
			}),
		],
	},
	plugins: [
		new BundleStatsWebpackPlugin({
			baseline: true,
		}),
		new CompressionPlugin({
			test: /\.(js|css|html)$/i,
		}),
		new MiniCssExtractPlugin({
			filename: `${common.externals.paths.assets.styles}/[name].[contenthash:6].css`,
			linkType: false,
		}),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		}),
	],
});
