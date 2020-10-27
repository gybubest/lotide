const verifyItem = function(element, itemsToRemove) {
  for (let item of itemsToRemove) {
    if (element === item) {
      return true;
    } 
  }
  return false;
};

const without = function(source, itemsToRemove) {
  let accumulator = [];
  for (let element of source) {
    if (verifyItem(element, itemsToRemove) === false) {
      accumulator.push(element);
    }
  }
  return accumulator;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    // console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    console.log(`✅✅✅ Assertion Passed.`);
  } else {
    // console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    console.log(`🛑🛑🛑 Assertion Failed.`);
  }
};

// TEST CODE
console.log(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
console.log(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS
console.log(without(["1", "2", "3"], []), ["1", "2", "3"]);
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]); // => should PASS
console.log(without([], []), []);
assertArraysEqual(without([], []), []); // => should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);