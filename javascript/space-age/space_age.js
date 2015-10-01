var SECONDS_IN_AN_EARTH_YEAR = 365.25 * 24 * 60 * 60;

function toFixed(number, decimals) {
  return +number.toFixed(decimals);
}

function SpaceAge(seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function () {
  return toFixed(this.seconds / SECONDS_IN_AN_EARTH_YEAR, 2);
}

module.exports = SpaceAge;
