<script lang="ts">
  import type { PageData } from './$types'

  let { data }: { data: PageData } = $props()
</script>

<h1 class="text-5xl font-bold">{data.character.name}</h1>
