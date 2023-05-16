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

    function handleMutateLife() {
        fieldCreated = true;
        field = generateNextGenerationField(field)
    }
</script>

<div class="flex-container-row">
    <button on:click={handleBlinker}>Blinker</button>
    <button on:click={handleToad}>Toad</button>
    <button on:click={handleBeacon}>Beacon</button>
    <button on:click={handleMutateLife}>Mutate life</button>
</div>