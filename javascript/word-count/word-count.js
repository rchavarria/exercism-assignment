function replaceToSpace(phrase) {
  return phrase.replace('\n', ' ')
               .replace('\t', ' ')
               .replace(/\s+/g, ' ')
               .trim();
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

