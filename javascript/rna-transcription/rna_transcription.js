
function transcribe(nucleotide) {
  var transcriptions = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  }

  return transcriptions[nucleotide];
}

module.exports = function toRna(strand) {
  return strand.split('').map(transcribe).join('');
}
