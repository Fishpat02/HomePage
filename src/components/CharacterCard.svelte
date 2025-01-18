<script lang="ts">
  let { character }: { character: Character } = $props()
</script>

<div>
  <a href="/characters/{character.id}">
    <h1>{character.name}</h1>
    <ul class="list-none">
      <li>Age: {character.age}</li>
      <li>Gender {character.gender}</li>
      <li>Species: {character.species}</li>
    </ul>
  </a>
</div>
