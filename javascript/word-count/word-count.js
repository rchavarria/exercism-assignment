/*
 * Some ideas to improve this iteration:
 * 1. use `Array.prototype.reduce()` 
 * 2. use `/\S+/g`
 * 3. use `match()` instead of `split()`
 * 4. use `Number(result[word])` to check if the property exists and
 * it is a number
 */
function replaceToSpace(phrase) {
  return phrase.replace(/[\t\n\s]+/, ' ').trim();
}

function isCountedWord(candidate) {
  return candidate && typeof candidate !== 'function';
}

function words(phrase) {
  var result = {},
    candidates = replaceToSpace(phrase).split(' ');

  candidates.forEach(function (word) {
    var count = 0;
    if (isCountedWord(result[word])) {
      count = result[word];
    }
    result[word] = count + 1;
  });

  return result;
}

module.exports = words;

