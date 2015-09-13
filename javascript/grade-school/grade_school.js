var roster;

function School() {
  roster = {};
}

School.prototype.roster = function() {
  return roster;
}

School.prototype.add = function (name, grade) {
  roster[grade] = roster[grade] || [];
  roster[grade].push(name);
}

School.prototype.grade = function (grade) {
  var enrolled = roster[grade];

  if (!enrolled) {
    return [];
  }

  return enrolled.sort();
}

module.exports = School;
