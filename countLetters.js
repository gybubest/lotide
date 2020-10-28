// FUNCTION IMPLEMENTATION
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

// TEST CODE
console.log(countLetters(""));
console.log(countLetters(" lighthouse in the house "));
console.log(countLetters("lighthouse in the house"));
// Expected output:
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }