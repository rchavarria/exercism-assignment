
module.exports = function isLeap(year) {
  if ((year % 100) === 0) {
    return false;
  }

  return (year % 4) === 0;
}
