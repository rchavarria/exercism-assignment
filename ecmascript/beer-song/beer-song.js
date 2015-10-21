let takeOneDown = (n) => {
  switch(n) {
    case 1: return 'Take it down and pass it around';
    case 0: return 'Go to the store and buy some more';
    default: return 'Take one down and pass it around';
  }
}

let end = (n) => {
  return `${takeOneDown(n)}, ${bottlesOfBeer(n - 1)} of beer on the wall.`;
}

let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

let pluralize = (n) => {
  let suffix = (n === 1) ? '' : 's';
  return `bottle${suffix}`;
}

let bottles = (n) => {
  switch(n) {
    case 0: return 'no more';
    case -1: return '99';
    default: return n.toString();
  }
}

let bottlesOfBeer = (n) => `${bottles(n)} ${pluralize(n)}`;

let start = (n) => {
  let bottles = bottlesOfBeer(n);
  let result = `${bottles} of beer on the wall, ${bottles} of beer.`;
  return capitalize(result);
}

export default class BeerSong {
  static verse(n) {
    return []
      .concat(start(n))
      .concat(end(n))
      .concat('')
      .join('\n');
  }

  static sing(first, last) {
    let verses = [];
    last = last || 0;

    for (let i = first; i >= last; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }
}

