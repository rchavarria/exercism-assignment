var SECONDS_IN_AN_EARTH_DAY = 24 * 60 * 60,
  SECONDS_IN_AN_EARTH_YEAR = 365.25 * SECONDS_IN_AN_EARTH_DAY,
  SECONDS_IN_A_MERCURY_YEAR = 87.97 * SECONDS_IN_AN_EARTH_DAY;

function toFixed(number, decimals) {
  return +number.toFixed(decimals);
}

function SpaceAge(seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function () {
  return toFixed(this.seconds / SECONDS_IN_AN_EARTH_YEAR, 2);
}

SpaceAge.prototype.onMercury = function () {
  return toFixed(this.seconds / SECONDS_IN_A_MERCURY_YEAR, 2);
}

module.exports = SpaceAge;
