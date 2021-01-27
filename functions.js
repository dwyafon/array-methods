const functions = {
  arrFrom: (turnMeIntoAnArray) => Array.from(turnMeIntoAnArray),

  arrOf: (nonArr) => Array.of(nonArr),
  arrConcat: (arr1, arr2) => arr1.concat(arr2),
  arrCopyWithin: (array, target, start, end) =>
    array.copyWithin(target, start, end),
  arrEntries: (array) => {
    let entries = [];
    for (let e of array.entries()) {
      entries.push(e);
    }
    return entries;
  },
  arrEvery: (array) => array.every((e) => e <= 10),
  arrFill: (array, value, start, end) => array.fill(value, start, end),
  arrFilter: (array, callback) => array.filter(callback),
  arrFind: (array, callback) => array.find(callback),
  arrFindIndex: (array, callback) => array.findIndex(callback),
  arrFlat: (array, depth) => array.flat(depth),
  arrFlatMap: (array, callback) => array.flatMap(callback),
  arrForEach: (array, callback) => {
    array.forEach(callback);
    return array;
  },
  arrFrom: (input, callback) => Array.from(input, callback),
  arrIncludes: (array, value) => array.includes(value),
  arrIndexOf: (array, value, indexFrom) => array.indexOf(value, indexFrom),
  arrIsArray: (array) => Array.isArray(array),
  arrJoin: (array, separator) => array.join(separator),
  arrKeys: (array) => [...array.keys()],
  arrLastIndexOf: (array, value) => array.lastIndexOf(value),
  arrMap: (array, callback) => array.map(callback),
  arrPop: (array) => array.pop(),
  arrPush1: (array) => array.push("4"),
  arrPush2: (array1, array2) => {
    Array.prototype.push.apply(array1, array2);
    return array1;
  },
  arrReduce: (array) => array.reduce((acc, cur) => {
    if (cur in acc) acc[cur]++
    else acc[cur] = 1
    return acc
  }, {}),
  arrReduceRight: (array) => array.reduceRight((acc, cur) => {
    return acc.concat(cur)
  }, []),
  arrReverse: (array) => Array.prototype.reverse.call(array),
  arrShift: (input) => Array.prototype.shift.call(input),
  arrSlice: (array, start, end) => array.slice(start, end),
  arrSome: (array, test) => array.some(test),
  arrSort: (array) => array.sort((a, b) => a.accessLevel - b.accessLevel),
  arrSplice: (array) => array.splice(2, 4, 3, 4, 5),
  arrToLocaleString: (array) => array.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'}),
  arrToString: (array) => array.toString()
};

module.exports = functions;
