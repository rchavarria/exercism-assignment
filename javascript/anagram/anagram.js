function sortStringChars(str) {
  return str.split('').sort().join('');
}

function buildCandidatesAsArray(candidatesAsArgs) {
  var i, len, candidates = [];

  for(i = 0, len = candidatesAsArgs.length; i < len; i++) {
    candidates.push(candidatesAsArgs[i]);
  }

  return candidates;
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
    candidatesAsArray = buildCandidatesAsArray(arguments);
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

