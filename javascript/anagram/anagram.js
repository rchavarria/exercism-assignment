function sortStringChars(str) {
  return str.toLowerCase().split('').sort().join('');
}

function areAnagram(anagram, candidate) {
  return sortStringChars(anagram) === sortStringChars(candidate);
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

