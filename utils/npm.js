/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	npm: path.resolve(__dirname, '../npm'),
};
const COPY_FILES = [
	{
		from: `${PATHS.npm}/src/static`,
		globOptions: {
			ignore: ['**/info.txt'],
		},
	},
];
const COPY = (file) => COPY_FILES.push({
	from: file,
	to: 'src',
	info: { minimized: true },
});
const ENTRY_FILES = fs.readdirSync(`${PATHS.npm}/src/entry`);
const ENTRY = {};

ENTRY_FILES.forEach((entry) => {
	const ENTRYS = require(`${PATHS.npm}/src/entry/${entry}`);
	ENTRY[entry.replace(/.js/, '.min.js')] = `${PATHS.src}${ENTRYS.js}`;
	if (ENTRYS.style) ENTRY[entry.replace(/.js/, '')] = `${PATHS.src}${ENTRYS.style}`;
	COPY(`${PATHS.src}${ENTRYS.js}`);
	COPY(`${PATHS.src}${ENTRYS.style}`);
});

module.exports = {
	mode: 'production',
	target: 'web',
	devtool: false,
	performance: {
		hints: false,
	},
	entry: ENTRY,
	output: {
		filename: '[name]',
		path: `${PATHS.npm}/build`,
		clean: false,
		publicPath: '/',
		library: 'my-library',
		libraryTarget: 'umd',
	},
	resolve: {
		alias: {
			'@': PATHS.src,
		},
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				extractComments: false,
			}),
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: () => fs.readFileSync(`${PATHS.npm}/src/static/info.txt`, 'utf8').replace(/\n/g, ''),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].min.css',
			linkType: false,
		}),
		new CopyWebpackPlugin({
			patterns: COPY_FILES,
		}),
		new CleanWebpackPlugin({
			protectWebpackAssets: false,
			cleanAfterEveryBuildPatterns: ENTRY_FILES.map((entry) => entry.replace(/.js/, '')),
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				include: PATHS.src,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							modules: {
								auto: true,
								localIdentName: '[local]__[hash:base64:5]',
							},
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false,
						},
					},
				],
			},
		],
	},
};
