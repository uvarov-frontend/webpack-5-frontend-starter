module.exports = {
	test: /\.(woff|woff2|eot|ttf|otf)$/i,
	use: [
		{
			loader: 'file-loader',
			options: {
				esModule: false,
				outputPath: (url, resourcePath, context) => resourcePath.replace(context, '').replace(/\/src\//i, ''),
			},
		},
	],
};
