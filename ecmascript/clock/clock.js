const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;

const pad = (i) => `00${i}`.slice(-2);

function at(hours, minutes = 0) {
  const totalMinutes = (hours * 60 + minutes + MINUTES_IN_A_DAY) % MINUTES_IN_A_DAY;
  const h = parseInt(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;

  const toString = () => `${pad(h)}:${pad(m)}`;
  const plus = (minutesToAdd) => at(hours, minutes + minutesToAdd);
  const minus = (minutesToSubstract) => plus(-minutesToSubstract);
  const equals = (other) => toString() === other.toString();
  return { toString, plus, minus, equals };
}

export default at;

