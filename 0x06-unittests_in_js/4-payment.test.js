const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('#sendPaymentRequestToApi', () => {
  it('should spy on the calculateNumber function.', () => {
    const spyCalc = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyLog = sinon.spy(console, 'log')

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spyCalc, 'SUM', 100, 20);
    sinon.assert.calledOnce(spyCalc);
    sinon.assert.calledWith(spyLog,  'The total is: 10');

    spyCalc.restore();
    spyLog.restore();
  });
});

