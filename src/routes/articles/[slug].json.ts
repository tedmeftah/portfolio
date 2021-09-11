import type { Response } from '@sveltejs/kit'

export async function get({ params }): Promise<Response> {
    return {
        status: 200,
        headers: {},
        body: JSON.stringify({
            content: params.slug
        })
    }
}