<script>

    export let field
    export let fieldCreated

    function handleCellClick(event) {
        let coordinates = event.target.id.split('_')
        let rowNumber = parseInt(coordinates[0])
        let columnNumber = parseInt(coordinates[1])
        let cellState = field[rowNumber][columnNumber]

        if (cellState === 1) {
            field[rowNumber][columnNumber] = 0
        } else {
            field[rowNumber][columnNumber] = 1
        }
    }
</script>

<div class="game-field">
    {#if fieldCreated}
        {#each field as row, i}
            <div class="game-row">
                {#each row as cell, j}
                    <div class="{cell === 1 ? 'cell-life' : 'cell-death'}"
                         id="{i}_{j}"
                         on:click={handleCellClick}>
                    </div>
                {/each}
            </div>
        {/each}
    {/if}
</div>

<style>
    .game-field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 0;
        flex: 80%
    }

    .game-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0;
    }

    .cell-life {
        background-color: black;
        padding: var(--cell-padding);
        margin: var(--cell-margin);
    }

    .cell-death {
        background-color: red;
        padding: var(--cell-padding);
        margin: var(--cell-margin);
    }
</style>