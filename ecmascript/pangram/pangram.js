const ALPHABET_LENGTH = 26;
const ALLOWED_CHARS = /[a-z]/;

class Pangram {
  constructor(phrase) {
    this.phrase = phrase;
  }

  isPangram() {
    const alphabetic = [...this.phrase]
      .map(c => c.toLowerCase())
      .filter(c => ALLOWED_CHARS.test(c));
    return new Set(alphabetic).size === ALPHABET_LENGTH;
  }
}

export default Pangram;

