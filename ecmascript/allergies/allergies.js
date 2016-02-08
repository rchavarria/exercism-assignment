const ALLERGENS = new Map([
  [ 1, 'eggs' ],
  [ 2, 'peanuts' ],
  [ 4, 'shellfish' ],
  [ 8, 'strawberries' ],
  [ 16, 'tomatoes' ],
  [ 32, 'chocolate' ],
  [ 64, 'pollen' ],
  [ 128, 'cats' ]
]);

function listOfAllergies(allergies) {
  let list = [];

  for (let [ key, value ] of ALLERGENS) {
    if (allergies & key) {
      list.push(value);
    }
  }

  return list;
}

class Allergies {
  constructor(allergies) {
    this.listOfAllergies = listOfAllergies(allergies);
  }

  list() {
    return this.listOfAllergies;
  }
  
  allergicTo(allergy) {
    return this.listOfAllergies.includes(allergy);
  }
}

export default Allergies;

