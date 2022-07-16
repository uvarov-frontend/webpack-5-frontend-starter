const PATHS = require('../paths');

module.exports = {
	test: /\.tsx?$/i,
	include: PATHS.src,
	exclude: /node_modules/,
	loader: 'ts-loader',
};
