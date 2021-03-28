const sveltePreprocess = require('svelte-preprocess');
const staticAdapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

console.log(staticAdapter())
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		adapter: staticAdapter(),

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
