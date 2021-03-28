/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const preprocess = require('svelte-preprocess');
const staticAdapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: preprocess({
		scss: {
			includePaths: ['src/styles']
		},
		preserve: ['ld+json']
	}),
	kit: {
		adapter: staticAdapter(),

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
