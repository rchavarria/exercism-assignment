function divisibleBy(year, n) {
  return year % n === 0;
}

export default function isLeapYear(year) {
  if (divisibleBy(year, 400)) {
    return true;
  }

  if (divisibleBy(year, 100)) {
    return false;
  }

  return divisibleBy(year, 4);
}

