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

module.exports = flatten;