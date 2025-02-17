<script lang="ts">
  import type { PageProps } from './$types'

  import CharacterCard from '$lib/components/CharacterCard.svelte'

  const { data }: PageProps = $props()
</script>

<div class="mx-[25%] mb-12">
  <h1 class="py-4 text-center text-2xl font-bold underline">
    Welcome to my home page!
  </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur ad
    nisi sint doloribus mollitia praesentium veritatis culpa quidem, sapiente
    nostrum, soluta velit eligendi, in ratione officiis cum distinctio quis!
  </p>
</div>

<div class="mx-12 grid grid-cols-3 gap-4">
  {#each data.characters as character (character.id)}
    <CharacterCard {character} />
  {/each}
</div>
