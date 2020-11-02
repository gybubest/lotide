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

module.exports = middle;