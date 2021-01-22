const { test, expect } = require('@jest/globals')
const subtract = require('./subtract');

test('Expecting proper subtraction', () =>  {
    expect(subtract(1,2)).toBe(-1)
})