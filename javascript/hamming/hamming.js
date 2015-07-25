// Strand class
function Strand(strand) {
  this.nucleotides = strand.split('');
}

Strand.prototype.computeHamming = function (otherStrand) {
  if (this.nucleotides.length !== otherStrand.nucleotides.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var differentNucleotides = this.nucleotides
    .filter(function (nucleotide, i) {
      return nucleotide !== otherStrand.nucleotides[i];
    });
  
  return differentNucleotides.length;
}

// Hamming class
function Hamming() {
}

Hamming.prototype.compute = function (strand1, strand2) {
  return new Strand(strand1).computeHamming(new Strand(strand2));
}

module.exports = new Hamming();

