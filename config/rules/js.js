const PATHS = require('../paths');

module.exports = {
	test: /\.js$/i,
	include: PATHS.src,
	exclude: /node_modules/,
	loader: 'babel-loader',
};
