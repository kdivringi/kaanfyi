---
title: "Making sense of Tailwind in Svelte"
date: "2021-4-25"
slug: "making-sense-of-tailwind-in-svelte"
---
Svelte and [**TailwindCSS**](https://tailwindcss.com/) are kinda weird together aren't they?

Svelte has this awesome built in styling capability but Tailwind will have you mostly ignore it, since "no custom CSS" while using it is a virtue. The best practice for production builds is a [**regexp based pass over generated content**](https://tailwindcss.com/docs/optimizing-for-production) that is completely outside of the Svelte build process. It may seem conceptually awkward but I actually think they go well together if you use them in a certain way, a way that may be different that what you've seen before.

  
This is the default way, with utility classes:

```xml
<a
  href="/"
  class="underline text-blue-600 hover:text-blue-800"
  >
  Home
</a>

<style></style>
```

This is how I've been doing it:

```xml
<a href="/">Home</a>

<style>
  a {
    @apply underline text-blue-600 hover:text-blue-800;
  }
</style>
```

What's going on here? This style tag is written in [**PostCSS**](https://postcss.org/) (what Tailwind is written in) and specially processed via Svelte's official [**svelte-preprocess plugin**](https://github.com/sveltejs/svelte-preprocess). The [**@apply directive**](https://tailwindcss.com/docs/functions-and-directives#apply) is one of the core pieces of Tailwind, meant to be *"useful when you find a common utility pattern in your HTML that you'd like to extract to a new component."* It's also explicitly mentioned in a section about [**extracting component classes**](https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply). With Svelte's built in styling solution, all classes are component classes by default and this is my new default way to use Tailwind with a modern component framework like Svelte.

  
Advantages to this approach:

* PurgeCSS step not necessary. You are only inlining the styles you use.
    
* No need to ever build the entire Tailwind CSS file, obviating the need for things like the [**Tailwind Just-in-Time Mode**](https://tailwindcss.com/docs/just-in-time-mode).
    
* Lowers the context switch from using Tailwind utility classes and custom CSS, since they will be co-located.
    
* Still able to be guided by Tailwind's design system via referencing constants with [**theme()**](https://tailwindcss.com/docs/functions-and-directives#theme).
    
* No longer ignoring one of the main three Svelte tags, instead taking advantage of the awesomeness it provides
    
* HTML has that clean look that Svelte allows: not just less classes, none at all most of the time.
    

I should mention that I got the general idea from the [**twin.macro**](https://github.com/ben-rogerson/twin.macro) css-in-js library for [**React**](https://reactjs.org/). I originally thought that I would need to write a similar library for Svelte but I figured out how to reproduce it by composing the existing tools and I like what I ended up with more. The only thing I needed to add on the Svelte end was the official plugin for adding preprocessing capabilities to style tags. I still get syntax highlighting, validation and intellisense from the official Svelte VS Code Plugin (along with the PostCSS/Tailwind one). A testament to the framework and community.

  
The general steps to make this work are as follows:

1. [**Install Tailwind & PostCSS**](https://kaan.fyi/feed/making-sense-of-tailwind-in-svelte#install)
    
2. [**Setup your preflight styles**](https://kaan.fyi/feed/making-sense-of-tailwind-in-svelte#preflight)
    
3. [**Setup svelte-preprocess**](https://kaan.fyi/feed/making-sense-of-tailwind-in-svelte#preprocess)
    
4. [**Bonus VS Code setup tips**](https://kaan.fyi/feed/making-sense-of-tailwind-in-svelte#vscode)
    

  
**Install Tailwind & PostCSS**

These are the packages that I needed to install.

```shell
npm i -D tailwindcss postcss postcss-cli autoprefixer
```

I followed the Tailwind instructions to [**Install as a PostCSS plugin.**](https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin) You'll want to initialize both your Tailwind and PostCSS config files at the same time via:

```shell
npx tailwindcss init -p
```

Note that for the purposes of this tutorial it's not strictly necessary to have these files but I think using Tailwind like this can encourage getting more into PostCSS and how Tailwind is built so I want to encourage it.

## **Setup your preflight styles**

  
Even though we are not generating the entire Tailwind CSS file, we still want to apply the [**Preflight styles**](https://tailwindcss.com/docs/preflight) that the utility classes expect to be present. These styles normalize browser style inconsistencies (pretty much by removing almost everything) and ensure that utility classes start from the same styling base.

You can start by creating a css file that contains only:

```scss
@tailwind base;
```

In my Sapper project I put this in 'assets/css/global.css' and I used PostCSS to process all CSS files in that directory into the 'static/' directory:

```shell
npx postcss assets/css/ --dir static
```

My Sapper 'template.html' file already had the 'global.css' in the header but you may need to add something to a top level svelte:head tag.

## **Setup svelte-preprocess**

[**svelte-preprocess**](https://github.com/sveltejs/svelte-preprocess) is an official plugin that will allow you to, among other things, process the style tag contents as PostCSS. First, install it in your project:

```bash
npm i -D svelte-preprocess
```

You will need to add it as a rollup plugin to the appropriate file, according to the [**Usage**](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/usage.md) documentation. This is how I configured the plugin:

```js
preprocess: sveltePreprocess({ postcss: true })
```

  
Now you should be ready to use PostCSS, and by extension Tailwind, directly in Svelte components! The [**documentation**](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#postcss-sugarss) recommends setting lang="postcss" in the style tag but I found this not to be necessary and to oddly break syntax highlighting in VS Code.

## **Bonus VS Code setup tips**

1. Install the [**Svelte extension if you haven't already**](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
    
2. Disable the built in CSS validation by setting the "svelte.plugin.css.diagnostics.enable" setting to false in your settings.
    
3. Install the [**PostCSS plugin**](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
    
4. Install the [**TailwindCSS intellisense plugin**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    

## **Conclusion**

I hope you find this guide useful. So far, I think that using Svelte and Tailwind together like this better brings out the true value of both libraries in a way that's greater than the sum of their parts.