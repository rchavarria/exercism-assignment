const SECONDS_IN_AN_EARTH_DAY = 24 * 60 * 60;
const EARTH_SECONDS_IN_A_YEAR = new Map([
    [ 'Mercury', 87.97 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Earth', 365.25 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Venus', 224.7 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Mars', 687 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Jupiter', 4331.86 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Saturn', 10760.26 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Uranus', 30706.57 * SECONDS_IN_AN_EARTH_DAY ],
    [ 'Neptune', 60193.2 * SECONDS_IN_AN_EARTH_DAY ]
]);

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;

    EARTH_SECONDS_IN_A_YEAR.forEach((factor, planetName) => {
      SpaceAge.prototype['on' + planetName] = () => +(seconds / factor).toFixed(2);
    });
  }
}

export default SpaceAge;

