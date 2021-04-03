<script>
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>

<svelte:head>
	<title>Mohamed Ted Meftah</title>
</svelte:head>

In the process of rebuilding my website...

<div class="hot">
	<a on:click={redirect} href="/">Learning in Public</a>
</div>

<style lang="postcss">
	a {
		@apply sm:text-red-600;
	}
</style>
