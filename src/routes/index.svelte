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

<a on:click={redirect} href="/">Learning in Public</a>

<style lang="scss">
	a {
		@apply text-red-500;
	}
</style>
