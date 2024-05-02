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

  it('test bad request for /cart/:id', () => new Promise((done) => {
    request.get('http://localhost:7865//cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  }));

  it('test correct responce and status for /available_payments', () => new Promise((done) => {
    const options = { json: true };
    const payload = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request.get('http://localhost:7865/available_payments', options, (err, res, data) => {
      expect(data).to.deep.equal(payload);
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));

  it('test correct responce and status for /login', () => new Promise((done) => {
    const options = {
      json: true,
	  body: {
		  userName: 'John',
	    },
    };
    request.post('http://localhost:7865/login', options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.contain('Welcome John');
      done();
    });
  }));
  it('test bad request for /login', () => new Promise((done) => {
    const options = {
      json: true,
	    body: {
        lastName: 'Doe',
	    },
    };
    request.post('http://localhost:7865/login', options, (err, res, body) => {
	    expect(res.statusCode).to.equal(404);
	    done();
    });
  }));
});
