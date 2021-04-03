<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/content/home')
		return {
			props: await res.json()
		}
	}
</script>

<script>
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
	export let content
</script>

{@html content}
<a on:click={redirect} href="/">Learning in Public</a>

<style lang="postcss">
</style>
