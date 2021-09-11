<script context="module">
	export async function load({ page, fetch}) {
		const res = await fetch(`/articles/${page.params.slug}.json`)
		return {
			props: await res.json()
		}
	}
</script>

<script>
	export let content 
</script>

{@html content}