var SECONDS_IN_AN_EARTH_DAY = 24 * 60 * 60,
  EARTH_DAYS_IN_A_YEAR = {
    'Mercury': 87.97,
    'Earth': 365.25,
    'Venus': 224.7,
    'Mars': 687,
    'Jupiter': 4331.86,
    'Saturn': 10760.26,
    'Uranus': 30706.57,
    'Neptune': 60193.2
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

SpaceAge.prototype.onMars = function () {
  return ageOn('Mars', this.seconds);
}

SpaceAge.prototype.onJupiter = function () {
  return ageOn('Jupiter', this.seconds);
}

SpaceAge.prototype.onSaturn = function () {
  return ageOn('Saturn', this.seconds);
}

SpaceAge.prototype.onUranus = function () {
  return ageOn('Uranus', this.seconds);
}

SpaceAge.prototype.onNeptune = function () {
  return ageOn('Neptune', this.seconds);
}

module.exports = SpaceAge;
