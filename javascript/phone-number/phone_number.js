
function validate (number) {
  return number.replace(/[\(\)\s-]/g, '');
}

function PhoneNumber (number) {
  this.phoneNumber = validate(number);
}

PhoneNumber.prototype.number = function () {
  return this.phoneNumber;
}

module.exports = PhoneNumber;
