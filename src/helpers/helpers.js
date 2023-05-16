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

export let initialPositionGlider = generateEmptyField(20, 20)
initialPositionGlider[0][1] = 1
initialPositionGlider[1][2] = 1
initialPositionGlider[2][0] = 1
initialPositionGlider[2][1] = 1
initialPositionGlider[2][2] = 1

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

export function setCellMeasurements(nOfRows, nOfColumns) {
    let clientHeight = document.querySelector(':root').clientHeight
    let clientWidth = document.querySelector(':root').clientWidth

    let cellSideMeasurement =
        Math.min(
            Math.round(clientHeight * 0.8 / nOfRows),
            Math.round(clientWidth / nOfColumns))

    let cellUnit = cellSideMeasurement / 9
    let cellPadding = cellUnit * 4 + 'px'
    let cellMargin = cellUnit * 0.5 + 'px'

    console.log(cellSideMeasurement)
    console.log(clientHeight)

    document.querySelector(':root').style.setProperty('--cell-padding', cellPadding)
    document.querySelector(':root').style.setProperty('--cell-margin', cellMargin)
}

export function isCellPresent(indexOfRow, indexOfColumn, gameField) {
    if (gameField[indexOfRow] === undefined) {
        return false
    } else return gameField[indexOfRow][indexOfColumn] !== undefined;
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

export function decideLifeOrDeath(indexOfRow, indexOfColumn, gameField) {
    let countOfSurroundingLiveCells = countSurroundingLiveCells(indexOfRow, indexOfColumn, gameField)
    let currentState = gameField[indexOfRow][indexOfColumn]

    if (countOfSurroundingLiveCells === 3 || countOfSurroundingLiveCells === 2 && currentState === 1) {
        return 1
    } else {
        return 0
    }
}

export function generateNextGenerationField(currentGenerationField) {
    let nextGenerationField = generateEmptyField(currentGenerationField.length, currentGenerationField[0].length)

    for (let i = 0; i < currentGenerationField.length; i++) {
        for (let j = 0; j < currentGenerationField[i].length; j++) {
            nextGenerationField[i][j] = decideLifeOrDeath(i, j, currentGenerationField)
        }
    }

    return nextGenerationField
}