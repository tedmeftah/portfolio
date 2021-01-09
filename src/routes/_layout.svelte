<script>
  import Header from "@/components/header.svelte"
  import Footer from "@/components/footer.svelte"
  export let segment
</script>

<style lang="scss" global>
  @forward 'global';
</style>

<Header />

<main>
  <slot {segment} />
</main>

<Footer />