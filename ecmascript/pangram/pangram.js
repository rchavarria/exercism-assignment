const ALPHABET_LENGTH = 26;
class Pangram {
  constructor(phrase) {
    this.alphabeticalCharacters = phrase.toLowerCase().replace(/[^a-z]/g, '');
  }

  isPangram() {
    const uniqueValues = new Set(this.alphabeticalCharacters);
    return uniqueValues.size === ALPHABET_LENGTH;
  }
}

export default Pangram;

