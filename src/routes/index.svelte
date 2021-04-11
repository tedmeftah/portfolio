<script>
	import Home from '../../content/home.md'
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
	console.log(process.env['RENDER_EXTERNAL_URL'])
</script>
<Home />

<a on:click={redirect} href="/">Learning in Public</a>

{process.env['RENDER_EXTERNAL_URL']}
<style lang="postcss">
</style>

