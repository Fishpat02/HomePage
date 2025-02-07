<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar'
  import AppSidebar from '$lib/components/app-sidebar.svelte';

  import '../app.css'
  import type { SvelteHTMLElements } from 'svelte/elements'

  let { children }: SvelteHTMLElements['div'] = $props()
</script>

<svelte:head>
  <title>Home Page</title>
</svelte:head>


<Sidebar.Provider>
  <AppSidebar />

  <main>
    {@render children?.()}
  </main>
</Sidebar.Provider>
