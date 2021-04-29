<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<div class="bg">
  <div class="contain">
    <Nav {segment} />
    <main>
      <slot />
    </main>
  </div>
</div>

<style>
  div.bg {
    min-height: 100vh;
    background-color: #269;
    background-image: linear-gradient(white 2px, transparent 2px),
      linear-gradient(90deg, white 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  }
  div.contain {
    @apply container mx-auto my-0 bg-white;
  }
  main {
    @apply p-8;
  }
</style>
