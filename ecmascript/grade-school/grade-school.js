let roster;

class School {
  constructor() {
    roster = {};
  }

  roster() {
    return Object.assign({}, roster);
  }

  add(name, grade) {
    roster[grade] = this.grade(grade).concat(name).sort();
  }

  grade(grade) {
    return Array.from(roster[grade] || []);
  }

}

export default School;

