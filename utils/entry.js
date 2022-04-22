/* eslint-disable no-console */
const fs = require('fs');
const PATHS = require('../config/paths');

const createEntry = {
	variables() {
		this.PAGES = undefined;
		this.ENTRY = undefined;
		this.SCRIPTS = undefined;
		this.STYLES = undefined;
	},

	search(path, extens) {
		return fs.readdirSync(path).filter((filename) => {
			return extens.find((ext) => {
				return ext === filename.split('.').pop();
			});
		});
	},

	missing(variables, extens) {
		return this.PAGES.flatMap((page) => {
			if (variables.includes(`${page.replace(/\.(pug|html|twig)/g, '')}${extens}`)) return null;
			return page;
		}).filter((page) => { return page; });
	},

	create(arr, path, imports, extens) {
		arr.forEach((page) => {
			const file = page.replace(/\.(pug|html|twig)/g, '');
			let data = '';

			if (imports) {
				data += `import '@/${PATHS.assets.js}/${PATHS.assets.pages}/${file}.js';\n`;
				data += `import '@/${PATHS.assets.styles}/${PATHS.assets.pages}/${file}.scss';\n`;
				data += `import '@/${PATHS.assets.templates}/${PATHS.assets.pages}/${page}';\n`;
			}

			fs.writeFile(`${path}/${file}${extens}`, data, (err) => {
				if (err) {
					console.log('\x1b[31m', err, '\x1b[0m');
				} else {
					console.log('\x1b[32m', `Файл ${path}/${file}${extens} создан`, '\x1b[0m');
				}
			});
		});
	},

	init() {
		this.PAGES = this.search(`${PATHS.src}/${PATHS.assets.templates}/${PATHS.assets.pages}`, ['pug', 'twig', 'html']);
		this.ENTRY = this.search(`${PATHS.entry.catalog}/${PATHS.entry.pages}`, ['js']);
		this.SCRIPTS = this.search(`${PATHS.src}/${PATHS.assets.js}/${PATHS.assets.pages}`, ['js']);
		this.STYLES = this.search(`${PATHS.src}/${PATHS.assets.styles}/${PATHS.assets.pages}`, ['scss']);

		this.MISSING_ENTRY = this.missing(this.ENTRY, '.js');
		this.MISSING_SCRIPTS = this.missing(this.SCRIPTS, '.js');
		this.MISSING_STYLES = this.missing(this.STYLES, '.scss');

		this.create(this.MISSING_ENTRY, `${PATHS.entry.catalog}/${PATHS.entry.pages}`, true, '.js');
		this.create(this.MISSING_SCRIPTS, `${PATHS.src}/${PATHS.assets.js}/${PATHS.assets.pages}`, false, '.js');
		this.create(this.MISSING_STYLES, `${PATHS.src}/${PATHS.assets.styles}/${PATHS.assets.pages}`, false, '.scss');
	},
};

createEntry.init();
