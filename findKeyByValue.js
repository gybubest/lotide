const findKeyByValue = function(object, value) {
  let result;
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return result;
};

module.exports = findKeyByValue;