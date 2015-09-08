
function transcribe(nucleotide) {
  if (nucleotide === 'C') {
    return 'G';
  }

  if (nucleotide === 'G') {
    return 'C';
  }

  return 'U';
}

module.exports = function toRna(strand) {
  return strand.split('').map(transcribe).join('');
}
