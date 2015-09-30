var HOW_MANY_CHARS = 26,
  HOW_MANY_NUMBERS = 1000,
  CHAR_CODE_A = 'A'.charCodeAt(0),
  generatedNames = {};

function Robot() {
  this.name = generateName();
}

Robot.prototype.reset = function() {
  this.name = generateName();
}

function generateName() {
  var name = '';
  name += generateRandomChar();
  name += generateRandomChar();
  name += pad(generateRandomNumber());

  return getNotGeneratedName(name);
}

function generateRandomChar() {
  var random = Math.floor(Math.random() * HOW_MANY_CHARS);
  return String.fromCharCode(CHAR_CODE_A + random);
}

function pad(number) {
  return ('000' + number).slice(-3);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * HOW_MANY_NUMBERS);
}

function getNotGeneratedName(name) {
  if (generatedNames[name]) {
    return generateName();
  }

  generatedNames[name] = true;
  return name;
}

module.exports = Robot;
