<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`articles.json`)
      .then((r) => r.json())
      .then((posts) => ({ posts }))
  }
</script>

<script>
  export let posts
</script>

{#each posts as post}
  {JSON.stringify(post, null, 2)}
  {post.id}
  {post.description}
  {post.title}
  {post.cover_image}
{/each}
