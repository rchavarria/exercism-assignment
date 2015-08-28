
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
    }
  };
}

module.exports = dna;
