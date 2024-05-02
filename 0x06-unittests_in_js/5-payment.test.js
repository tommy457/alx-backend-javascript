const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('#sendPaymentRequestToApi', () => {
  let spyCalc;
  let spyLog;
  beforeEach(() => {
    spyCalc = sinon.spy(Utils, 'calculateNumber');
    spyLog = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyCalc.restore();
    spyLog.restore();
  });
  it('should spy on the calculateNumber function with params 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spyCalc, 'SUM', 100, 20);
    sinon.assert.calledOnce(spyCalc);
    sinon.assert.calledWith(spyLog, 'The total is: 120');
  });

  it('should spy on the calculateNumber function with params 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledWith(spyCalc, 'SUM', 10, 10);
    sinon.assert.calledOnce(spyCalc);
    sinon.assert.calledWith(spyLog, 'The total is: 20');
  });
});
