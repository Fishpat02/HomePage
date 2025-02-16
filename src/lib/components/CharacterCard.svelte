<script lang="ts">
  import type { Character } from '$lib/types'
  import * as Card from '$lib/components/ui/card'
  import type { ClassValue } from 'svelte/elements'

  const props: { character: Character; class?: ClassValue } = $props()
</script>

<a href={`/characters/${props.character.id}`} aria-label={props.character.name}>
  <Card.Root class={[props.class]}>
    <Card.Header>
      <Card.Title>{props.character.name}</Card.Title>
      <Card.Description>{props.character.shortDescription}</Card.Description>
    </Card.Header>

    <Card.Content>
      <p>Age: {props.character.age}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Species: {props.character.species}</p>
    </Card.Content>
  </Card.Root>
</a>
