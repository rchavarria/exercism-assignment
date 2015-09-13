var roster;

function School() {
  roster = {};
}

School.prototype.roster = function() {
  return roster;
}

School.prototype.add = function (name, grade) {
  var enrolled = this.grade(grade);
  enrolled.push(name);
  roster[grade] = enrolled.sort();
}

School.prototype.grade = function (grade) {
  var enrolled = roster[grade] || [];
  return enrolled.sort();
}

module.exports = School;
