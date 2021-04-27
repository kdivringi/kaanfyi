<svelte:head>
  <title>Making sense of Tailwind in Svelte</title>
  <link rel="stylesheet" href="/typography.css" />
</svelte:head>
<script>
  import { codeOne, codeTwo } from './_misc.js'
  
  // This is annoying. The base tab messes this up otherwise...
  const page ='/feed/making-sense-of-tailwind-in-svelte'
</script>

<article class="tw-prose">
  <h1>Making sense of Tailwind in Svelte</h1>
  <p>
    Svelte and <a href="https://tailwindcss.com/">TailwindCSS</a> are kinda weird
    together aren't they?
  </p>
  <p>Svelte has this awesome built in styling capability but Tailwind will have you mostly ignore it, since "no custom CSS" while using it is a virtue. The best practice for production builds is a regexp based pass over generated content that is completely outside of the Svelte build process. It may seem conceptually awkward but I actually think they go well together if you use them in a certain way, a way that may be different that what you've seen before.</p>

  <p>This is the default way, with utility classes:<p>
<pre><code>
  {codeOne}
</code></pre>

<p>This is how I've been doing it:</p>
<pre><code>
  {codeTwo}
</code></pre>

<p>What's going on here? This style tag is written in <a href="https://postcss.org/">PostCSS</a> (what Tailwind is written in) and specially processed via Svelte's official <a href="https://github.com/sveltejs/svelte-preprocess">svelte-preprocess plugin</a>. The <a href="https://tailwindcss.com/docs/functions-and-directives#apply">@apply directive</a> is one of the core pieces of Tailwind, meant to be <em>"useful when you find a common utility pattern in your HTML that you'd like to extract to a new component."</em> It's also explicitly mentioned in a section about <a href="https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply">extracting component classes</a>. With Svelte's built in styling solution, all classes are component classes by default and this is my new default way to use Tailwind with a modern component framework like Svelte.</p>


<ul>Advantages to this approach:
  <li>PurgeCSS step not necessary. You are only inlining the styles you use.</li>
  <li>No need to ever build the entire Tailwind CSS file, obviating the need for things like the <a href="https://tailwindcss.com/docs/just-in-time-mode">Tailwind Just-in-Time Mode</a>.</li>
  <li>Lowers the context switch from using Tailwind utility classes and custom CSS, since they will be co-located.</li>
  <li>Still able to be guided by Tailwind's design system via referencing constants with <a href="https://tailwindcss.com/docs/functions-and-directives#theme">theme()</a>.</li>
  <li>No longer ignoring one of the main three Svelte tags, instead taking advantage of the awesomeness it provides</li>
  <li>HTML has that clean look that Svelte allows: not just less classes, none at all most of the time.</li>
</ul>

<p>I should mention that I got the general idea from the <a href="https://github.com/ben-rogerson/twin.macro">twin.macro</a> css-in-js library for <a href="https://reactjs.org/">React</a>. I originally thought that I would need to write a similar library for Svelte but I figured out how to reproduce it by composing the existing tools and I like what I ended up with more. The only thing I needed to add on the Svelte end was the official plugin for adding preprocessing capabilities to style tags. I still get syntax highlighting, validation and intellisense from the official Svelte VS Code Plugin (along with the PostCSS one). A testament to the framework and community.</p>

<p>
 The general steps to make this work are as follows:
</p>
<ol>
  <li><a href="{page}#install">Install Tailwind & PostCSS</a></li>
  <li><a href="{page}#preflight">Setup your preflight styles</a></li>
  <li><a href="{page}#preprocess">Setup svelte-preprocess</a></li>
  <li><a href="{page}#vscode">Bonus VS Code setup tips</a></li>
</ol>

<h2 id="install">Install Tailwind & PostCSS</h2>
<p>Stuff</p>

<h2 id="preflight">Setup your preflight styles</h2>

<h2 id="preprocess">Setup svelte-preprocess</h2>

<h2 id="vscode">Bonus VS Code setup tips</h2>
</article>

<style>
  article {
    @apply mx-auto;
  }
</style>
