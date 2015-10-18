export default class Words {
  count (phrase) {
    return phrase
      .match(/\S+/g)
      .reduce((words, each) => {
        words[each] = (Number(words[each]) || 0) + 1;
        return words;
      }, {});
  }
}

