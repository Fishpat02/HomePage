<script lang="ts">
  import type { Character } from '$lib/types'
  import * as Card from '$lib/components/ui/card'

  let { character }: { character: Character } = $props()
</script>

<a href={`/characters/${character.id}`} aria-label={character.name}>
  <Card.Root>
    <Card.Header>
      <Card.Title>{character.name}</Card.Title>
      <Card.Description>{character.shortDescription}</Card.Description>
    </Card.Header>

    <Card.Content>
      <p>Age: {character.age}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
    </Card.Content>
  </Card.Root>
</a>
