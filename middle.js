// TEST/ASSERTION FUNCTIONS
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

// FUNCTION IMPLEMENTATION
const middle = function(array) {
  if (array.length <= 2) {
    return array;
  }

  let result = [];
  if (array.length % 2 !== 0) {
    let startPoint = Math.floor(array.length / 2);
    result.push(array[startPoint]);
  } else {
    let startPoint = Math.floor(array.length / 2) - 1;
    for (let i = 0; i < 2; i++) {
      result.push(array[startPoint + i]);
    }
  }
  return result;
};


// TEST CODE
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1, 2]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);