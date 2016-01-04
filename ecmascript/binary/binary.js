const INVALID_DIGITS_REGEXP = /[^01]/g;
const decimal = bin => parseInt(bin, 10);
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
      .reduce( (sum, digit, index) => sum + decimal(digit) * power(index), 0);
  }
}

