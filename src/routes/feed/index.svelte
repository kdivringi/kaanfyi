<script context="module">
    import { listing } from './_posts'
    export function preload() {
        return { posts: listing }
    }
</script>

<script>
	export let posts;
</script>

<style>
    h1 {
        @apply text-2xl mb-4 font-semibold tracking-wide;
    }
    ul {
        list-style-type: disc;
        list-style-position: inside;
    }
    a {
        @apply text-blue-500 font-semibold underline hover:text-blue-700;
    }
</style>

<h1>As I do things they'll show up here</h1>

<ul>
    {#each posts as post }
       <li><a href="feed/{post.slug}">{post.title}</a></li> 
    {/each}
</ul>