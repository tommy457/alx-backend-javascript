const { expect } = require('chai');
const request = require('request');

describe('test suit for the index page', () => {
  it('test status code for /', () => new Promise((done) => {
    request.get('http://localhost:7865/', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));

  it('test correct responce for /', () => new Promise((done) => {
    request.get('http://localhost:7865/', (err, res, data) => {
      expect(data).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('test correct responce and status code for /cart/:id', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/12', (err, res, data) => {
      expect(data).to.equal('Payment methods for cart 12');
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));

  it('test correct responce and status code for /cart/:id /cart/:id', () => new Promise((done) => {
    request.get('http://localhost:7865//cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  }));
});
