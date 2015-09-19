var INVALID_NUMBER = '0000000000',
  NUMBER_FORMAT = '($1) $2-$3',
  NUMBER_GROUPS_REGEXP = /([\d]{3})([\d]{3})([\d]{4})/;

function validate (number) {
  var validNumber = number.replace(/[\D]/g, '');
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
  return this.phoneNumber.replace(NUMBER_GROUPS_REGEXP, NUMBER_FORMAT);
}

module.exports = PhoneNumber;
