<script>
	export let meta = {}
	meta.title = meta.title || 'Ted Meftah'
	meta.image = meta.image || '/avatar.png'
</script>

<title>{meta.title}</title>
<meta property="og:title" content={meta.title} />
<meta property="twitter:title" content={meta.title} />

<meta property="og:image" content={meta.image} />
<meta property="twitter:image" content={meta.image} />

{#if meta.description}
	<meta name="description" content={meta.description} />
	<meta property="og:description" content={meta.description} />
	<meta property="twitter:description" content={meta.description} />
{/if}

<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />

{#if meta.author}
	<meta name="author" content={meta.author} />
{/if}

{#if meta.twitter}
	<meta name="twitter:creator" content={meta.twitter} />
{/if}
