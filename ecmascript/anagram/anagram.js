const sortStringChars = (str) => str.split('').sort().join('');

export default class Subject {
  constructor(anagram) {
    this.anagram = anagram;
    this.lcAnagram = anagram.toLowerCase();
    this.sortedAnagram = sortStringChars(this.lcAnagram);
  }

  matches(...args) {
    const candidates = (typeof args[0] !== 'string') ? args[0] : args;
    return candidates.filter(this.isAnagram, this);
  }

  isAnagram(candidate) {
    const lcCandidate = candidate.toLowerCase();
    return this.lcAnagram !== lcCandidate &&
      this.sortedAnagram === sortStringChars(lcCandidate);
  }
}

