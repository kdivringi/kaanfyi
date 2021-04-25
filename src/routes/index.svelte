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

<style lang="postcss">
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h2 {
    @apply font-bold bg-blue-100;
  }

  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 200px);
    grid-gap: 20px;
    justify-content: space-around;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }

    section {
      grid-template-columns: 1fr 1fr;
    }
  }

  article {
    border: 1px solid purple;
    border-radius: 0.5em;
    padding: 1em;
    box-shadow: 3px 3px purple;
  }
</style>
