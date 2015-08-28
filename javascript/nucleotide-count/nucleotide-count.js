
function dna(dnaStrand) {
  var strand = dnaStrand || '';

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
        A: 0,
        C: 0,
        G: 0,
        T: 0
      };
    }

  };
}

module.exports = dna;
