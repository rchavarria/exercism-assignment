function words(phrase) {
  var result = {},
    candidates = phrase.replace('\n', ' ').split(' ');

  candidates.forEach(function (word) {
    var count = result[word] || 0;
    result[word] = (count + 1);
  });

  return result;
}

module.exports = words;

