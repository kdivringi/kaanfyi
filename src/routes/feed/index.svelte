<script context="module">
    import { listing } from './_posts'
    export function preload() {
        return { posts: listing }
    }
</script>

<script>
	export let posts;
</script>

<h1>Dis da feed</h1>

<ul>
    {#each posts as post }
       <li><a href="feed/{post.slug}">{post.title}</a></li> 
    {/each}
</ul>