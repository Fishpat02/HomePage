<script lang="ts">
<<<<<<< HEAD
  import { characters } from '$lib/db'
  import CharacterCard  from '$lib/components/CharacterCard.svelte'
=======
  import type { PageData } from './$types'
  import CharacterCard from '../components/CharacterCard.svelte'

  const { data }: { data: PageData } = $props()
>>>>>>> 9cd0fea (Modified pages to fetch from database instead of in-place object)
</script>

<div class="mx-[25%] mb-12">
  <h1 class="text-center text-2xl underline font-bold py-4">
    Welcome to my home page!
  </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur ad
    nisi sint doloribus mollitia praesentium veritatis culpa quidem, sapiente
    nostrum, soluta velit eligendi, in ratione officiis cum distinctio quis!
  </p>
</div>

<div class="grid grid-cols-3 gap-4 mx-12">
  {#each data.characters as character}
    <CharacterCard {character} />
  {/each}
</div>
