const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;

const pad = (i) => `00${i}`.slice(-2);

class Clock {
  constructor(hours, minutes) {
    this.totalMinutes = (hours * MINUTES_IN_AN_HOUR + minutes + MINUTES_IN_A_DAY) % MINUTES_IN_A_DAY;
  }

  toString() {
    const h = parseInt(this.totalMinutes / MINUTES_IN_AN_HOUR) % HOURS_IN_A_DAY;
    const m = this.totalMinutes % MINUTES_IN_AN_HOUR;

    return `${pad(h)}:${pad(m)}`;
  }

  plus(minutesToAdd) {
    return new Clock(0, this.totalMinutes + minutesToAdd);
  }

  minus(minutesToSubstract) {
    return this.plus(-minutesToSubstract);
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }
}

export default (hours, minutes = 0) => new Clock(hours, minutes);

