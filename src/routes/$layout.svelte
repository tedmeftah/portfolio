<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<Header />
<main class="m-auto mb-8 py-10 px-7 prose">
	<slot />
</main>
<Footer />

<style lang="postcss" global>
	@import 'global.postcss';
</style>
