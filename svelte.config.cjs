const path = require('path')
const preprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-static')
const imagetools = require('vite-imagetools')
const { dependencies } = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: preprocess({
		preserve: ['ld+json'],
		postcss: true
	}),
	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					'@': path.resolve('src')
				}
			},
			ssr: {
				noExternal: Object.keys(dependencies || {})
			},
			plugins: [imagetools({ force: true })]
		}
	}
}
