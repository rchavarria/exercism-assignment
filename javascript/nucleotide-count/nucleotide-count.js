
function dna(dnaStrand) {
  var strand = dnaStrand || '';

  return {
    count: function (nucleotide) {
      return strand.length;
    }
  };
}

module.exports = dna;
