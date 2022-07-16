module.exports = {
	test: /\.twig$/i,
	use: [
		{
			loader: 'underscore-template-loader',
		},
		{
			loader: 'replace-string-loader',
			options: {
				search: /~(@\/+.*?)\.+(png|svg|jpg|jpeg|gif|webp|avif)/g,
				replace: (match, b1, b2) => `\${require('${b1}.${b2}')}`,
			},
		},
		{
			loader: 'twig-html-loader',
		},
	],
};
