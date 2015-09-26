var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  index = 0,
  alphaUnitIndex = 0,
  alphaTenthIndex = 0;

function generateName() {
  var name = '';

  name += ALPHABET[alphaTenthIndex];
  name += ALPHABET[alphaUnitIndex];
  name += ('000' + index).slice(-3);

  index++;
  alphaUnitIndex = alphaUnitIndex + 1;
  if (alphaUnitIndex > ALPHABET.length) {
    alphaUnitIndex = alphaUnitIndex % ALPHABET.length;
    alphaTenthIndex = (alphaTenthIndex + 1) % ALPHABET.length;
  }

  return name;
}

function Robot() {
  this.name = generateName();
}

Robot.prototype.reset = function() {
  this.name = generateName();
}

module.exports = Robot;
