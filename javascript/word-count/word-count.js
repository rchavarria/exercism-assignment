function replaceToSpace(phrase) {
  return phrase.replace(/[\t\n\s]+/, ' ').trim();
}

function isCountedWord(candidate) {
  return candidate && typeof candidate !== 'function';
}

function countWords(result, word) {
  var count = 0;
  if (isCountedWord(result[word])) {
   count = result[word];
  }
  result[word] = count + 1;
  return result;
}

function words(phrase) {
  var candidates = replaceToSpace(phrase).split(' ');
  return candidates.reduce(countWords, {});
}

module.exports = words;

