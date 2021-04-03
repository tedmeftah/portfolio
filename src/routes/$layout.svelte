<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
	export let segment
</script>

<Header {segment} />
<main>
	<slot {segment} />
</main>
<Footer {segment} />

<style lang="postcss" global>
	@import "global.postcss";
</style>
