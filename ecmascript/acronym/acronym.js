const ONLY_UPPERCASE_REGEX = /[A-Z]/;
const SPACE_AND_DASH_REGEX = /[\s-]/;

function shouldSkipChar(previous) {
  return ONLY_UPPERCASE_REGEX.test(previous);
}

function shoudKeepChar(index, previous, current) {
  return index === 0
    || SPACE_AND_DASH_REGEX.test(previous)
    || ONLY_UPPERCASE_REGEX.test(current);
}
  
function parse(phrase) {
  const len = phrase.length;
  let acronym = '';

  for(let i = 0; i < len; i++) {
    if (shouldSkipChar(phrase[i - 1])) {
      continue;
    }

    if (shoudKeepChar(i, phrase[i - 1], phrase[i])) {
      acronym += phrase[i].toUpperCase()
    }
  }

  return acronym;
}

export default Object.freeze({ parse });
