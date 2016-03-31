const FORBIDDEN_CHARACTERS = /[\W]/gi;

function Crypto(text) {
  const normalizedText = text.replace(FORBIDDEN_CHARACTERS, '').toLowerCase();
  const size = Math.ceil(Math.sqrt(normalizedText.length))
  const splitIntoSegments = new RegExp(`.{1,${size}}`, 'g');
  const segments = normalizedText.match(splitIntoSegments);

  function transpose(segments, length) {
    return Array.from( {length}, (item, i) =>
      segments.map(s => s[i] || '').join('')
    );
  }

  return Object.freeze({
    normalizePlaintext: () => normalizedText,
    size: () => size,
    plaintextSegments: () => segments,
    ciphertext: () => transpose(segments, size).join('')
  });
}

export default Crypto;
