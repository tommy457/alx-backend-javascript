const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber', () => {
  it('should round the numbers and return sum of them', () => {
    chai.expect(calculateNumber('SUM', 1.2, 2.2)).to.equal(3);
  });

  it('should round the second number and return difference of them', () => {
    chai.expect(calculateNumber('SUBTRACT', 1, 2.9)).to.equal(2);
  });

  it('should round the first number and return division of them', () => {
    chai.expect(calculateNumber('DIVIDE', 5, -1.3)).to.equal(-5);
  });

  it('should return Error', () => {
    chai.expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
  });

  it('should return 0', () => {
    chai.expect(calculateNumber('DIVIDE', 0, 10)).to.equal(0);
  });

  it('should return Error', () => {
    chai.expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
  });

  it('should return undifined if the type is not: SUM, DIVIDE or SUBTRACT.', () => {
    chai.expect(calculateNumber('MULTIPLY', 7, 2)).to.equal('Error');
  });

  it('should return undifined if the type is not passed', () => {
    chai.expect(calculateNumber(7, 2)).to.equal('Error');
  });
});
