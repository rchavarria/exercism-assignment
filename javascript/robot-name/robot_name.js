var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  MAX_ALPHA_INDEX = ALPHABET.length,
  MAX_NUMBER_INDEX = 1000,
  numberIndex = -1, // allows to increase indexes before generating first name
  alphaUnitIndex = 0,
  alphaTenthIndex = 0;

function nextRobotName() {
  increaseIndexes();
  return generateName();
}

function generateName() {
  var name = '';

  name += ALPHABET[alphaTenthIndex];
  name += ALPHABET[alphaUnitIndex];
  name += ('000' + numberIndex).slice(-3);

  return name;
}

function increaseIndexes() {
  numberIndex++;
  if (numberIndex >= MAX_NUMBER_INDEX) {
    numberIndex %= MAX_NUMBER_INDEX;
    alphaUnitIndex++;

    if (alphaUnitIndex >= MAX_ALPHA_INDEX) {
      alphaUnitIndex %= MAX_ALPHA_INDEX;
      alphaTenthIndex++;
      alphaTenthIndex %= MAX_ALPHA_INDEX;
    }
  }
}

function Robot() {
  this.name = nextRobotName();
}

Robot.prototype.reset = function() {
  this.name = nextRobotName();
}

module.exports = Robot;
