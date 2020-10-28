// FUNCTION IMPLEMENTATION
const flatten = function(array) {
  let result = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const item of element) {
        result.push(item);
      }
    } else {
      result.push(element);
    }
  }
  return result;
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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [], 5, [6]]), [1, 2, 5, 6]);
assertArraysEqual(flatten([1, 2, [], 5, []]), [1, 2, 5]);
assertArraysEqual(flatten([[1, 2], [5]]), [1, 2, 5]);