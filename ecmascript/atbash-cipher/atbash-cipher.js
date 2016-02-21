const ALPHABET = 'abcdefghijklmnopqrstuvwxyz1234567890';
const ATBASH_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba1234567890';
const ATBASH_GROUP_SIZE = 5;
const CLEAR_PHRASE_REGEXP = /[\s\,\.]/g;
const SPLIT_IN_CHUNKS_REGEXP = /.{1,5}/g;

function encode(phrase) {
  const clearPhrase = phrase.replace(CLEAR_PHRASE_REGEXP, '').toLowerCase();
  let encoded = [...clearPhrase]
    .map(chr => ALPHABET.indexOf(chr))
    .map(i => ATBASH_ALPHABET[i])
    .join('');

  return encoded.match(SPLIT_IN_CHUNKS_REGEXP).join(' ');
}

export default Object.freeze({ encode });

