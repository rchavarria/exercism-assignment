function sortStringChars(str) {
  return str.toLowerCase().split('').sort().join('');
}

function areAnagram(anagram, candidate) {
  return anagram.toLowerCase() !== candidate.toLowerCase() &&
    sortStringChars(anagram) === sortStringChars(candidate);
}

function buildCandidatesAsArray(candidatesAsArgs) {
  var i,
    len = candidatesAsArgs.length,
    candidates = [];

  for(i = 0; i < len; i++) {
    candidates.push(candidatesAsArgs[i]);
  }

  return candidates;
}

function Subject(anagram) {
  this.anagram = anagram;
}

Subject.prototype.matches = function (candidates) {
  var matches,
    candidatesAsArray = candidates;

  if (typeof candidates === 'string') {
    candidatesAsArray = buildCandidatesAsArray(arguments);
  }

  matches = candidatesAsArray.filter(function (candidate) {
    return areAnagram(this.anagram, candidate);
  }, this);

  return matches;
}

module.exports = function (anagram) {
  return new Subject(anagram);
}

