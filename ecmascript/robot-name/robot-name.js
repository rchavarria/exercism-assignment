const ALPHAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const names = new Set();

class Robot {
  constructor() {
    this.name = getNotRepeatedName();
  }

  reset() {
    this.name = getNotRepeatedName();
  }
}

let getNotRepeatedName = () => {
  const name = generateRandomName();
  if (names.has(name)) {
    return getNotRepeatedName();
  }

  names.add(name);
  return name;
}

let generateRandomName = () => {
  return []
    .concat(randomAlpha())
    .concat(randomAlpha())
    .concat(randomDigit())
    .concat(randomDigit())
    .concat(randomDigit())
    .join('');
}

let randomAlpha = () => ALPHAS[Math.floor(Math.random() * ALPHAS.length)];
let randomDigit = () => DIGITS[Math.floor(Math.random() * DIGITS.length)];

export default Robot;

