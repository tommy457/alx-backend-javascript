const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return Successful response from the API', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        assert.deepStrictEqual(res, { data: 'Successful response from the API' });
        done();
      });
  });
});
