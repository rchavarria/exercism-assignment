
function computeHistogram(strand) {
  var nucleotideHistogram = { A: 0, C: 0, G: 0, T: 0 };

  strand.split('').forEach(function (i) {
    nucleotideHistogram[i]++;
  });

  return nucleotideHistogram;
}

function NucleotideHistogram(histogram) {
  this.cachedHistogram = histogram;
}

NucleotideHistogram.prototype.count = function (nucleotide) {
  return this.cachedHistogram[nucleotide];
}

NucleotideHistogram.prototype.histogram = function () {
  return this.cachedHistogram;
}

module.exports = function StrandFactory (dnaStrand) {
  var VALID_STRAND_NUCLEOTIDES = /[^ACGT]/,
    histogram,
    strand = dnaStrand || '';

  if (VALID_STRAND_NUCLEOTIDES.test(strand)) {
    throw new Error('DNA strand [' + strand + '] has no valid nucleotides');
  }

  histogram = computeHistogram(strand);
  return new NucleotideHistogram(histogram);
};

