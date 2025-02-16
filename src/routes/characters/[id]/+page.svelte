<script lang="ts">
  import type { PageData } from './$types'
  import { Separator } from '$lib/components/ui/separator'
  import CharacterSummary from '$lib/components/CharacterSummary.svelte'
  import CharacterCard from '$lib/components/CharacterCard.svelte'

  let { data }: { data: PageData } = $props()
</script>

<div class="mx-8 my-2">
  <div>
    <h1
      class="inline w-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {data.character.name}
    </h1>
    <blockquote class="inline ml-2 border-l-2 pl-4 italic lg:ml-1 lg:pl-2">
      {data.character.shortDescription}
    </blockquote>
  </div>
  <Separator class="my-4" />
  <div>
    <CharacterSummary character={data.character} class="inline-block align-top lg:min-w-[50%]" />
    <CharacterCard character={data.character} class="hidden lg:inline-block w-fit float-right mr-12" />
  </div>
</div>
