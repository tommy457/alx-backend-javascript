const Utils = {
  calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    if (type === 'SUM') {
      return roundA + roundB;
    }
    if (type === 'SUBTRACT') {
      return roundB - roundA;
    }
    if (type === 'DIVIDE') {
      return roundB !== 0 ? roundA / roundB : 'Error';
    }
    return 'Error';
  },
};

module.exports = Utils;
