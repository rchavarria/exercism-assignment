function compute(strand1, strand2) {
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var i,
    len = strand1.length,
    distance = 0;
  
  for(i = 0; i < len; i++) {
    distance += (strand1[i] === strand2[i]) ? 0 : 1;
  }

  return distance;
}

module.exports = { compute: compute };
