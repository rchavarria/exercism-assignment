function sortStringChars(str) {
  return str.split('').sort().join('');
}

function Subject(anagram) {
  this.anagram = anagram;
  this.lcAnagram = anagram.toLowerCase();
  this.sortedAnagram = sortStringChars(this.lcAnagram);
}

Subject.prototype.matches = function (candidates) {
  var matches,
    candidatesAsArray = candidates;

  if (typeof candidates === 'string') {
    candidatesAsArray = Array.prototype.slice.call(arguments);
  }

  return candidatesAsArray.filter(this.isAnagram, this);
};

Subject.prototype.isAnagram = function (candidate) {
  var lcCandidate = candidate.toLowerCase();
  return this.lcAnagram !== lcCandidate &&
    this.sortedAnagram === sortStringChars(lcCandidate);
}

module.exports = function (anagram) {
  return new Subject(anagram);
}

