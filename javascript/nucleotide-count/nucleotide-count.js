
function dna(dnaStrand) {
  var VALID_STRAND_NUCLEOTIDES = /[^ACGT]/,
    strand = dnaStrand || '';

  if (VALID_STRAND_NUCLEOTIDES.test(strand)) {
    throw new Error('DNA strand [' + strand + '] has no valid nucleotides');
  }

  return {
    count: function (nucleotide) {
      var n = 0;
      strand.split('').forEach(function (i) {
        if (i === nucleotide) {
          n++;
        }
      });

      return n;
    },

    histogram: function () {
      return {
        A: this.count('A'),
        C: this.count('C'),
        G: this.count('G'),
        T: this.count('T')
      };
    }

  };
}

module.exports = dna;
