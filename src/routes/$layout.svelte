<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<Header />
<main class="px-7 py-10 prose m-auto mb-8">
	<slot />
</main>
<Footer />

<style lang="postcss" global>
	@import 'global.postcss';
</style>
