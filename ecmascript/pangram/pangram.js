const ALPHABET_LENGTH = 26;
const ALLOWED_CHARS = /[a-z]/;

class Pangram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  isPangram() {
    return [...this.phrase]
      .filter(RegExp.prototype.test.bind(ALLOWED_CHARS))
      .reduce((unique, c) => unique.add(c), new Set())
      .size === ALPHABET_LENGTH;
  }
}

export default Pangram;

