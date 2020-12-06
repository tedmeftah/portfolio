<script>
  export let status;
  export let error;
</script>

<style>
</style>

<svelte:head>
  <title>Error {status}</title>
</svelte:head>

<h2>Error {status}</h2>

<p>Something went wrong. <a href="/">Back to Home</a></p>

<pre><code>{error.message}</code></pre>
