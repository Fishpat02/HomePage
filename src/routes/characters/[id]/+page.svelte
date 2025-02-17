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
    <blockquote class="ml-2 inline border-l-2 pl-4 italic lg:ml-1 lg:pl-2">
      {data.character.shortDescription}
    </blockquote>
  </div>
  <Separator class="my-4" />
  <div class="mx-2 my-4 lg:mr-[25%]">
    <CharacterCard
      character={data.character}
      class="float-right mx-6 mb-6 hidden w-fit before:h-0 md:block" />
    <CharacterSummary character={data.character} class="inline align-top" />
  </div>
</div>
