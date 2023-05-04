import {expect, test} from "vitest";
// import { assertType, expectTypeOf } from 'vitest'
import {arrayFiller, generateEmptyField, initialPositionBlinker} from "src/helpers/helpers.js"

test('arrayFillerNumber', () => {
    let arrayLength = 5
    let arrayToFill = new Array(arrayLength)
    let fillingElement = 666

    arrayFiller(arrayToFill, fillingElement)

    expect(arrayToFill[0]).equal(fillingElement)
    expect(arrayToFill[arrayLength - 1]).equal(fillingElement)

    console.log(arrayToFill[arrayLength - 1])
})

test('arrayFillerString', () => {
    let arrayLength = 5
    let arrayToFill = new Array(arrayLength)
    let fillingElement = 'testString'

    arrayFiller(arrayToFill, fillingElement)

    expect(arrayToFill[0]).equal(fillingElement)
    expect(arrayToFill[arrayLength - 1]).equal(fillingElement)

    console.log(arrayToFill[arrayLength - 1])
})

// test('arrayFillerArray', () => {
//     let arrayLength = 5
//     let arrayToFill = new Array(arrayLength)
//     let fillingElement = []
//
//     arrayFiller(arrayToFill, fillingElement)
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
