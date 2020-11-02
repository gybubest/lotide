const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const keys = Object.keys(object1);
  for (let key of keys) {
    let value1 = object1[key];
    let value2 = object2[key];
    // if (value2 === undefined) {
    //   return false;
    // }
    if (value1 === value2) {
      continue;
    }
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof (value1) === 'object' || typeof (value2) === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else {
      // if (value1 !== value2) {
      //   return false
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;