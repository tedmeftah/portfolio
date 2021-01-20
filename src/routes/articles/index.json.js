import axios from 'axios'
export async function get(req, res) {
  let posts = await axios
    .get(`https://dev.to/api/articles/me/unpublished`, {
      params: {
        page: 1,
        per_page: 10,
      },
      headers: {
        'api-key': process.env.DEVTO_API_KEY,
      },
    })
    .then(({ data }) => data)
    .catch((e) => 'error')
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(posts))
}
