const assert = require('chai').assert;
const _= require('../index');

describe("assertEqual", () => {
  it('returns false for "Lighthouse Labs", "Bootcamp"', () => {
    assert.strictEqual(_.assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it('returns true for 1, 1', () => {
    assert.strictEqual(_.assertEqual(1, 1), true);
  });

});