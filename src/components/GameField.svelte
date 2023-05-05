<script>
    import {generateEmptyField} from "../helpers/helpers.js";

    let nOfRows = 3
    let nOfColumns = 3
    let gameField = generateEmptyField(nOfRows, nOfColumns)
</script>

<div class="game-field">
    {#each gameField as row, i}
        <div class="game-row">
            {#each row as cell, j}
                <div class="{cell === 1 ? 'cell-life' : 'cell-death'}"></div>
                <!--{j++}-->
            {/each}
        </div>
        <!--{i++}-->
    {/each}
</div>

<style>
    .game-field {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    .game-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0;
    }

    .cell-life {
        background-color: green;
        padding: 5rem;
        margin: 0;
    }

    .cell-death {
        background-color: red;
        padding: 5rem;
        margin: 1rem;
    }
</style>
