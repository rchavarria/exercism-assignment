const INVALID_DIGITS_REGEXP = /[^01]/g;

const value = bin => bin === '1' ? 1 : 0;
const power = exp => Math.pow(2, exp);

export default class Binary {
  constructor(binary) {
    this.binary = binary;
  }

  toDecimal() {
    if (this.binary.match(INVALID_DIGITS_REGEXP)) {
      return 0;
    }

    return [...this.binary]
      .reverse()
      .map((digit, index) => value(digit) * power(index))
      .reduce((sum, i) => sum + i);
  }
}

