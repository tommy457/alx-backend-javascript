const { expect } = require('chai');
const request = require('request');

describe('Test suit for the index page', () => {

  it('Test status code', (done) => {
    request.get('http://localhost:7865/', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Test correct responce', (done) => {
    request.get('http://localhost:7865/', (err, res, data) => {
      expect(data).to.equal('Welcome to the payment system');
      done();
    });
  });
});
