const ALPHAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';

const random = (values) => values[Math.floor(Math.random() * values.length)];
const randomAlpha = () => random(ALPHAS);
const randomDigit = () => random(DIGITS);

const FORMAT = 'AADDD';
const FORMATS = { A: randomAlpha, D: randomDigit };
const generateRandomName = () => [...FORMAT].map(i => FORMATS[i]()).join('');

let names = new Set();
const generateUniqueName = () => {
  const name = generateRandomName();
  if (names.has(name)) {
    return generateUniqueName();
  }

  names.add(name);
  return name;
}

class Robot {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = generateUniqueName();
  }
}

export default Robot;

