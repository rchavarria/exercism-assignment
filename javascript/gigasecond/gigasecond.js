var GIGAMILLISECONDS = 1e9 * 1e3;

function Gigasecond (birthday) {
  this.birthday = birthday;
}

Gigasecond.prototype.date = function () {
  var afterAGigamillisecond = this.birthday.getTime() + GIGAMILLISECONDS,
    afterAGigasecondDate = new Date(afterAGigamillisecond);

  return new Date(afterAGigasecondDate.toDateString());
}

module.exports = Gigasecond;

