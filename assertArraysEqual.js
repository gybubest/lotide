// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let result = false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
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
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL