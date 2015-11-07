let roster;

class School {
  constructor() {
    roster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(roster));
  }

  add(name, grade) {
    roster[grade] = this.grade(grade).concat(name).sort();
  }

  grade(grade) {
    return Array.from(roster[grade] || []);
  }

}

export default School;

