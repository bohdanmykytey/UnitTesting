const { clone } = require('@babel/types');
const { test, expect } = require('@jest/globals')
const cloneArr = require('./cloneArray');

test('Properly clones array', () => {
    const arr = [1,2,3];
    expect(cloneArr(arr)).toEqual(arr)
})