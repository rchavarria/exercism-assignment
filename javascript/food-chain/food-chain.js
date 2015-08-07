(function () {
  var ANIMALS = [ 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse' ],
    INTERMEDIATE_LINES = [
      null,
      'It wriggled and jiggled and tickled inside her.',
      'How absurd to swallow a bird!',
      'Imagine that, to swallow a cat!',
      'What a hog, to swallow a dog!',
      'Just opened her throat and swallowed a goat!',
      'I don\'t know how she swallowed a cow!',
      'She\'s dead, of course!'
    ],
    LAST_LINES = [
        'I don\'t know why she swallowed the fly. Perhaps she\'ll die.',
        'She swallowed the spider to catch the fly.',
        'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.',
        'She swallowed the cat to catch the bird.',
        'She swallowed the dog to catch the cat.',
        'She swallowed the goat to catch the dog.',
        'She swallowed the cow to catch the goat.'
      ];

  function firstLine(verseIndex) {
    return 'I know an old lady who swallowed a ' + ANIMALS[verseIndex - 1] + '.';
  }

  function intermediateLines(verseIndex) {
    return INTERMEDIATE_LINES[verseIndex - 1];
  }

  function lastLines(verseIndex) {
    var i,
      lines = [],
      len = LAST_LINES.length;

    for (i = verseIndex - 1; i >= 0 && i < len; i--) {
      lines.push(LAST_LINES[i]);
    }

    return lines.length === 0 ? null : lines;
  }

  function Poem(animal, rhyme, previous) {
    this.animal = animal;
    this.rhyme = rhyme;
    this.previous = previous;
  }

  Poem.prototype.sing = function () {
    var verses = [];
    verses.push('I know an old lady who swallowed a ' + this.animal + '.');
    verses.push(this.rhyme);
    if (this.previous) {
      verses = verses.concat(this.previous.chain(this.animal));
    }
    verses.push('');
    return verses
      .filter(function (v) { return v !== null; });
  }

  Poem.prototype.chain = function (currentAnimal) {
    var chainedVerses = [];
    chainedVerses.push('She swallowed the ' + currentAnimal + ' to catch the ' + this.animal + '.');
    chainedVerses.push(this.rhyme);
    return chainedVerses;
  }

  function Song() {
    var fly = new Poem('fly',
        'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'),
      spider = new Poem('spider',
          'It wriggled and jiggled and tickled inside her.',
          fly),
      bird = new Poem('bird',
          'How absurd to swallow a bird!',
          spider);

    this.poems = [ fly, spider, bird ];
  }

  Song.prototype.chainedVerse = function (index) {
    return this.poems[index - 1].sing().join('\n');
  }

  Song.prototype.verse = function (index) {
    if (index <= 2) {
      return this.chainedVerse(index);
    }

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
