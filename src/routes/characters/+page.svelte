<script lang="ts">
  import { characters } from '$lib/db'
</script>

<ul class="list-none">
  {#each characters as character (character.id)}
    <li class="text-xl">
      <a href="/characters/{character.id}">{character.name}</a>
    </li>
  {/each}
</ul>
