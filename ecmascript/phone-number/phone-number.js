const INVALID_NUMBER = '0000000000';
const NUMBER_GROUPS_REGEXP = /(\d{3})(\d{3})(\d{4})/;

let validate = (number) => {
  let validNumber = number.replace(/[\D]/g, '');
  if (validNumber.length === 10) {
    return validNumber;
  }

  if (validNumber.length < 10) {
    return INVALID_NUMBER;
  }

  if (!validNumber.match(/^1/)) {
    return INVALID_NUMBER;
  }

  return validNumber.substring(1);
}

export default class PhoneNumber {
  constructor(number) {
    this.phoneNumber = validate(number);
  }

  number() {
    return this.phoneNumber;
  }

  areaCode() {
    return this.phoneNumber.substring(0, 3);
  }

  toString() {
    let codes = this.phoneNumber.match(NUMBER_GROUPS_REGEXP);
    return `(${codes[1]}) ${codes[2]}-${codes[3]}`;
  }
}
