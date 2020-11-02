const assert = require('chai').assert;
const _= require('../index');

describe("without", () => {

  it('returns [2, 3] for [1, 2, 3], [1]', () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"] for ["1", "2", "3"], [1, 2, "3"], ', () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('returns ["1", "2", "3"] for ["1", "2", "3"], []', () => {
    assert.deepEqual(_.without(["1", "2", "3"], []), ["1", "2", "3"]);
  });

  it('returns [] for [], [])', () => {
    assert.deepEqual(_.without([], []), []);
  });

  it('returns [5] for [5, 6, 6, 6], [6, 6])', () => {
    assert.deepEqual(_.without([5, 6, 6, 6], [6, 6]), [5]);
  });

});