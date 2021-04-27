<script>
</script>

<svelte:head>
  <title>Kaan Divringi</title>
</svelte:head>

<h1>Oh hello there!</h1>

<section>
  <article>
    <h2>A bit about me</h2>
    <p>I'm Kaan Divringi, a programmer and such.</p>
    <p>
      I'm more of <a
        href="https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/"
        >the back of the frontend</a
      > developer so this site is a work in progress... always.
    </p>
    <a href="https://github.com/kdivringi">Github</a> ∞ <a href="https://twitter.com/kdivringi">Twitter</a>
  </article>
  <article>
    <h2>Play Krypto!</h2>
    <p>A classic arithmatic card game</p>
    <a href="http://kdivringi.github.io/krypto/">Link to Play Krypto</a>
  </article>
  <article>
    <h2>Explore Space!</h2>
    <p>My first d3 data vis. Make sure to click on the planet names!</p>
    <a href="http://kdivringi.github.io/d3-solar/">Link to Explore Space</a>
  </article>
  <article>
    <h2>Whoah VisX</h2>
    <p>
      The fancy React (that's what I do in my day job) library that wraps d3 but
      not too much.
    </p>
    <a href="https://visx-rodeo.netlify.app/">Link to VisX Rodeo</a>
  </article>
</section>

<style>
  h1 {
    @apply text-3xl sm:text-6xl text-indigo-900 font-semibold tracking-tighter uppercase mb-8 text-center
  }

  h2 {
    @apply font-bold text-indigo-700 text-xl sm:text-2xl tracking-wide capitalize
  }

  section {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-8 auto-rows-auto
  }

  article {
    @apply border-purple-600 rounded-lg p-4 shadow-lg bg-gradient-to-br to-white from-purple-50
  }

  a {
    @apply text-indigo-600;
  }
</style>
