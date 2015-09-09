
function validate (number) {
  var validNumber = number.replace(/[\(\)\s-\.]/g, '');
  if (validNumber.length > 10) {
    return validNumber.substring(1);
  }

  return validNumber;
}

function PhoneNumber (number) {
  this.phoneNumber = validate(number);
}

PhoneNumber.prototype.number = function () {
  return this.phoneNumber;
}

module.exports = PhoneNumber;
