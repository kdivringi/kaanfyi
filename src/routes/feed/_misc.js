// Code blocks here because svelte loves to preproc the styles
export const codeOne =`<a
  href="/"
  class="underline text-blue-600 hover:text-blue-800"
  >
  Home
</a>

<style></style>`

export const codeTwo = `<a href="/">Home</a>

<style>
  a {
    @apply underline text-blue-600 hover:text-blue-800;
  }
</style>`
