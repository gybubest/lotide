const assert = require('chai').assert;
const _= require('../index');

describe("assertObjectsEqual", () => {
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const c = {c: "3" };
  const e = {};
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it('returns true for (ab, ba)', () => {
    assert.deepEqual(_.assertObjectsEqual(ab, ba), true);
  });

  it('returns false for (ab, abc)', () => {
    assert.deepEqual(_.assertObjectsEqual(ab, abc), false);
  });

  it('returns false for (ab, c)', () => {
    assert.deepEqual(_.assertObjectsEqual(ab, c), false);
  });

  it('returns false for (ab, e)', () => {
    assert.deepEqual(_.assertObjectsEqual(ab, e), false);
  });

  it('returns true for (cd, dc)', () => {
    assert.deepEqual(_.assertObjectsEqual(cd, dc), true);
  });

  it('returns false for (cd, cd2)', () => {
    assert.deepEqual(_.assertObjectsEqual(cd, cd2), false);
  });

});