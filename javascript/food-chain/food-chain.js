(function () {

  function firstLine(verseIndex) {
    var animals = [ 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow' ];
    return [ 'I know an old lady who swallowed a ' + animals[verseIndex - 1] + '.' ];
  }

  function intermediateLines(verseIndex) {
    switch(verseIndex) {
      case 7:
        return [ 'I don\'t know how she swallowed a cow!' ];
      case 6:
        return [ 'Just opened her throat and swallowed a goat!' ];
      case 5:
        return [ 'What a hog, to swallow a dog!' ];
      case 4:
        return [ 'Imagine that, to swallow a cat!' ];
      case 3:
        return [ 'How absurd to swallow a bird!' ];
      case 2:
        return [ 'It wriggled and jiggled and tickled inside her.' ];
      case 1:
        return null;
    }
  }

  function lastLines(verseIndex) {
    var lines = [];

    switch(verseIndex) {
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

  Song.prototype.verse = function (verseIndex) {
    return []
      .concat(firstLine(verseIndex))
      .concat(intermediateLines(verseIndex))
      .concat(lastLines(verseIndex))
      .concat('')
      .filter(function (v) { return v !== null; })
      .join('\n');
  };

  module.exports = new Song();
})();
