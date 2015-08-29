
function isDivisibleBy(n, divisor) {
  return (n % divisor) === 0;
}

module.exports = function isLeap(year) {
  if (isDivisibleBy(year, 100)) {
    return false;
  }

  return isDivisibleBy(year, 4);
}
