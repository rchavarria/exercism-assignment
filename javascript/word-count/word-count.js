function countWords(result, word) {
  result[word] = (Number(result[word]) || 0) + 1;
  return result;
}

function words(phrase) {
  var candidates = phrase.match(/\S+/g);
  return candidates.reduce(countWords, {});
}

module.exports = words;

