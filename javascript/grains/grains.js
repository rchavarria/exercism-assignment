var BigInt = require('./big_integer');

function Grains() {
}

Grains.prototype.square = function (n) {
  return new BigInt(2).pow(n - 1).toString();
}

Grains.prototype.total = function () {
  var i = 1,
    square,
    sum = new BigInt(0);

  while (i <= 64) {
    square = this.square(i);
    sum = sum.add(square);
    i++;
  }

  return sum.toString();
}

module.exports = Grains;
