var BigInt = require('./big_integer');

function Grains() {
}

Grains.prototype.square = function (n) {
  return new BigInt(2).pow(n - 1).toString();
}

module.exports = Grains;
