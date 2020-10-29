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

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback/predicate returns a truthy value.
// To keep things simple, the callback should only be provided one value: The item in the array.
// FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};



// Expected Input

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2,['I\'ve', 'been', 'to', 'Hollywood']);