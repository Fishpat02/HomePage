<script lang="ts">
  import '../app.css'
  let { children } = $props()
</script>

<svelte:head>
  <title>Home Page</title>
</svelte:head>

<nav class="navbar bg-base-100 w-full">
  <div class="navbar-start">
    <a class="text-3xl italic" href="/">Character Emporium</a>
  </div>

  <div class="navbar-center">
    <a href="/" class="btn btn-ghost text-xl">Home</a>
    <a href="/about" class="btn btn-ghost text-xl">About</a>
  </div>

  <span class="navbar-end"></span>
</nav>

{@render children()}
