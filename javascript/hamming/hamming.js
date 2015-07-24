function compute(strand1, strand2) {
  var i,
    len = strand1.length,
    distance = 0,
    nucleotides1 = strand1.split(''),
    nucleotides2 = strand2.split('');
  
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  for(i = 0; i < len; i++) {
    distance += (nucleotides1[i] === nucleotides2[i]) ? 0 : 1;
  }

  return distance;
}

module.exports = { compute: compute };
