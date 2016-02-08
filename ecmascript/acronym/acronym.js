const SPLIT_INTO_WORDS = /[A-Z]+[a-z]*|[a-z]+/g;

function parse(phrase) {
  return phrase
    .match(SPLIT_INTO_WORDS)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

export default Object.freeze({ parse });
