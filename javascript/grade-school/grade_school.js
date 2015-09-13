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

module.exports = School;
