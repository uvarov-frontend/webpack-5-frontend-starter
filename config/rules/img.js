const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
	use: [
		{
			loader: 'file-loader',
			options: {
				esModule: false,
				outputPath: (url, resourcePath, context) => resourcePath.replace(context, '').replace(/\/src\//i, ''),
			},
		},
		{
			loader: 'image-webpack-loader',
			options: {
				disable: !isProd,
			},
		},
	],
};
