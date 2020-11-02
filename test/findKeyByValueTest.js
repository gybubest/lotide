const assert = require('chai').assert;
const _= require('../index');

describe("findKeyByValue", () => {

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('returns "drama" for "The Wire"', () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined for "That 70s Show"', () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns "sci_fi"" for "The Expanse"', () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
    });

    it('returns undefined for ""', () => {
      assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, ""), undefined);
    });

});