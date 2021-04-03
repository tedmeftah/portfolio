const path = require('path')
const imports = require('postcss-import')
const presets = require('postcss-preset-env')
const tailwind = require('@tailwindcss/jit')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	plugins: [
		imports({
			path: [path.resolve('src/styles')]
		}),
		presets({
			features: {
				'nesting-rules': true,
				'custom-media-queries': true
			}
		}),
		tailwind(),
		autoprefixer(),
		!isDev && cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
	]
}
