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
  var candidates = phrase.match(/\S+/g);
  return candidates.reduce(countWords, {});
}

module.exports = words;

