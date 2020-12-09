const functions = {
    arrayFrom: (turnMeIntoAnArray) => Array.from(turnMeIntoAnArray),
    arrayIsArray: (array) => Array.isArray(array),
    arrayOf: (nonArr) => Array.of(nonArr),
    arrConcat: (arr1, arr2) => arr1.concat(arr2)
}

module.exports = functions;