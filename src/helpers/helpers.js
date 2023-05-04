//TODO web application for Conway's Game of Life.
//TODO TDD of game logic in JS
//TODO visualizing - black/white table
//TODO initial pattern hardcoded blinker
//TODO user can choose between predefined patterns

export let initialPositionBlinker = generateEmptyField(5, 5)
initialPositionBlinker[2][1] = 1
initialPositionBlinker[2][2] = 1
initialPositionBlinker[2][3] = 1

export let initialPositionToad = generateEmptyField(6, 6)
initialPositionToad[2][2] = 1
initialPositionToad[2][3] = 1
initialPositionToad[2][4] = 1
initialPositionToad[3][1] = 1
initialPositionToad[3][2] = 1
initialPositionToad[3][3] = 1

export let initialPositionBeacon = generateEmptyField(6, 6)
initialPositionBeacon[1][1] = 1
initialPositionBeacon[1][2] = 1
initialPositionBeacon[2][1] = 1
initialPositionBeacon[2][2] = 1
initialPositionBeacon[3][3] = 1
initialPositionBeacon[3][4] = 1
initialPositionBeacon[4][3] = 1
initialPositionBeacon[4][4] = 1


export function fillArrayWith(fillingElement, arrayToFill) {
    for (let i = 0; i < arrayToFill.length; i++) {
        try {
            arrayToFill[i] = fillingElement.slice(0)
        } catch (e) {
            arrayToFill[i] = fillingElement
        }
    }
}

export function generateEmptyField(nOfRows, nOfColumns) {
    let a = new Array(nOfRows)
    let b = new Array(nOfColumns)

    fillArrayWith(0, b);
    fillArrayWith(b, a);

    return a;
}

export function isCellPresent(indexOfRow, indexOfColumn, gameField) {
    if (gameField[indexOfRow] === undefined) {
        return false
    } else if (gameField[indexOfRow][indexOfColumn] === undefined) {
        return false
    } else {
        return true
    }
}

export function countSurroundingLiveCells(indexOfRow, indexOfColumn, gameField) {
    let surroundingAliveCells = 0

    for (let i = indexOfRow - 1; i < indexOfRow + 2; i++) {
        for (let j = indexOfColumn - 1; j < indexOfColumn + 2; j++) {
            if (isCellPresent(i, j, gameField)) {
                surroundingAliveCells += gameField[i][j]
            }
        }
    }

    surroundingAliveCells -= gameField[indexOfRow][indexOfColumn]
    return surroundingAliveCells
}

export function generateNextGenerationField(currentGenerationField) {
    return undefined
}
