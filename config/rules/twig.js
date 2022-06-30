module.exports = {
	test: /\.twig$/i,
	use: [
		{
			loader: 'underscore-template-loader',
		},
		{
			loader: 'twig-html-loader',
		},
	],
};
