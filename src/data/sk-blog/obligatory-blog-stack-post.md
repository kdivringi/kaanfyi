---
slug: "obligatory-blog-stack-post"
date: "2021-4-14"
title: "Obligatory blog stack post"
---

Spoiler alert: It's [Svelte](https://svelte.dev/). Or
[Sapper](https://sapper.svelte.dev/)
to be more precise. And nothing else...

My goal is to use sapper as a slightly more jumped up version of [Eleventy](https://www.11ty.dev/). I don't forsee ever using the server bits of it and will be deploying it
the JAMstack way on Netlify. I do want the <em>ability</em> to do component driven
development and incorporate the interactive capabilities of a bonafide JS framework
as necessary. But I want it to get out of the way.

## The data plateau 

The [Eleventy data cascade](https://www.11ty.dev/docs/data-cascade/)
is one of those features that makes people go wow about the simplicity. It's
a tremendous abstraction for a framework that otherwise does not do much of that
for you. I'm opting out of it, though.

The template for the Sapper startup had a blog section setup that looked…
unappealing to say the least. The html was manually embedded in JSON and the
generic blog component had to prefix all of the styles with a global to get
around the unused style elimination of Svelte. It seemed like the framework
was fighting itself. I know that I could probably setup whatever markdown
pipeline to improve this but figuring this out was such a bikeshedding black
hole. Here's a non-exhaustive list of ideas that I had for my "blog
infrastructure":

- [Svelte-kit](https://kit.svelte.dev/): Recently in beta but I tried it and changes did not refresh in my browser. Nope! Let's be boring for a bit.
- [Datomic](https://www.datomic.com/), with some combination of
      Clojure/ClojureScript to interact with it ergonomically. Integrating a
      separate tech stack for a static site and learning a different way to
      model data in a language I'm a bit rusty in seemed like a bridge too far.
- [DataScript](https://github.com/tonsky/datascript) with some combination
      of mori-js bridge so I could maybe get Datomic-esque but still be in Javascript.
      Questioned the value of what I'd be learning, ie just an imitation of the real
      thing.
- [ImmerJS](https://immerjs.github.io/immer/patches) patch stream to have an event source stream of changes. If I just use static
      files, don't I get this kinda for free from git anyways?
- Screwing off entirely and going back to Eleventy because Sapper layout
      inheritance seemed too simplistic. But I want to have the option to build
      beautiful interactive experiences with component driven workflows.

All of that was just procrastination from doing what's important: just
getting out there and writing. So I'm going to just use files. Each blog
post will be a Svelte component, no [slug].svelte routing indirection.
Writing just becomes mostly creating a new file in a directory. The main
challenge then becomes generating listing content from a directory of files.
I can easily do this with Markdown frontmatter, right?

## No markdown thanks

Actually markdown seemed to conflict with one of my stated goals of
providing beautiful interactivity if I needed it. Going down this rabbit
hole lead to investigation into what MDX equivalents would be in
Svelte-land. Those are some technical decisions that I both don't want to
blaze a trail in or put in front of myself and writing things that go out on
the internet. Given that, what is it that markdown is giving you over HTML?
I can use [Emmet](https://emmet.io/) and be decently productive in
writing prose. It may be less structure overall, and be difficult to standardize
and update styling across the entire site but I'm ok with that. I think it will
be fun to see how this site evolves as I improve, to be honest. I don't need
to go for the professional look across historical blog posts. I may reconsider
this, since it Emmet has been a bit annoying so far in VS Code (especially for
links, sheesh) but that's how I'm moving forward for the time being.

I do lose frontmatter by using Svelte components instead of markdown,
however. My intention is to just have a data file extension of the same name
or something similar. I can change 2 files at a time, especially if I help
myself with some automation. Let me get to the point where I have enough
posts such that updating a listing page manually becomes laborious. That
will be a good problem to have.

## CSS rough going

The site will look kinda janky for a bit. While I'm a frontend developer, I'm
more of a [the back of the frontend](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) developer at my job. I don't usually build from scratch without the assistance
of frameworks or component libraries. So I'm forcing myself to learn. I hope to
not use any external CSS, apart from some reset style help, perhaps. It feels like
'getting my hands dirty' and using the platform on a more intimate level. I look
forward to the fun experimentation I can unlock without needing to polyfill or
consider compatibility. This will be a space for me to play and I look forward
to it.
