var SECONDS_IN_AN_EARTH_DAY = 24 * 60 * 60,
  EARTH_DAYS_IN_A_YEAR = {
    'Mercury': 87.97,
    'Earth': 365.25,
    'Venus': 224.7
  };

function ageOn(planet, seconds) {
  var age = seconds / (EARTH_DAYS_IN_A_YEAR[planet] * SECONDS_IN_AN_EARTH_DAY);
  return +age.toFixed(2);
}

function SpaceAge(seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function () {
  return ageOn('Earth', this.seconds);
}

SpaceAge.prototype.onMercury = function () {
  return ageOn('Mercury', this.seconds);
}

SpaceAge.prototype.onVenus = function () {
  return ageOn('Venus', this.seconds);
}

module.exports = SpaceAge;
