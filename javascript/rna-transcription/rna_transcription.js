
var TRANSCRIPTIONS = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
}

function withTheirTranscriptions(nucleotide) {
  return TRANSCRIPTIONS[nucleotide];
}

module.exports = function toRna(dna) {
  return dna.replace(/[CGAT]/g, withTheirTranscriptions);
}

