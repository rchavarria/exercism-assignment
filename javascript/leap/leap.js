
module.exports = function isLeap(year) {
  var divisibleBy4 = year % 4 === 0,
    notDivisibleBy100 = year % 100 !== 0,
    divisibleBy400 = year % 400 === 0;

  return divisibleBy4 && (notDivisibleBy100 || divisibleBy400);
}
