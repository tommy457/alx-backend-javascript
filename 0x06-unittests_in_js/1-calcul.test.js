const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber', () => {
  it('should round the numbers and return sum of them', () => {
    assert.equal(calculateNumber('SUM', 1.2, 2.2), 3);
  });

  it('should round the second number and return difference of them', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2.9), -2);
  });

  it('should round the first number and return division of them', () => {
    assert.equal(calculateNumber('DIVIDE', 5, -1.3), -5);
  });

  it('should return Error', () => {
    assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
  });

  it('should return 0', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 10), 0);
  });

  it('should return Error', () => {
    assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
  });

  it('should return undifined if the type is not: SUM, DIVIDE or SUBTRACT.', () => {
    assert.equal(calculateNumber('MULTIPLY', 7, 2), 'Error');
  });

  it('should return undifined if the type is not passed', () => {
    assert.equal(calculateNumber(7, 2), 'Error');
  });
});
