<script>
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>

<svelte:head>
	<title>Mohamed Ted Meftah</title>
	<meta property="twitter:creator" content="@TedMeftah" />
</svelte:head>

In the process of rebuilding my website...

<div class="hot">
	<a on:click={redirect} href="/">Learning in Public</a>
</div>

<a href="/" class="">Test</a>

<style lang="postcss">
	.hot {
		& a {
			@apply bg-red-500 sm:(text-5xl text-green-600);
		}
	}
</style>
