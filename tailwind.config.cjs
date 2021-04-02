module.exports = {
	purge: {
		mode: 'all',
		content: ['./src/**/*.html', './src/**/*.svelte'],

		options: {
			whitelistPatterns: [/svelte-/],
			defaultExtractor: (content) =>
				[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				),
			keyframes: true
		}
	},
	darkMode: 'class',
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
};
