---
slug: stop-forgetting-eleventy-data-cascade
date: "2021-5-2"
title: Stop forgetting the Eleventy Data Cascade
---
[**Eleventy**](https://www.11ty.dev/) is a great static site generator and one of the best parts of it is [**The Data Cascade**](https://www.11ty.dev/docs/data-cascade/). It's a notably simple way to map data to templates and I mean that in the best possible [**Simple Made Easy**](https://www.infoq.com/presentations/Simple-Made-Easy/) sense. I hope more static site generators steal it.

I wrote this document because I always need to look it up when I come back to Eleventy after a bit. I intend for this summary to help me re-remember by showing the patterns and structure of The Data Cascade all in one place.

In ascending order of precedence:

**Global Data Directory:**

| ***File:*** | `_data/<filename>.(json|js)` |
| --- | --- |
| ***Scope:*** | In all templates |
| ***Access:*** | `{{ <filename>.<key> }}` |
| ***Examples:*** | Site-wide data such as API keys, header/footer inputs. |

**Directory Data**

| ***File:*** | `<dirname/<dirname>.(json|11tydata.js)` |
| --- | --- |
| ***Scope:*** | All templates in directory or subdirectories if not overridden |
| ***Access:*** | `{{ <key> }}` |
| ***Examples:*** | Section specific overrides like a new default layout, or section specific data to subsequently dynamically generate pages from. |

**Template Data File**

| ***File:*** | `<templateFilename>.(json|11tydata.js)` |
| --- | --- |
| ***Scope:*** | In template |
| ***Access:*** | `{{ <key> }}` |
| ***Examples:*** | This data is the input for this page. Similar to input props for a component or database information for a server rendered page. |

**Layout Frontmatter**

| ***File:*** | `_includes/<layout>.njk)` |
| --- | --- |
| ***Scope:*** | In template |
| ***Access:*** | `{{ <key> }}` |
| ***Examples:*** | Presentational properties to override, such as a layout specific page title. |

**Template Frontmatter**

| ***File:*** | `<filename>.md` |
| --- | --- |
| ***Scope:*** | In Template |
| ***Access:*** | `{{ <key> }}` |
| ***Examples:*** | More common for this to be metadata about this page to be used in listing pages. |

Notes:

* I skipped [**Custom Global Data**](https://www.11ty.dev/docs/data-global-custom/) and [**Computed Data**](https://www.11ty.dev/docs/data-computed/) in this summary. They're less common and independently understandable from the rest of the Data Cascade.
    
* In [**Javascript Data Files**](https://www.11ty.dev/docs/data-js/) you can return a function, an async function or promise. This allows you to interact with Databases/APIs at build time.
    
* The data keys are [**shallow merged via object assign**](https://www.11ty.dev/docs/data-cascade/#example).
    

I hope you find it useful!