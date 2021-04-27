<svelte:head>
  <title>Making sense of Tailwind in Svelte</title>
  <link rel="stylesheet" href="/typography.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" />
</svelte:head>
<script>
  import { codeOne, codeTwo, codeThree } from './_misc.js'
  
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
<pre><code class="language-html">
  {codeOne}
</code></pre>

<p>This is how I've been doing it:</p>
<pre><code class="language-html">
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
<p>These are the packages that I needed to install.</p>

<pre><code class="language-shell">npm i -D tailwindcss postcss postcss-cli autoprefixer</code></pre>

<p>I followed the Tailwind instructions to <a href="https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin">Install as a PostCSS plugin.</a> You'll want to initialize both your Tailwind and PostCSS config files at the same time via:</p>

<pre><code class="language-shell">npx tailwindcss init -p</code></pre>

<p>
  Note that for the purposes of this tutorial it's not strictly necessary to have these files but I think using Tailwind like this can encourage getting more into PostCSS and how Tailwind is built so I want to encourage it.
</p>

<h2 id="preflight">Setup your preflight styles</h2>
<p>
  Even though we are not generating the entire Tailwind CSS file, we still want to apply the <a href="https://tailwindcss.com/docs/preflight">Preflight styles</a> that the utility classes expect to be present. These styles normalize browser style inconsistencies (pretty much by removing almost everything) and ensure that utility classes start from the same styling base.
</p>

<p>
  You can start by creating a css file that contains only:
</p>

<pre><code class="language-scss">@tailwind base;</code></pre>

<p>
  In my Sapper project I put this in 'assets/css/global.css' and I used PostCSS to process all CSS files in that directory into the 'static/' directory:
</p>

<pre><code class="language-shell">npx postcss assets/css/ --dir static</code></pre>

<p>My Sapper 'template.html' file already had the 'global.css' in the header but you may need to add something to a top level svelte:head tag.</p>

<h2 id="preprocess">Setup svelte-preprocess</h2>

<p><a href="https://github.com/sveltejs/svelte-preprocess">svelte-preprocess</a> is an official plugin that will allow you to, among other things, process the style tag contents as PostCSS. First, install it in your project:</p>

<pre><code class="language-shell">npm i -D svelte-preprocess</code></pre>

<p>You will need to add it as a rollup plugin to the appropriate file, according to the <a href="https://github.com/sveltejs/svelte-preprocess/blob/main/docs/usage.md">Usage</a> documentation. This is how I configured the plugin:</p>

<pre><code class="language-js">{ codeThree }</code></pre>

<p>Now you should be ready to use PostCSS, and by extension Tailwind, directly in Svelte components! The <a href="https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#postcss-sugarss">documentation</a> recommends setting lang="postcss" in the style tag but I found this not to be necessary and to oddly break syntax highlighting in VS Code.</p>

<h2 id="vscode">Bonus VS Code setup tips</h2>

<ol>
  <li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode">Svelte extension if you haven't already</a></li>
  <li>Disable the built in CSS validation by setting the "svelte.plugin.css.diagnostics.enable" setting to false in your settings.</li>
  <li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=csstools.postcss">PostCSS plugin</a></li>
  <li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">TailwindCSS intellisense plugin</a></li>
</ol>

<h2>Conclusion</h2>

<p>I hope you find this guide useful. So far, I think that using Svelte and Tailwind together like this better brings out the true value of both libraries in a way that's greater than the sum of their parts.</p>


<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-core.min.js" integrity="sha512-xR+IAyN+t9EBIOOJw5m83FTVMDsPd63IhJ3ElP4gmfUFnQlX9+eWGLp3P4t3gIjpo2Z1JzqtW/5cjgn+oru3yQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js" integrity="sha512-zc7WDnCM3aom2EziyDIRAtQg1mVXLdILE09Bo+aE1xk0AM2c2cVLfSW9NrxE5tKTX44WBY0Z2HClZ05ur9vB6A==" crossorigin="anonymous"></script>

</article>


<style>
  article {
    @apply mx-auto;
  }
</style>
