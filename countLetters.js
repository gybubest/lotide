const countLetters = function(sentence) {
  const addToObj = function(key, object) {
    if (object[key]) {
      object[key] ++;
    } else {
      object[key] = 1;
    }
  };

  let result = {};
  let string = sentence.split(' ').join('');
  for (let letter of string) {
    addToObj(letter, result);
  }
  return result;
};

module.exports = countLetters;