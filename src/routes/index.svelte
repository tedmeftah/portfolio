<script>
	import Home from '../../content/home.md'
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>

<Home />

<a on:click={redirect} href="/" class="block">Learning in Public</a>

<style lang="postcss">
</style>

