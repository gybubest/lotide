const assert = require('chai').assert;
const _= require('../index');

describe("countLetters", () => {
  const result = {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  };

  it('returns {} for ""', () => {
    assert.deepEqual(_.countLetters(""), {});
  });

  it('returns result for " lighthouse in the house "', () => {
    assert.deepEqual(_.countLetters(" lighthouse in the house "), result);
  });

  it('returns result for "lighthouse in the house"', () => {
    assert.deepEqual(_.countLetters("lighthouse in the house"), result);
  });

});