<script context="module">
  export async function preload() {}
</script>

<script>
  export let segment;
</script>

<style lang="scss" global>
  @forward 'global';
</style>

<main>
  <slot {segment} />
</main>
