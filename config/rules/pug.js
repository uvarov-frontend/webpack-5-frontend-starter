module.exports = {
	test: /\.pug$/i,
	oneOf: [
		{
			resourceQuery: /^\?vue/,
			use: [
				{
					loader: '@uvarov.frontend/pug-bem-plain-loader',
					options: {
						b: true,
					},
				},
			],
		},
		{
			use: [
				{
					loader: 'underscore-template-loader',
				},
				{
					loader: '@uvarov.frontend/pug-bem-plain-loader',
					options: {
						b: true,
					},
				},
			],
		},
	],
};
