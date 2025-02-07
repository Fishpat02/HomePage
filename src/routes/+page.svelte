<script lang="ts">
  import CharacterCard from '$lib/components/CharacterCard.svelte'
  import { characters } from '$lib/db'
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
  {#each characters as character (character.id)}
    <CharacterCard {character} />
  {/each}
</div>
