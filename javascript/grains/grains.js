var BigInt = require('./big_integer');

function Grains() {
}

Grains.prototype.square = function (n) {
  return new BigInt(2).pow(n - 1).toString();
}

Grains.prototype.total = function () {
  var i, sum = new BigInt(0);

  for (i = 1; i <= 64; i++) {
    sum = sum.add(this.square(i));
  }

  return sum.toString();
}

module.exports = Grains;
