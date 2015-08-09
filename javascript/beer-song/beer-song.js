'use strict';

function pluralize(n) {
  var suffix = (n === 1) ? '' : 's';
  return 'bottle' + suffix;
}

function bottles(n) {
  switch(n) {
    case 0: return 'no more';
    case -1: return '99';
    default: return n.toString();
  }
}

function start(n) {
  var howMany = bottles(n) + ' ' + pluralize(n);
  var result = howMany + ' of beer on the wall, ' + howMany + ' of beer.';
  return result.charAt(0).toUpperCase() + result.substring(1, result.length);
}

function takeOneDown(n) {
  switch(n) {
    case 1: return 'Take it down and pass it around, ';
    case 0: return 'Go to the store and buy some more, ';
    default: return 'Take one down and pass it around, ';
  }
}

function end(n) {
  var takeDown = takeOneDown(n);
  var howMany = bottles(n - 1) + ' ' + pluralize(n - 1) + ' of beer on the wall.';

  return takeDown + howMany;
}

module.exports = {

  verse: function (n) {
    return []
      .concat(start(n))
      .concat(end(n))
      .concat('')
      .join('\n');
  },

  sing: function (first, last) {
    var i, verses = [];
    last = last || 0;

    for (i = first; i >= last; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }

};
