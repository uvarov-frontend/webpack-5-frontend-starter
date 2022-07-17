/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */

const fs = require('fs');
const readDir = require('readdir');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = require('./paths');
const ALIAS = require('./alias');

const RULES = [];
fs.readdirSync(PATHS.rules).filter((filename) => RULES.push(require(`${PATHS.rules}/${filename}`)));

const TEMP = process.env.npm_package_scripts_temp.split('TEMP=')[1].split(' ')[0] !== 'false';
const ENTRY = {
	main: `${PATHS.entry.catalog}/${TEMP !== false && TEMP !== 'false' ? PATHS.entry.temp : PATHS.entry.main}`,
};

const PAGES_DIR = `${PATHS.src}/${PATHS.assets.templates}/${PATHS.assets.pages}`;
const DEVELOP_PAGES = fs.readdirSync(PAGES_DIR).filter((filename) => filename.startsWith('_'));
const PAGES = DEVELOP_PAGES.length > 0 ? DEVELOP_PAGES : readDir.readSync(PAGES_DIR, ['**.pug', '**.twig', '**.html']);

PAGES.forEach((page) => {
	const PAGE_NAME = page.replace(/^_/g, '').replace(/\.(pug|html|twig)/g, '');
	const ENTRY_PAGES = readDir.readSync(`${PATHS.entry.catalog}/${PATHS.entry.pages}`, ['**.js']);

	if (ENTRY_PAGES.includes(`${PAGE_NAME}.js`)) {
		ENTRY[PAGE_NAME] = {
			dependOn: PATHS.entry.main.replace(/\.(js)/g, ''),
			import: `${PATHS.entry.catalog}/${PATHS.entry.pages}/${PAGE_NAME}.js`,
		};
	} else {
		console.error('\x1b[31m', `Ошибка! Не найдена точка входа для "${page}", страница будет пропущена.`, '\x1b[0m');
		PAGES.length = 0;
	}
});

const getFavicon = () => {
	const favicon = readDir.readSync(`${PATHS.src}/${PATHS.assets.static}`, ['favicon.*'])[0];
	return `${PATHS.src}/${PATHS.assets.static}/${favicon}`;
};

module.exports = {
	mode: process.env.NODE_ENV,
	target: 'web',
	stats: 'errors-warnings',
	entry: ENTRY,
	externals: {
		paths: PATHS,
	},
	output: {
		path: PATHS.output,
		clean: true,
		publicPath: '/',
	},
	resolve: {
		alias: ALIAS,
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: RULES,
	},
	plugins: [
		new webpack.ProgressPlugin({
			percentBy: 'entries',
		}),
		new VueLoaderPlugin(),
		new CopyWebpackPlugin({
			patterns: [{
				from: `${PATHS.src}/${PATHS.assets.static}`,
				to: PATHS.output,
				globOptions: {
					ignore: ['**/favicon.*'],
				},
			}],
		}),
		...PAGES.map((page) => {
			const PAGE_NAME = page.replace(/^_/g, '').replace(/\.(pug|html|twig)/g, '');
			return new HtmlWebpackPlugin({
				template: `${PAGES_DIR}/${page}`,
				filename: `./${PAGE_NAME}.html`,
				chunks: ['main', `${PAGE_NAME}`],
				favicon: getFavicon(),
				minify: false,
				cache: false,
				inject: false,
			});
		}),
	],
};
