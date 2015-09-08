
function transcribe(nucleotide) {
  if (nucleotide === 'C') {
    return 'G';
  }

  if (nucleotide === 'G') {
    return 'C';
  }

  if (nucleotide === 'A') {
    return 'U';
  }

  return 'A';
}

module.exports = function toRna(strand) {
  return strand.split('').map(transcribe).join('');
}
