import fs from 'fs'
import path from 'path'
import {default as Markdown} from 'markdown-it'

import type {Response} from '@sveltejs/kit'
const md = new Markdown();

export async function get() : Promise<Response> {
    const file = fs.readFileSync(path.resolve('content', `home.md`), 'utf-8')
    return {
        status: 200,
        body: {
            content: md.render(file)
        }
    }
}