<script>
    import Field from "./Field.svelte";
    import EmptyFieldCreationTools from "./EmptyFieldCreationTools.svelte";
    import PredefinedFieldCreationTools from "./PredefinedFieldCreationTools.svelte";
    import Heading from "./Heading.svelte";

    let fieldCreated = false
    let field
</script>

<Heading/>
{#if fieldCreated}
    <PredefinedFieldCreationTools bind:fieldCreated bind:field/>
{:else}
    <EmptyFieldCreationTools bind:fieldCreated bind:field/>
{/if}
<Field bind:fieldCreated bind:field/>