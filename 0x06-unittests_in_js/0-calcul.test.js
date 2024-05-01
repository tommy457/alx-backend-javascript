const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('#calculateNumber', () => {
  it('should round the numbers and return sum of them', () => {
    assert.equal(calculateNumber(1.2, 2.2), 3);
  });

  it('should round the second number and return sum of them', () => {
    assert.equal(calculateNumber(1, 2.9), 4);
  });

  it('should round the first number and return sum of them', () => {
    assert.equal(calculateNumber(-1.3, 5), 4);
  });
});
