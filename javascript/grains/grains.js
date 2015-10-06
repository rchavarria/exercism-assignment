var BigInt = require('./big_integer');

function Grains() {
}

Grains.prototype.square = function (n) {
  var integer = new BigInt(2);
  return integer.pow(n - 1).toString();
}

module.exports = Grains;
