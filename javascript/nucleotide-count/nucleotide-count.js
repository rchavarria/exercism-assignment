
function Strand(dnaStrand) {
  this.strand = dnaStrand;
}

Strand.prototype.count = function (nucleotide) {
  return this.strand.split(nucleotide).length - 1;
};

Strand.prototype.histogram = function () {
  return {
    A: this.count('A'),
    C: this.count('C'),
    G: this.count('G'),
    T: this.count('T')
  };
};

module.exports = function StrandFactory (dnaStrand) {
  var VALID_STRAND_NUCLEOTIDES = /[^ACGT]/,
    strand = dnaStrand || '';

  if (VALID_STRAND_NUCLEOTIDES.test(strand)) {
    throw new Error('DNA strand [' + strand + '] has no valid nucleotides');
  }

  return new Strand(strand);
};

