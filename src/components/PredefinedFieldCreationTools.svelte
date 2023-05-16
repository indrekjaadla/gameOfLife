<script>
    import {
        generateNextGenerationField,
        initialPositionBeacon,
        initialPositionBlinker,
        initialPositionToad,
        setCellMeasurements
    } from "../helpers/helpers.js";

    export let fieldCreated
    export let field
    let isMutating = false
    let interval

    function handleBlinker() {
        fieldCreated = true;
        field = initialPositionBlinker
        let nOfRows = field.length
        let nOfColumns = field[0].length
        setCellMeasurements(nOfRows, nOfColumns)
    }

    function handleToad() {
        fieldCreated = true;
        field = initialPositionToad
        let nOfRows = field.length
        let nOfColumns = field[0].length
        setCellMeasurements(nOfRows, nOfColumns)
    }

    function handleBeacon() {
        fieldCreated = true;
        field = initialPositionBeacon
        let nOfRows = field.length
        let nOfColumns = field[0].length
        setCellMeasurements(nOfRows, nOfColumns)
    }

    function setField(fieldToSet) {
        field = fieldToSet;
    }

    function handleMutateLife() {
        handleStopLife()
        fieldCreated = true
        isMutating = true
        interval = setInterval(() => {
            field = generateNextGenerationField(field)
        }, 300)
    }

    function handleStopLife() {
        isMutating = false
        clearInterval(interval)
    }
</script>

<div class="flex-container-row">
    <button on:click={handleBlinker}>Blinker</button>
    <button on:click={handleToad}>Toad</button>
    <button on:click={handleBeacon}>Beacon</button>
    {#if isMutating}
        <button on:click={handleStopLife}>Stop life</button>
    {:else}
        <button on:click={handleMutateLife}>Mutate life</button>
    {/if}
</div>