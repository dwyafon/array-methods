const functions = require("./functions");

// arrayFrom
test("returns an array from a passed string", () => {
  expect(functions.arrFrom("goo")).toEqual(["g", "o", "o"]);
});

//arrayOf
test("returns an array when passed a non-array", () => {
  expect(functions.arrOf("Dale Cooper")).toEqual(["Dale Cooper"]);
});

//arrConcat
test("concats two arrays", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  expect(functions.arrConcat(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
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
  const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
  const array2 = [[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]]]]];
  expect(functions.arrFlat(array, 1)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    [7, 8, 9, [10, 11, 12]],
  ]);
  expect(functions.arrFlat(array, 2)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    [10, 11, 12],
  ]);
  expect(functions.arrFlat(array, 3)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]);
  expect(functions.arrFlat(array2, Infinity)).toEqual([1]);
});

//arrFlatMap
test("return an array to which a callback function is applied (on each element) and which is flattened by one level", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const callback1 = (e) => [e * 2];
  const callback2 = (e) => [[e * 2]];
  expect(functions.arrFlatMap(array, callback1)).toEqual([
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
  ]);
  expect(functions.arrFlatMap(array, callback2)).toEqual([
    [2],
    [4],
    [6],
    [8],
    [10],
    [12],
    [14],
    [16],
    [18],
    [20],
  ]);
});

//arrForEach
test("return the result of operating on each element in an array", () => {
  const array = ["a", "b", "c", "d"];
  const array2 = [1, 2, 3];
  const callback = (element, index, arr) =>
    (arr[index] = element.concat(", ", `index: ${index}`));
  const callback2 = (element, index, arr) => (arr[index] = element * 100);
  expect(functions.arrForEach(array, callback)).toEqual([
    "a, index: 0",
    "b, index: 1",
    "c, index: 2",
    "d, index: 3",
  ]);
  expect(functions.arrForEach(array2, callback2)).toEqual([100, 200, 300]);
});

//arrFrom
test("return an Array instance from passed iterable, with an optional map operation", () => {
  const input1 = "hello";
  const input2 = { length: 10 };
  const callback = (_, i) => i;
  expect(functions.arrFrom(input1)).toEqual(["h", "e", "l", "l", "o"]);
  expect(functions.arrFrom(input2, callback)).toEqual([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]);
});

//arrIncludes
test("return true when array includes value; return false when arrays does not include value", () => {
  expect(functions.arrIncludes([1, 2, 3], 3)).toEqual(true);
  expect(functions.arrIncludes([1, 2, 3], 4)).toEqual(false);
});

//arrIndexOf
test("return the first index at which an element is found; return -1 if the element is not found", () => {
  expect(functions.arrIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, -3)).toEqual(
    9
  );
  expect(functions.arrIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, -3)).toEqual(
    -1
  );
  expect(functions.arrIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 0)).toEqual(
    1
  );
});

//arrIsArray
test("returns true when passed an array; returns false when passed a non-array", () => {
  expect(functions.arrIsArray([1, 2, 3])).toEqual(true);
  expect(functions.arrIsArray("Dale Cooper")).toEqual(false);
});

//arrJoin
test("returns a string from an array, with an optional separator", () => {
  expect(functions.arrJoin([1, 2, 3], "-")).toEqual("1-2-3");
  expect(functions.arrJoin([1, 2, 3], "")).toEqual("123");
  expect(functions.arrJoin([1, 2, 3])).toEqual("1,2,3");
});

//arrKeys
test("returns the keys from a passed array", () => {
  expect(functions.arrKeys([1, 2, 3, 4, 5])).toEqual([0, 1, 2, 3, 4]);
});

//arrLastIndexOf
test("returns the last index of a given value; if not present in the array, returns -1", () => {
  expect(functions.arrLastIndexOf([1, 2, 3, "four", 5], 4)).toEqual(-1);
  expect(
    functions.arrLastIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5], 5)
  ).toEqual(10);
});

//arrMap
test("returns a new array populated with the same-order results of calling a function on each element in the passed array", () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const callback1 = (e) => Math.pow(e, 3);
  expect(functions.arrMap(array1, callback1)).toEqual([
    1,
    8,
    27,
    64,
    125,
    216,
    343,
    512,
    729,
    1000,
  ]);
});

//arrPop
test("removes the last element from an array and returns it; if array is empty, returns undefined", () => {
  expect(
    functions.arrPop([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([7, 8, 9]);
  expect(functions.arrPop([])).toEqual(undefined);
});

//arrPush
test("returns the new length of the array on which push() was called", () => {
  expect(functions.arrPush1([1, 2, 3])).toEqual(4);
});

test("returns a new array from one array pushed to another array", () => {
  expect(functions.arrPush2([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

//arrReduce
test("returns a single value after calling a reducer function on each element, left to right, in an array", () => {
  expect(
    functions.arrReduce(["Dale", "Audrey", "Harry", "Dale", "Laura"])
  ).toEqual({ Dale: 2, Audrey: 1, Harry: 1, Laura: 1 });
});

test("return a single value after calling a reducer function on each element, right to left, in an array", () => {
  expect(
    functions.arrReduceRight([
      [4, 5],
      [2, 3],
      [0, 1],
    ])
  ).toEqual([0, 1, 2, 3, 4, 5]);
});

//arrReverse
test("returns a reversed array", () => {
  expect(functions.arrReverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

//arrReverse
test("returns a reversed array-like object", () => {
  expect(functions.arrReverse({ length: 3, 0: 2, 1: 3, 2: 4 })).toEqual({
    length: 3,
    0: 4,
    1: 3,
    2: 2,
  });
});

//arrShift
test("returns the value removed from the beginning of the array or array-like object", () => {
  expect(functions.arrShift([4, 1, 2, 3])).toEqual(4);
  expect(functions.arrShift({ length: 3, 0: "a", 1: "b", 2: "c" })).toEqual(
    "a"
  );
});

//arrSlice
test("returns the sliced portion of a passed array", () => {
  const start = 2;
  const end = 4;
  expect(
    functions.arrSlice(
      [{ 1: "a" }, { 2: "b" }, { 3: "c" }, { 4: "d" }, { 5: "e" }],
      start,
      end
    )
  ).toEqual([{ 3: "c" }, { 4: "d" }]);
});

//arrSome
test("returns true or false after checking if at least one value passes a provided test", () => {
  const test1 = (e) => e > 10;
  const test2 = (e) => e === "Dale";
  expect(functions.arrSome([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], test1)).toEqual(
    false
  );
  expect(
    functions.arrSome(["Dale", "Hawk", "Lucy", "Harry", "Audrey"], test2)
  ).toEqual(true);
});

//arrSort
test("returns a mutated array, with the values of the array sorted via the compare function", () => {
  const arr = [
    { name: "Dale", accessLevel: 3 },
    { name: "Laura", accessLevel: 1 },
    { name: "Audrey", accessLevel: 2 },
  ];
  const expectedOutput = [
    { name: "Laura", accessLevel: 1 },
    { name: "Audrey", accessLevel: 2 },
    { name: "Dale", accessLevel: 3 },
  ];
  expect(functions.arrSort(arr)).toEqual(expectedOutput);
});

//arrSplice
test("returns a mutated array after deleting and/or adding elements from/to the original array", () => {
  const arr = [1, 2, 2, 2, 3, 4, 6, 7, 8, 9, 10];
  const expectedOutput = [2, 2, 3, 4];
  expect(functions.arrSplice(arr)).toEqual(expectedOutput);
});

//arrToLocaleString
test("converts the elements within the array using their toLocaleString methods and returns one string", () => {
  const input = [100];
  expect(functions.arrToLocaleString(input)).toEqual("￥100");
});

//arrToString
test("returns a string representing the passed array", () => {
  expect(
    functions.arrToString([1, 2, 3, "4", "5", "6", true, false])
  ).toEqual("1,2,3,4,5,6,true,false");
});

//arrUnshift
test("mutates the array by adding the passed values to the passed array and return the mutated array", () => {
  expect(functions.arrUnshift([0, 1, 2, 3], -3, -2, -1)).toEqual([-3, -2, -1, 0, 1, 2, 3])
})
