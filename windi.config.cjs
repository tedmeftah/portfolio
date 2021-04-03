module.exports = {
	purge: {},
    darkMode: 'class',
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography'),
	],
};
