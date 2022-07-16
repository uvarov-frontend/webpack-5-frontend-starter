const path = require('path');

module.exports = {
	src: path.resolve(__dirname, '../src'),
	output: path.resolve(__dirname, '../build'),
	rules: path.resolve(__dirname, './rules'),
	entry: {
		catalog: path.resolve(__dirname, './entry'),
		pages: 'pages',
		main: 'main.js',
		temp: 'main.temp.js',
	},
	assets: {
		img: 'img',
		fonts: 'fonts',
		pages: 'pages',
		static: 'static',
		styles: 'styles',
		scripts: 'scripts',
		templates: 'templates',
	},
	temp: "\nimport '@/temp/temp.js';\n",
};
