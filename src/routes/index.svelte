<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/content/home')
		return {
			props: await res.json()
		}
	}
</script>

<script>
	import MetaRender from '$lib/MetaRender.svelte'
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
	export let meta
	export let content
</script>

<svelte:head>
	<MetaRender {meta} />
</svelte:head>

{@html content}
<a on:click={redirect} href="/">Learning in Public</a>

<style lang="postcss">
</style>
