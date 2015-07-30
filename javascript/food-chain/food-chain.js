(function () {

  function firstLine(verseIndex) {
    var animals = ['fly', 'spider', 'bird'];
    return 'I know an old lady who swallowed a ' + animals[verseIndex - 1] + '.';
  }

  function lastLines(verseIndex) {
    var lines = [];

    switch(verseIndex) {
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
    var verses = [];

    if (verseIndex === 1) {
      verses.push(firstLine(verseIndex));
      verses = verses.concat(lastLines(verseIndex));
    }

    if (verseIndex === 2) {
      verses.push(firstLine(verseIndex));
      verses.push('It wriggled and jiggled and tickled inside her.');
      verses = verses.concat(lastLines(verseIndex));
    }

    if (verseIndex === 3) {
      verses.push(firstLine(verseIndex));
      verses.push('How absurd to swallow a bird!');
      verses = verses.concat(lastLines(verseIndex));
    }

    console.log(verses);

    verses.push('');
    return verses.join('\n');
  };

  module.exports = new Song();
})();
