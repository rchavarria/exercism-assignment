'use strict';

function format(message, params) {
  return message
    .replace(/\{0\}/g, params[0])
    .replace(/\{1\}/g, params[1]);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

function bottlesOfBeer(n) {
  return bottles(n) + ' ' + pluralize(n);
}

function start(n) {
  var params = [ bottlesOfBeer(n) ];
  var result = format('{0} of beer on the wall, {0} of beer.', params);
  return capitalize(result);
}

function takeOneDown(n) {
  switch(n) {
    case 1: return 'Take it down and pass it around';
    case 0: return 'Go to the store and buy some more';
    default: return 'Take one down and pass it around';
  }
}

function end(n) {
  var params = [ takeOneDown(n), bottlesOfBeer(n - 1) ];
  return format('{0}, {1} of beer on the wall.', params);
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
