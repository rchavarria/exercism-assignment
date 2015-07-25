function Hamming() {
}

Hamming.prototype.compute = function (strand1, strand2) {
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var differentNucleotides = strand1
    .split('')
    .filter(function (nucleotide, i) {
      return nucleotide !== strand2[i];
    });

  return differentNucleotides.length;
}

module.exports = new Hamming();

