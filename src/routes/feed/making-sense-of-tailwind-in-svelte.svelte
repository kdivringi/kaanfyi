<svelte:head>
  <title>Making sense of Tailwind in Svelte</title>
  <link rel="stylesheet" href="/typography.css" />
</svelte:head>

<article class="tw-prose">
  <h1>Making sense of Tailwind in Svelte</h1>
  <p>
    Svelte and <a href="https://tailwindcss.com/">TailwindCSS</a> are kinda weird
    together aren't they?
  </p>
  <p>Svelte has this awesome built in styling capability but Tailwind will have you mostly ignore it, since "no custom CSS" while using it is a virtue. The best practice for production builds is a regexp based pass over generated content that is completely outside of the Svelte build process. It's a bit conceptually funky that <a href="https://www.swyx.io/svelte_tailwind_setup/">swyx feels the need to justify even using them together in his blog post</a>:</p>

  <blockquote>
      A quick aside on WHY Use Tailwind with Svelte, since Svelte offers scoped CSS by default…
  </blockquote>

  <p>
      To get out of the conceptual awkwardness, I think that there's a particular...
  </p>

</article>

<style>
  article {
    @apply mx-auto;
  }
</style>
