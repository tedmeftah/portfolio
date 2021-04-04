const path = require('path')
const preprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-static')
const imagetools = require('vite-imagetools')
const markdown = require('vite-plugin-svelte-md').default
const { preprocess: windicss } = require('svelte-windicss-preprocess')
const { dependencies } = require('./package.json')

module.exports = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			preserve: ['ld+json'],
			postcss: true
		}),
		windicss({
			config: 'windi.config.cjs',
			compile: true,
			prefix: 'w'
		})
	],
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
			plugins: [markdown(), imagetools({ force: true })]
		}
	}
}

