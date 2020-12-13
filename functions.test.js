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

//arrIncludes
test('returns true when array includes value; returns false when arrays does not include value', () => {
    expect(functions.arrIncludes([1, 2, 3], 3)).toEqual(true)
    expect(functions.arrIncludes([1, 2, 3], 4)).toEqual(false)
});

//arrCopyWithin
test('returns a mutated array with positive-index and negative-index targets', () => {
    expect(functions.arrCopyWithin(['a', 'b', 'c'], 0, 2)).toEqual(['c', 'b', 'c'])
    expect(functions.arrCopyWithin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -5, 0, -5)).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
});

test('returns an array of arrays from an array iterator object with keys and values', () => {
    expect(functions.arrEntries(['a', 'b', 'c'])).toEqual([[0, 'a'], [1, 'b'], [2, 'c']])
});

