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

module.exports = countOnly;