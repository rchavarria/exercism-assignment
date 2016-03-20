const FORBIDDEN_CHARACTERS = /[^a-z0-9]/gi;

function Crypto(text) {

  function normalizePlaintext() {
    return text.replace(FORBIDDEN_CHARACTERS, '').toLowerCase();
  }

  function size() {
    const normalized = normalizePlaintext();
    const atLeastSize = Math.sqrt(normalized.length);
    return Math.ceil(atLeastSize);
  }

  function plaintextSegments() {
    const normalized = normalizePlaintext();
    const segmentSize = size();
    const splitIntoSegments = new RegExp(`.{1,${segmentSize}}`, 'g');
    return normalized.match(splitIntoSegments);
  }

  function readColumns(columns, rowLength) {
    let message = '';

    for (let i = 0; i < rowLength; i++) {
      columns.forEach(segment => {
        message += segment[i] ? segment[i] : ''
      });
    }

    return message;
  }

  function ciphertext() {
    const segmentSize = size();
    const segments = plaintextSegments();
    return readColumns(segments, segmentSize);
  }

  return Object.freeze({ normalizePlaintext, size, plaintextSegments, ciphertext });
}

export default Crypto;
