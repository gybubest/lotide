const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (key !== ' ') {
      if (results[key]) {
        results[key].push(i);
      } else {
        results[key] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;