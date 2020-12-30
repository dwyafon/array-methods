const functions = require("./functions");

// arrayFrom
test("returns an array from a passed string", () => {
  expect(functions.arrayFrom("goo")).toEqual(["g", "o", "o"]);
});

//arrayIsArray
test("returns true when passed an array; returns false when passed a non-array", () => {
  expect(functions.arrayIsArray([1, 2, 3])).toEqual(true);
  expect(functions.arrayIsArray("Dale Cooper")).toEqual(false);
});

//arrayOf
test("returns an array when passed a non-array", () => {
  expect(functions.arrayOf("Dale Cooper")).toEqual(["Dale Cooper"]);
});

//arrConcat
test("concats two arrays", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  expect(functions.arrConcat(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
});

//arrIncludes
test("returns true when array includes value; returns false when arrays does not include value", () => {
  expect(functions.arrIncludes([1, 2, 3], 3)).toEqual(true);
  expect(functions.arrIncludes([1, 2, 3], 4)).toEqual(false);
});

//arrCopyWithin
test("returns a mutated array with positive-index and negative-index targets", () => {
  expect(functions.arrCopyWithin(["a", "b", "c"], 0, 2)).toEqual([
    "c",
    "b",
    "c",
  ]);
  expect(
    functions.arrCopyWithin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -5, 0, -5)
  ).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
});

//arrEntries
test("returns an array of arrays from an array iterator object with keys and values", () => {
  expect(functions.arrEntries(["a", "b", "c"])).toEqual([
    [0, "a"],
    [1, "b"],
    [2, "c"],
  ]);
});

//arrEvery
test("returns true if all elements pass the given test; returns false if at least one element fails the given test", () => {
  expect(functions.arrEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(true);
  expect(functions.arrEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual(
    false
  );
});

//arrFill
test("returns a modifed array given a specific value as well as optional start and end indices", () => {
  expect(functions.arrFill([1, 1, 1, 1, 1], 0, 2, 3)).toEqual([1, 1, 0, 1, 1]);
  expect(functions.arrFill([0, 0, 0, 0, 0], 100)).toEqual([
    100,
    100,
    100,
    100,
    100,
  ]);
});

//arrFilter
test("returns a filtered array with all elements that pass a given callback function", () => {
  const callback = (e) => e.indexOf("1") !== -1 || e.indexOf("0") !== -1;
  const array = ["1010101", "111", "333", "1001"];
  expect(functions.arrFilter(array, callback)).toEqual([
    "1010101",
    "111",
    "1001",
  ]);
});

//arrFind
test("returns the first value that passes a given testing function; otherwise, returns undefined", () => {
  const callback1 = (e) => e === "Audrey";
  const callback2 = (e) => e === "Pete";
  const array = ["Dale", "Hawk", "Lucy", "Harry", "Audrey"];
  expect(functions.arrFind(array, callback1)).toEqual("Audrey");
  expect(functions.arrFind(array, callback2)).toEqual(undefined);
});

//arrFindIndex
test("returns the index of the first value that passes a given test; if no element passes, -1 is returned", () => {
  const callback1 = (e) => e !== 0 && e !== 1;
  const callback2 = (e) => e === 3;
  const array = [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 2, 1, 1, 1, 0, 1, 0];
  expect(functions.arrFindIndex(array, callback1)).toEqual(12);
  expect(functions.arrFindIndex(array, callback2)).toEqual(-1);
});

//arrFlat
test("returns an array flattened to the specified depth; specified depth defaults to 1", () => {
  const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
  const array2 = [[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]]]]]
  expect(functions.arrFlat(array, 1)).toEqual([1, 2, 3, 4, 5, 6, [7, 8, 9, [10, 11, 12]]]);
  expect(functions.arrFlat(array, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12]]);
  expect(functions.arrFlat(array, 3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  expect(functions.arrFlat(array2, Infinity)).toEqual([1]);
});

//arrFlatMap
test("return an array to which a callback function is applied (on each element) and which is flattened by one level", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const callback1 = e => [e * 2]
  const callback2 = e => [[e * 2]]
  expect(functions.arrFlatMap(array, callback1)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  expect(functions.arrFlatMap(array, callback2)).toEqual([[2], [4], [6], [8], [10], [12], [14], [16], [18], [20]]);
});

//arrForEach
test("return the result of operating on each element in an array", () => {
  const array = ['a', 'b', 'c', 'd']
  const array2 = [1, 2, 3]
  const callback = (element, index, arr) => arr[index] = element.concat(', ', `index: ${index}`)
  const callback2 = (element, index, arr)  => arr[index] = element * 100 
  expect(functions.arrForEach(array, callback)).toEqual(['a, index: 0', 'b, index: 1', 'c, index: 2', 'd, index: 3']); 
  expect(functions.arrForEach(array2, callback2)).toEqual([100, 200, 300]);
});

//arrFrom
test("return an Array instance from passed iterable, with an optional map operation", () => {
  const input1 = "hello"
  const input2 = {length: 10}
  const callback = (_, i) => i
  expect(functions.arrFrom(input1)).toEqual(['h', 'e', 'l', 'l', 'o']);
  expect(functions.arrFrom(input2, callback)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
})