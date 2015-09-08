
var GIGASECONDS_IN_MILIS = 1e9 * 1e3;

module.exports = function (birthdate) {
  this.birthdate = birthdate;

  this.date = function () {
    var gigasecondBirth = new Date();
    this.birthdate.setHours(0);
    this.birthdate.setMinutes(0);
    this.birthdate.setSeconds(0);
    this.birthdate.setMilliseconds(0);

    gigasecondBirth.setTime(this.birthdate.getTime() + GIGASECONDS_IN_MILIS);
    gigasecondBirth.setHours(0);
    gigasecondBirth.setMinutes(0);
    gigasecondBirth.setSeconds(0);
    gigasecondBirth.setMilliseconds(0);

    return gigasecondBirth;
  };

}

