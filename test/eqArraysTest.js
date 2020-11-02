const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays", () => {

  it('returns true for [], []', () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('returns true for [[2, 3], [4]], [[2, 3], [4]]', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns false for [[2, 3], [4]], [[2, 3], [4, 5]]', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('returns false for [[2, 3], [4]], [[2, 3], 4]', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it('returns true for [[], [4]], [[], [4]]', () => {
    assert.deepEqual(eqArrays([[], [4]], [[], [4]]), true);
  });

});