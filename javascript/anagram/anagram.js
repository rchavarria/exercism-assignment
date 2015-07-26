function areAnagram(anagram, candidate) {
  var sortedAnagram = anagram.split('').sort().join(''),
    sortedCandidate = candidate.split('').sort().join('');

  return sortedAnagram === sortedCandidate;
}

function Subject(anagram) {
  this.anagram = anagram;
}

Subject.prototype.matches = function (candidates) {
  var matches = candidates.filter(function (candidate) {
    return areAnagram(this.anagram, candidate);
  }, this);

  return matches;
}

module.exports = function (anagram) {
  return new Subject(anagram);
}
