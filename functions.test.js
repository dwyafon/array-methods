const functions = require('./functions')

// arrayFrom
test('returns an array from a passed string', () => {
    expect(functions.arrayFrom('goo')).toEqual(['g','o','o']);
});

//arrayIsArray
test('returns true when passed an array; returns false when passed a non-array', () => {
    expect(functions.arrayIsArray([1, 2, 3])).toEqual(true)
    expect(functions.arrayIsArray('Dale Cooper')).toEqual(false)
});

//arrayOf
test('returns an array when passed a non-array', () => {
    expect(functions.arrayOf('Dale Cooper')).toEqual(['Dale Cooper'])
})

//arrConcat
test('concats two arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    expect(functions.arrConcat(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6])
})