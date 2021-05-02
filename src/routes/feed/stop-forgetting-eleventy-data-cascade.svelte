<script>
  import CascadeCard from "../../components/CascadeCard.svelte";
  const dataLevels = [
    {
      title: "Global Data Directory",
      file: "_data/<filename>.(json|js)",
      accessWhere: "In all templates",
      accessCode: "{{ <filename>.<key> }}",
      example: "Site-wide data such as API keys, header/footer inputs.",
    },
    {
      title: "Directory Data",
      file: "<dirname/<dirname>.(json|11tydata.js)",
      accessWhere:
        "All templates in directory or subdirectories if not overridden",
      accessCode: "{{ <key> }}",
      example:
        "Section specific overrides like a new default layout, or section specific data to subsequently dynamically generate pages from.",
    },
    {
      title: "Template Data File",
      file: "<templateFilename>.(json|11tydata.js)",
      accessWhere: "In template",
      accessCode: "{{ <key> }}",
      example:
        "This data is the input for this page. Similar to input props for a component or database information for a server rendered page.",
    },
    {
      title: "Layout Frontmatter",
      file: "_includes/<layout>.njk",
      accessWhere: "In template",
      accessCode: "{{ <key> }}",
      example:
        "Presentational properties to override, such as a layout specific page title.",
    },
    {
      title: "Template Frontmatter",
      file: "<filename>.md",
      accessWhere: "In Template",
      accessCode: "{{ <key> }}",
      example:
        " More common for this to be metadata about this page to be used in listing pages.",
    },
  ];
</script>

<svelte:head>
  <title>Stop forgetting the Eleventy Data Cascade</title>
  <link rel="stylesheet" href="/typography.css" />
</svelte:head>

<article>
  <div class="tw-prose">
    <h1>Stop forgetting the Eleventy Data Cascade</h1>
    <p>
      <a href="https://www.11ty.dev/">Eleventy</a> is a great static site
      generator and one of the best parts of it is
      <a href="https://www.11ty.dev/docs/data-cascade/">The Data Cascade</a>.
      It's a notably simple way to map data to templates and I mean that in the
      best possible
      <a href="https://www.infoq.com/presentations/Simple-Made-Easy/"
        >Simple Made Easy</a
      > sense. I hope more static site generators steal it.
    </p>
    <p>
      I wrote this document because I always need to look it up when I come back to
      Eleventy after a bit. I intend for this summary to help me re-remember by
      showing the patterns and structure of The Data Cascade all in one place.
    </p>

    <p>In ascending order of precedence:</p>
  </div>
  {#each dataLevels as level}
    <CascadeCard {level} />
  {/each}
  <div class="tw-prose">
    <br>
    <p>Notes:</p>
    <ul>
      <li>
        I skipped <a href="https://www.11ty.dev/docs/data-global-custom/"
          >Custom Global Data</a
        >
        and <a href="https://www.11ty.dev/docs/data-computed/">Computed Data</a>
        in this summary. They're less common and independently understandable from
        the rest of the Data Cascade.
      </li>
      <li>
        In <a href="https://www.11ty.dev/docs/data-js/">Javascript Data Files</a
        > you can return a function, an async function or promise. This allows you
        to interact with Databases/APIs at build time.
      </li>
      <li>
        The data keys are <a
          href="https://www.11ty.dev/docs/data-cascade/#example"
          >shallow merged via object assign</a
        >.
      </li>
    </ul>
    <p>I hope you find it useful!</p>
  </div>
</article>

<style>
  .tw-prose {
    @apply mx-auto;
  }
</style>
