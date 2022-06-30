const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
	use: [
		{
			loader: 'file-loader',
			options: {
				outputPath: (url) => url.replace(/src\//, ''),
				name: '[path][name].[ext]',
				esModule: false,
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
