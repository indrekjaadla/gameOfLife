import {expect, test} from "vitest";
import {
    fillArrayWith,
    generateEmptyField,
    initialPositionBeacon,
    initialPositionBlinker,
    initialPositionToad
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
