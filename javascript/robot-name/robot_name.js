var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHABET_LENGTH = ALPHABET.length,
  MAX_NUMBER_INDEX = 1000,
  numberIndex = 0,
  alphaUnitIndex = 0,
  alphaTenthIndex = 0;

function generateName() {
  var name = '';

  name += ALPHABET[alphaTenthIndex];
  name += ALPHABET[alphaUnitIndex];
  name += ('000' + numberIndex).slice(-3);
  increaseIndexes();

  return name;
}

function increaseIndexes() {
  numberIndex++;
  if (numberIndex >= MAX_NUMBER_INDEX) {
    numberIndex %= MAX_NUMBER_INDEX;
    alphaUnitIndex++;

    if (alphaUnitIndex >= ALPHABET_LENGTH) {
      alphaUnitIndex %= ALPHABET_LENGTH;
      alphaTenthIndex++;
      alphaTenthIndex %= ALPHABET_LENGTH;
    }
  }
}

function Robot() {
  this.name = generateName();
}

Robot.prototype.reset = function() {
  this.name = generateName();
}

module.exports = Robot;
