<script lang="ts">
  import { page } from "$app/state";

  page.data.title = "Home";
</script>

<style lang="scss">
  h1 {
    font-size: 2rem;
  }
</style>

<svelte:head>
  <title>{page.data.title}</title>
</svelte:head>

<div>
  <h1>Welcome to my home page!</h1>
</div>
