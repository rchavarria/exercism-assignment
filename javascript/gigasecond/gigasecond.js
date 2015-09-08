
var GIGASECONDS_IN_MILIS = 1e9 * 1e3;

function resetAllButDate(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

function Gigasecond (birthday) {
  this.birthday = resetAllButDate(birthday);
}

Gigasecond.prototype.date = function () {
  var aGigasecondLater = new Date();
  aGigasecondLater.setTime(this.birthday.getTime() + GIGASECONDS_IN_MILIS);
  return resetAllButDate(aGigasecondLater);
}

module.exports = Gigasecond;

