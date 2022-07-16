const PATHS = require('../paths');

module.exports = {
	test: /\.(ts|js)x?$/i,
	include: PATHS.src,
	exclude: /node_modules/,
	loader: 'babel-loader',
};
