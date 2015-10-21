let sortStringChars = (str) => str.split('').sort().join('');

export default class Subject {
  constructor(anagram) {
    this.anagram = anagram;
    this.lcAnagram = anagram.toLowerCase();
    this.sortedAnagram = sortStringChars(this.lcAnagram);
  }

  matches(candidates) {
    let candidatesAsArray = candidates;
    if (typeof candidates === 'string') {
      candidatesAsArray = Array.prototype.slice.call(arguments);
    }

    return candidatesAsArray.filter(this.isAnagram, this);
  }

  isAnagram(candidate) {
    let lcCandidate = candidate.toLowerCase();
    return this.lcAnagram !== lcCandidate &&
      this.sortedAnagram === sortStringChars(lcCandidate);
  }
}

