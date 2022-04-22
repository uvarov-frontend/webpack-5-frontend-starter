/* eslint-disable no-console */
const fs = require('fs');
const PATHS = require('../config/paths');

fs.rmdir(PATHS.output, () => {
	return console.log('\x1b[33m', 'cd ./build removed!', '\x1b[0m');
});

fs.unlink(`${PATHS.entry.catalog}/${PATHS.entry.temp}`, () => {
	return console.log('\x1b[33m', 'cd ./config/entry/main.temp.js removed!', '\x1b[0m');
});
