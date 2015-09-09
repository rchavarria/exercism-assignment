
var INVALID_NUMBER = '0000000000';

function validate (number) {
  var validNumber = number.replace(/[\(\)\s-\.]/g, '');

  if (validNumber.length === 10) {
    return validNumber;
  }

  if (validNumber.length < 10) {
    return INVALID_NUMBER;
  }

  if (validNumber[0] !== '1') {
    return INVALID_NUMBER;
  }

  return validNumber.substring(1);
}

function middleCode(number) {
  return number.substring(3, 6);
}

function endCode(number) {
  return number.substring(6);
}

function PhoneNumber (number) {
  this.phoneNumber = validate(number);
}

PhoneNumber.prototype.number = function () {
  return this.phoneNumber;
}

PhoneNumber.prototype.areaCode = function () {
  return this.phoneNumber.substring(0, 3);
}

PhoneNumber.prototype.toString = function () {
  return [
      '(',
      this.areaCode(),
      ')',
      ' ',
      middleCode(this.phoneNumber),
      '-',
      endCode(this.phoneNumber)
    ].join('');
}

module.exports = PhoneNumber;
