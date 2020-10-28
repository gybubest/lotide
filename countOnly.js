// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const trueNameArray = function(itemsToCount) {
    let result = [];
    for (let item in itemsToCount) {
      if (itemsToCount[item]) {
        result.push(item);
      }
    }
    return result;
  };

  const addToObj = function(key, object) {
    if (object[key]) {
      object[key] ++;
    } else {
      object[key] = 1;
    }
  };

  const trueNames = trueNameArray(itemsToCount);
  let result = {};
  for (let name of allItems) {
    if (trueNames.indexOf(name) !== -1) {
      addToObj(name, result);
    }
  }
  return result;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);