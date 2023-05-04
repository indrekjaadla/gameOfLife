import {expect, test} from "vitest";
// import { assertType, expectTypeOf } from 'vitest'
import {arrayFiller, generateEmptyField} from "src/helpers/helpers.js"

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

test('arrayFillerArray', () => {
    let arrayLength = 5
    let arrayToFill = new Array(arrayLength)
    let fillingElement = []
    arrayFiller(arrayToFill, fillingElement)
    expect(arrayToFill[0]).equal(fillingElement)
    expect(arrayToFill[arrayLength - 1]).equal(fillingElement)
    console.log(arrayToFill[arrayLength - 1])
})

test('emptyField', () => {
    let nOfRows = 6
    let nOfColumns = 6
    expect(generateEmptyField(nOfRows, 10).length).equal(nOfRows)
    expect(generateEmptyField(nOfRows, nOfColumns)[0].length).equal(nOfColumns)

    expect(generateEmptyField(nOfRows, nOfColumns)[0][0]).equal(0)
    expect(generateEmptyField(nOfRows, nOfColumns)[0][nOfColumns - 1]).equal(0)

    expect(generateEmptyField(nOfRows, nOfColumns)[nOfRows - 1][0]).equal(0)
    expect(generateEmptyField(nOfRows, nOfColumns)[nOfRows - 1][nOfColumns - 1]).equal(0)
})
