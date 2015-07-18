function words(phrase) {
  var candidates = phrase.split(' '),
    result = {};

  candidates.forEach(function (i) {
    if (result[i]) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  });

  return result;
}

module.exports = words;

