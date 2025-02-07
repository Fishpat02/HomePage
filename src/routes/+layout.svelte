<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar'
  import AppSidebar from '$lib/components/app-sidebar.svelte'
  import { ModeWatcher } from 'mode-watcher'

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
    <ModeWatcher />
    {@render children?.()}
  </main>
</Sidebar.Provider>
