// // TEST/ASSERTION FUNCTIONS
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
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (key !== ' ') {
      if (results[key]) {
        results[key].push(i);
      } else {
        results[key] = [i];
      }
    }
  }
  return results;
};

// console.log(letterPositions("hello"));
// console.log(letterPositions(" hello"));
// console.log(letterPositions("he llo"));
// console.log(letterPositions("lighthouse in the house"));

// // TEST CODE
assertArraysEqual(letterPositions("hello")['h'], [0]); 
assertArraysEqual(letterPositions("hello")['e'], [1]); 
assertArraysEqual(letterPositions("hello")['l'], [2, 3]); 
assertArraysEqual(letterPositions("hello")['o'], [4]); 
