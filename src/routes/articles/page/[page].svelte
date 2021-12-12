<script context="module">
	export async function load({ page }) {
		return {
			props: { page: page.params.page }
		}
	}
</script>

<script>
	export let page
</script>

{page}
