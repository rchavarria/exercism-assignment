
function Strand(dnaStrand) {
  this.strand = dnaStrand;
}

Strand.prototype.count = function (nucleotide) {
  return this.strand.split(nucleotide).length - 1;
};

Strand.prototype.histogram = function () {
  var nucleotideHistogram = { A: 0, C: 0, G: 0, T: 0 };
  this.strand.split('').forEach(function (i) {
    nucleotideHistogram[i]++;
  });
  return nucleotideHistogram;
};

module.exports = function StrandFactory (dnaStrand) {
  var VALID_STRAND_NUCLEOTIDES = /[^ACGT]/,
    strand = dnaStrand || '';

  if (VALID_STRAND_NUCLEOTIDES.test(strand)) {
    throw new Error('DNA strand [' + strand + '] has no valid nucleotides');
  }

  return new Strand(strand);
};

