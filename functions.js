const functions = {
    
    arrayFrom: (turnMeIntoAnArray) => Array.from(turnMeIntoAnArray),
    arrayIsArray: (array) => Array.isArray(array),
    arrayOf: (nonArr) => Array.of(nonArr),
    arrConcat: (arr1, arr2) => arr1.concat(arr2),
    arrIncludes: (array, value) => array.includes(value),
    arrCopyWithin: (array, target, start, end) => array.copyWithin(target, start, end),
    arrEntries: (array) => {
        let entries = []
        for (let e of array.entries()) {
            entries.push(e)
        }
        return entries
    },
    arrEvery: (array) => array.every(e => e <= 10),
    arrFill: (array, value, start, end) => array.fill(value, start, end),
    arrFilter: (array, callback) => array.filter(callback),
    arrFind: (array, callback) => array.find(callback),
    arrFindIndex: (array, callback) => array.findIndex(callback),
    arrFlat: (array, depth) => array.flat(depth),
    arrFlatMap: (array, callback) => array.flatMap(callback),
    arrForEach: (array, callback) => {
        array.forEach(callback) 
        return array    
    },
    arrFrom: (input, callback) => Array.from(input, callback),
}


module.exports = functions;