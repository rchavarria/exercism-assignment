function replaceToSpace(phrase) {
  return phrase.replace('\n', ' ')
               .replace('\t', ' ');
}

function words(phrase) {
  var result = {},
    candidates = replaceToSpace(phrase).split(' ');

  candidates.forEach(function (word) {
    var count = result[word] || 0;
    result[word] = (count + 1);
  });

  return result;
}

module.exports = words;

