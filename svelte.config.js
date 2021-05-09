import fs from 'fs'
import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { imagetools } from 'vite-imagetools'
import markdown from '@netulip/rollup-plugin-md'
import svg from '@netulip/rollup-plugin-svg'
import windicss from 'vite-plugin-windicss'

const { dependencies } = JSON.parse(fs.readFileSync('./package.json'))

export default {
	extensions: ['.svelte', '.md', '.svg'],
	preprocess: [preprocess({ preserve: ['ld+json'] })],
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
			plugins: [
				svg.default({ enforce: 'pre' }),
				markdown.default({ enforce: 'pre' }),
				windicss.default({ transformCSS: 'pre' }),
				imagetools({ force: true })
			]
		}
	}
}
