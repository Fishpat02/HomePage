<script lang="ts">
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<ul class="list-none">
  {#each data.characters as character (character.id)}
    <li class="text-xl">
      <a href="/characters/{character.id}">{character.name}</a>
    </li>
  {/each}
</ul>
