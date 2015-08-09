
function howManyBottles(n) {
  var quantity = n.toString();
  if (n === 0) {
    quantity = 'no more';
  }
  if (n === -1) {
    quantity = 99;
  }

  var bottles = 'bottles';
  if (n === 1) {
    bottles = 'bottle';
  }
  
  return quantity + ' ' + bottles;
}

function currentBottles(n) {
  var howMany = howManyBottles(n);
  var howManyUpperCased = howMany.charAt(0).toUpperCase() + howMany.substring(1, howMany.length);
  return howManyUpperCased + ' of beer on the wall, ' + howMany + ' of beer.';
}

function takeOneDown(n) {
  var howMany = howManyBottles(n - 1);
  var takeDown = 'Take one down and pass it around, '
  if (n === 1) {
    takeDown = 'Take it down and pass it around, ';
  }
  if (n === 0) {
    takeDown = 'Go to the store and buy some more, ';
  }

  return takeDown + howMany + ' of beer on the wall.';
}

module.exports = {
  verse: function (n) {
    return []
      .concat(currentBottles(n))
      .concat(takeOneDown(n))
      .concat('')
      .join('\n');
  }
};
