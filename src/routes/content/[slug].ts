import fs from 'fs'
import path from 'path'
import Marked from 'marked'
import GrayMatter from 'gray-matter'

import type { Response } from '@sveltejs/kit'

export async function get(): Promise<Response> {
	const file = fs.readFileSync(path.resolve('content', `home.md`), 'utf-8')
	const { data, content } = GrayMatter(file)
	const html = Marked(content)
	return {
		status: 200,
		body: { meta: data, content: html }
	}
}
