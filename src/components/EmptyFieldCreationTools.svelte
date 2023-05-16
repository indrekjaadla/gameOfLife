<script>
    import {
        generateEmptyField,
        setCellMeasurements
    } from "../helpers/helpers.js";

    let nOfRows = 3
    let nOfColumns = 3
    export let fieldCreated
    export let field

    function handleCreateEmptyField() {
        nOfRows = parseInt(document.getElementById('cellsSouth').value)
        nOfColumns = parseInt(document.getElementById('cellsEast').value)

        field = generateEmptyField(nOfRows, nOfColumns)
        fieldCreated = true

        setCellMeasurements(nOfRows, nOfColumns)
    }
</script>

<form class="flex-container-row" on:submit|preventDefault={handleCreateEmptyField}>
    <input type="number" placeholder="Cells to South" min="3" max="50" value={nOfRows} id="cellsSouth">
    <input type="number" placeholder="Cells To East" min="3" max="50" value={nOfColumns} id="cellsEast">
    <button type="submit">Create Field</button>
</form>