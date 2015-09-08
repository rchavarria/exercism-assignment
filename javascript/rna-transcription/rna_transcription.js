
function transcribe(nucleotide) {
  if (nucleotide === 'C') {
    return 'G';
  }

  return 'C';
}

module.exports = function toRna(strand) {
  return strand.split('').map(transcribe).join('');
}
