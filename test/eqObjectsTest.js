const assert = require('chai').assert;
const _= require('../index');

describe("eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const c = {c: "3" };
  const e = {};
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it('returns true for (ab, ba)', () => {
    assert.deepEqual(_.eqObjects(ab, ba), true);
  });

  it('returns false for (ab, abc)', () => {
    assert.deepEqual(_.eqObjects(ab, abc), false);
  });

  it('returns false for (ab, c)', () => {
    assert.deepEqual(_.eqObjects(ab, c), false);
  });

  it('returns false for (ab, e)', () => {
    assert.deepEqual(_.eqObjects(ab, e), false);
  });

  it('returns false for (cd, cd2)', () => {
    assert.deepEqual(_.eqObjects(cd, cd2), false);
  });

  it('returns true for (cd, dc)', () => {
    assert.deepEqual(_.eqObjects(cd, dc), true);
  });

  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns true for { a: { z: ["2", 3, 4] }, b: 2 }, { a: { z: ["2", 3, 4] }, b: 2 }', () => {
    assert.deepEqual(_.eqObjects({ a: { z: ["2", 3, 4] }, b: 2 }, { a: { z: ["2", 3, 4] }, b: 2 }), true);
  });

 it('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false for { a: { z: 1 }, b: {d: 2} }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(_.eqObjects({ a: { z: 1 }, b: {d: 2} }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
    assert.deepEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
