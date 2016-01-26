const POSSIBLE_ALLERGIES = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
];

function listOfAllergies(allergies) {
  return POSSIBLE_ALLERGIES
    .filter((_, idx) => allergies & Math.pow(2, idx));
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

