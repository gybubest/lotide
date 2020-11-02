const verifyItem = function(element, itemsToRemove) {
  for (let item of itemsToRemove) {
    if (element === item) {
      return true;
    } 
  }
  return false;
};

const without = function(source, itemsToRemove) {
  let accumulator = [];
  for (let element of source) {
    if (verifyItem(element, itemsToRemove) === false) {
      accumulator.push(element);
    }
  }
  return accumulator;
};

module.exports = without;