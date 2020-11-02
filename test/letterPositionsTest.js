const assert = require('chai').assert;
const _= require('../index');

describe("letterPositions", () => {

  it("returns [0] for ('hello')['h']", () => {
    assert.deepEqual(_.letterPositions("hello")['h'], [0]);
  });

  it("returns [1] for ('hello')['e']", () => {
  assert.deepEqual(_.letterPositions("hello")['e'], [1]);
  });

  it("returns [2, 3] for ('hello')['l']", () => {
    assert.deepEqual(_.letterPositions("hello")['l'], [2, 3]);
    });

  it("returns [4] for ('hello')['o']", () => {
    assert.deepEqual(_.letterPositions("hello")['o'], [4]);
    });

});