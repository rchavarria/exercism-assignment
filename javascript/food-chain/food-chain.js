(function () {

  function firstLine(verseIndex) {
    var animals = [ 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse' ];
    return [ 'I know an old lady who swallowed a ' + animals[verseIndex - 1] + '.' ];
  }

  function intermediateLines(verseIndex) {
    var lines = [
        null,
        'It wriggled and jiggled and tickled inside her.',
        'How absurd to swallow a bird!',
        'Imagine that, to swallow a cat!',
        'What a hog, to swallow a dog!',
        'Just opened her throat and swallowed a goat!',
        'I don\'t know how she swallowed a cow!',
        'She\'s dead, of course!'
    ];

    return lines[verseIndex - 1];
  }

  function lastLines(verseIndex) {
    var lines = [];

    switch(verseIndex) {
      case 8:
        return null;
      case 7:
        lines.push('She swallowed the cow to catch the goat.');
      case 6:
        lines.push('She swallowed the goat to catch the dog.');
      case 5:
        lines.push('She swallowed the dog to catch the cat.');
      case 4:
        lines.push('She swallowed the cat to catch the bird.');
      case 3:
        lines.push('She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.');
      case 2:
        lines.push('She swallowed the spider to catch the fly.');
      case 1:
        lines.push('I don\'t know why she swallowed the fly. Perhaps she\'ll die.');
    }

    return lines;
  }

  function Song() { }

  Song.prototype.verse = function (index) {
    return []
      .concat(firstLine(index))
      .concat(intermediateLines(index))
      .concat(lastLines(index))
      .concat('')
      .filter(function (v) { return v !== null; })
      .join('\n');
  };

  Song.prototype.verses = function (firstIndex, secondIndex) {
    var i, verses = [];

    for (i = firstIndex; i <= secondIndex; i++) {
      verses.push(this.verse(i));
    }

    verses.push('');
    return verses.join('\n');
  };

  module.exports = new Song();
})();
