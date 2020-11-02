const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {

  it('returns 2 for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual((tail(["Hello", "Lighthouse", "Labs"]).length), 2);
  });

  it('returns "Lighthouse" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual((tail(["Hello", "Lighthouse", "Labs"])[0]), "Lighthouse");
  });

  it('returns "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual((tail(["Hello", "Lighthouse", "Labs"])[1]), "Labs");
  });

});