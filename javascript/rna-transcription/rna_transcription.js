
var TRANSCRIPTIONS = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
}

module.exports = function toRna(dna) {
  return dna.replace(/[CGAT]/g, function (nucleotide) {
    return TRANSCRIPTIONS[nucleotide];
  });
}

