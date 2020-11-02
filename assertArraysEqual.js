const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertArraysEqual;