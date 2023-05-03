import {expect, test} from "vitest";
import sum from "src/helpers/helpers.js"

test('1 + 1', () => {
    expect(sum(1, 1)).equal(2)
})

test('1 + 2 + 3', () => {
    expect(sum(1, 2, 3)).equal(6)
})