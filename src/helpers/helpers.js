//TODO web application for Conway's Game of Life.
//TODO TDD of game logic in JS
//TODO visualizing - black/white table
//TODO initial pattern hardcoded blinker
//TODO user can choose between predefined patterns

export function arrayFiller(arrayToFill, fillingElement) {
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

    arrayFiller(b, 0);
    arrayFiller(a, b);

    return a;
}
