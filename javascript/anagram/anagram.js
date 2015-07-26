function Subject(anagram) {
  this.anagram = anagram;
}

Subject.prototype.matches = function (candidates) {
  return [];
}

module.exports = function (anagram) {
  return new Subject(anagram);
}

