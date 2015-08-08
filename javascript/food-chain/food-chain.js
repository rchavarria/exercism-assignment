(function () {

  function Poem(animal, rhyme, prevPoem, animalAction) {
    this.animal = animal;
    this.rhyme = rhyme;
    this.previousPoem = prevPoem;
    this.animalAction = animalAction || '';
  }

  Poem.prototype.sing = function () {
    var verses = [];
    verses.push('I know an old lady who swallowed a ' + this.animal + '.');
    verses.push(this.rhyme);
    if (this.previousPoem) {
      verses = verses.concat(this.previousPoem.chain(this.animal));
    }
    verses.push('');
    return verses
      .filter(function (v) { return v !== null; })
      .join('\n');
  }

  Poem.prototype.chain = function (currentAnimal) {
    var initial = 'She swallowed the ' +
                  currentAnimal +
                  ' to catch the ' +
                  this.animal +
                  this.animalAction +
                  '.',
      endVerses = [ this.rhyme ];

    if (this.previousPoem) {
      endVerses = this.previousPoem.chain(this.animal);
    }
    
    return []
      .concat(initial)
      .concat(endVerses);
  }

  function Song() {
    var fly = new Poem('fly',
        'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'),
      spider = new Poem('spider',
          'It wriggled and jiggled and tickled inside her.',
          fly,
          ' that wriggled and jiggled and tickled inside her'),
      bird = new Poem('bird',
          'How absurd to swallow a bird!',
          spider),
      cat = new Poem('cat',
          'Imagine that, to swallow a cat!',
          bird),
      dog = new Poem('dog',
          'What a hog, to swallow a dog!',
          cat),
      goat = new Poem('goat',
          'Just opened her throat and swallowed a goat!',
          dog),
      cow = new Poem('cow',
          'I don\'t know how she swallowed a cow!',
          goat),
      horse = new Poem('horse',
          'She\'s dead, of course!');

    this.poems = [ null, fly, spider, bird, cat, dog, goat, cow, horse ];
  }

  Song.prototype.verse = function (index) {
    return this.poems[index].sing();
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
