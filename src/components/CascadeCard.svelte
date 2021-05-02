<script>
    export let level;
</script>

<style>
    div {
        max-width: 65ch; /* Matching Tailwind Typography */
        grid-template-rows: repeat(5, min-content);
        grid-template-columns: min-content 1fr;
        @apply mx-auto my-2 p-1 rounded border-gray-300 border grid align-baseline;
    }
    strong {
        @apply border-b border-gray-200 mb-2 tracking-wider col-span-2;
    }
    code {
        background-color: #efefef;
        hyphens: manual;
        @apply font-mono px-1 rounded-sm inline-block;
    }
    em {
        @apply font-semibold tracking-wide block not-italic pr-2;
    }
    span {
        @apply block;
    }
</style>

<div>
    <strong>{level.title}</strong>
    <em>File:</em> <code>{level.file}</code>
    <em>Scope:</em> <span>{level.accessWhere}</span>
    <em>Access:</em> <code>{level.accessCode}</code>
    <em>Examples:</em> <span>{level.example}</span>
</div>