module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		'plugin:vue/essential',
		'plugin:react/recommended',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			plugins: ['@typescript-eslint'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:react/recommended',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'vue',
		'import',
		'react',
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			alias: [
				['@', './src'],
			],
		},
	},
	rules: {
		'react/prop-types': 'off',
		'max-len': ['error', { code: 180 }],
		'class-methods-use-this': 'off',
		'no-tabs': 'off',
		'no-param-reassign': 'off',
		'import/extensions': 'off',
		'prefer-destructuring': ['error', { object: true, array: false }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		indent: ['error', 'tab', { SwitchCase: 1 }],
	},
};
