const assert = require('chai').assert;
const _= require('../index');

describe("findKey", () => {

  const object = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('returns "noma" for (object, x => x.stars === 2)', () => {
    assert.deepEqual(_.findKey(object, x => x.stars === 2), "noma");
  });

  it('returns undefined for (object, x => x.stars === 0)', () => {
    assert.deepEqual(_.findKey(object, x => x.stars === 0), undefined);
  });

});