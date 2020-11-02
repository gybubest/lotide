const assert = require('chai').assert;
const _= require('../index');

describe("map", () => {

  it("returns [ 'g', 'c', 't', 'm', 't' ] for (['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

});