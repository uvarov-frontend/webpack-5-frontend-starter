module.exports = {
	test: /\.html$/i,
	enforce: 'post',
	loader: 'html-loader',
	options: {
		sources: {
			list: [
				{
					attribute: 'src',
					type: 'src',
				},
				{
					attribute: 'srcset',
					type: 'src',
				},
				{
					attribute: 'data-src',
					type: 'src',
				},
			],
		},
		preprocessor: (content) => {
			return content.replace(/\url\('~@\/[^"]+"/g, (match) => {
				let url = '';
				match.replace(/'~@\/[^)]+'/, (path) => { url = path.replace(/'/g, ''); });
				return match.replace(/\url\('~@\/[^"]+"/, (style) => { return `${style.replace(/~@/, '')} data-src="${url}"`; });
			});
		},
	},
};
