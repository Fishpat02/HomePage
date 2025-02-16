<script lang="ts">
  import type { Character } from '$lib/types'
  import type { ClassValue } from 'svelte/elements'

  const props: { character: Character, class?: ClassValue} = $props()
</script>

<div class={["mx-4 my-2",props.class]}>
  <p>{props.character.shortDescription}</p>
</div>
