const ALPHABET = 'abcdefghijklmnopqrstuvwxyz1234567890';
const ATBASH_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba1234567890';
const ATBASH_GROUP_SIZE = 5;
const CLEAR_PHRASE_REGEXP = /[\s\,\.]/g;

function encode(phrase) {
  const clearPhrase = phrase.replace(CLEAR_PHRASE_REGEXP, '').toLowerCase();
  let encoded = [...clearPhrase]
    .map(chr => ALPHABET.indexOf(chr))
    .map(i => ATBASH_ALPHABET[i]);

  for(let i = ATBASH_GROUP_SIZE; i < encoded.length; i += ATBASH_GROUP_SIZE + 1) {
    encoded.splice(i, 0, ' ');
  }

  return encoded.join('');
}

export default Object.freeze({ encode });

