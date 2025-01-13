<script lang="ts">
  import { page } from '$app/state'

  page.data.title = 'Home'
</script>

<svelte:head>
  <title>{page.data.title}</title>
</svelte:head>

<h1>Welcome to my home page!</h1>
