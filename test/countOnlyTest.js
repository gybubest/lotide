const assert = require('chai').assert;
const _= require('../index');

describe("countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  it('returns 1 for ["Jason"]', () => {
    const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Jason"], 1);
  });

  it('returns undefined for ["Karima"]', () => {
    const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Karima"], undefined);
  });

  it('returns 2 for ["Fang"]', () => {
    const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Fang"], 2);
  });

  it('returns undefined for ["Agouhanna"]', () => {
    const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Agouhanna"], undefined);
  });

});