class Poem {
  constructor(animal, rhyme, prevPoem, animalAction = '') {
    this.animal = animal;
    this.rhyme = rhyme;
    this.previousPoem = prevPoem;
    this.animalAction = animalAction;
  }

  sing() {
    let versesChain = null;
    if (this.previousPoem) {
      versesChain = this.previousPoem.chain(this.animal);
    }

    return []
      .concat(`I know an old lady who swallowed a ${this.animal}.`)
      .concat(this.rhyme)
      .concat(versesChain)
      .concat('')
      .filter((v) => v !== null)
      .join('\n');
  }

  chain(currentAnimal) {
    let endVerses = [ this.rhyme ];
    const initial = `She swallowed the ${currentAnimal} to catch the ${this.animal}${this.animalAction}.`;

    if (this.previousPoem) {
      endVerses = this.previousPoem.chain(this.animal);
    }
    
    return []
      .concat(initial)
      .concat(endVerses);
  }
}

class Song {
  constructor() {
    const fly = new Poem('fly', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.');
    const spider = new Poem('spider', 'It wriggled and jiggled and tickled inside her.', fly, ' that wriggled and jiggled and tickled inside her');
    const bird = new Poem('bird', 'How absurd to swallow a bird!', spider);
    const cat = new Poem('cat', 'Imagine that, to swallow a cat!', bird);
    const dog = new Poem('dog', 'What a hog, to swallow a dog!', cat);
    const goat = new Poem('goat', 'Just opened her throat and swallowed a goat!', dog);
    const cow = new Poem('cow', 'I don\'t know how she swallowed a cow!', goat);
    const horse = new Poem('horse', 'She\'s dead, of course!');

    this.poems = [ null, fly, spider, bird, cat, dog, goat, cow, horse ];
  }

  verse(index) {
    return this.poems[index].sing();
  }

  verses(firstIndex, secondIndex) {
    const verses = [];

    for (let i = firstIndex; i <= secondIndex; i++) {
      verses.push(this.verse(i));
    }

    verses.push('');
    return verses.join('\n');
  }

}

export default Song;

