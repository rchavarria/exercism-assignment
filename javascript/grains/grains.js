function Grains() {
}

Grains.prototype.square = function (n) {
  return Math.pow(2, n - 1).toString();
}

module.exports = Grains;
