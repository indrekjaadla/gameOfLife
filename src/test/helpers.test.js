import {expect, test} from "vitest";
import {
    countSurroundingLiveCells,
    fillArrayWith,
    generateEmptyField,
    generateNextGenerationField,
    initialPositionBeacon,
    initialPositionBlinker,
    initialPositionToad,
    isCellPresent
} from "src/helpers/helpers.js"

test('fillArrayWithNumber', () => {
    let arrayLength = 5
    let arrayToFill = new Array(arrayLength)
    let fillingElement = 666

    fillArrayWith(fillingElement, arrayToFill)

    expect(arrayToFill[0]).equal(fillingElement)
    expect(arrayToFill[arrayLength - 1]).equal(fillingElement)

    console.log(arrayToFill[arrayLength - 1])
})

test('fillArrayWithString', () => {
    let arrayLength = 5
    let arrayToFill = new Array(arrayLength)
    let fillingElement = 'testString'

    fillArrayWith(fillingElement, arrayToFill)

    expect(arrayToFill[0]).equal(fillingElement)
    expect(arrayToFill[arrayLength - 1]).equal(fillingElement)

    console.log(arrayToFill[arrayLength - 1])
})

// test('fillArrayWithArray', () => {
//     let arrayLength = 5
//     let arrayToFill = new Array(arrayLength)
//     let fillingElement = []
//
//     fillArrayWith(arrayToFill, fillingElement)
//
//     expect(arrayToFill[0]).equal(typeof fillingElement)
//     expect(arrayToFill[arrayLength - 1]).equal(fillingElement)
//
//     console.log(arrayToFill[arrayLength - 1])
// })

test('emptyField', () => {
    let nOfRows = 6
    let nOfColumns = 6
    let emptyField = generateEmptyField(nOfRows, nOfColumns)

    expect(emptyField.length).equal(nOfRows)
    expect(emptyField[0].length).equal(nOfColumns)

    for (let i = 0; i < emptyField.length; i++) {
        for (let j = 0; j < emptyField[i]; j++) {
            expect(emptyField[i][j]).equal(0)
        }
    }
})

test('isCellPresent', () => {
    let gameField = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]

    expect(isCellPresent(-1, 0, gameField)).equal(false)
    expect(isCellPresent(3, 0, gameField)).equal(false)

    expect(isCellPresent(0, -1, gameField)).equal(false)
    expect(isCellPresent(0, -3, gameField)).equal(false)

    expect(isCellPresent(0, 0, gameField)).equal(true)
    expect(isCellPresent(1, 1, gameField)).equal(true)
    expect(isCellPresent(2, 2, gameField)).equal(true)
})

test('surroundingLifeCounterCorner', () => {
    let indexOfRow = 0
    let indexOfColumn = 0
    let gameField = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]]

    expect(countSurroundingLiveCells(indexOfRow, indexOfColumn, gameField)).equal(3)
})

test('surroundingLifeCounterMiddle', () => {
    let indexOfRow = 1
    let indexOfColumn = 1
    let gameField = [
        [0, 1, 0],
        [0, 1, 1],
        [1, 0, 1]]

    expect(countSurroundingLiveCells(indexOfRow, indexOfColumn, gameField)).equal(4)
})

test('generateNextGenerationField', () => {
    let currentGenerationField = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]

    let nextGenerationField = generateNextGenerationField(currentGenerationField)

    for (let i = 0; i < nextGenerationField.length; i++) {
        for (let j = 0; j < nextGenerationField[i]; j++) {
            expect(nextGenerationField[i][j]).equal(currentGenerationField[i][j])
        }
    }
})
