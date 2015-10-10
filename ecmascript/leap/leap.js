function divisibleBy(year, n) {
  return year % n === 0;
}

export default function isLeapYear(year) {
  return divisibleBy(year, 400) ||
    !divisibleBy(year, 100) &&
    divisibleBy(year, 4);
}

