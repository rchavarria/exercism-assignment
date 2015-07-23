module.exports = function (phrase) {
  return phrase
    .match(/\S+/g)
    .reduce(function (words, each) {
      words[each] = (Number(words[each]) || 0) + 1;
      return words;
    }, {});
}
