<script>
	import Home from '../../content/home.md'
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>
<Home />

<a on:click={redirect} href="/">Learning in Public</a>

{JSON.stringify(process.env)}
<style lang="postcss">
</style>

