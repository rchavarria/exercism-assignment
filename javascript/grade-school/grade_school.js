var roster;

function School() {
  roster = {};
}

School.prototype.roster = function() {
  return JSON.parse(JSON.stringify(roster));
}

School.prototype.add = function (name, grade) {
  roster[grade] = this.grade(grade).concat(name).sort();
}

School.prototype.grade = function (grade) {
  return JSON.parse(JSON.stringify(roster[grade] || []));
}

module.exports = School;
