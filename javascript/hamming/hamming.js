function compute(strand1, strand2) {
  if (strand1 === strand2) {
    return 0;
  }
  return 1;
}

module.exports = { compute: compute };
