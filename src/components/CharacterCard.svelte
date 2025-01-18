<script lang="ts">
  let { character }: { character: Character } = $props();
</script>

<div>
  <h1>{character.name}</h1>
  <ul class="list-none">
    <li>Age: {character.age}</li>
    <li>Species: {character.species}</li>
  </ul>
</div>
