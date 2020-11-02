const findKey = function(object, callback) {
  let result;
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return result;
};

module.exports = findKey;