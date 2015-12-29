const POINTS = {
  1: [ 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
  2: [ 'D', 'G' ],
  3: [ 'B', 'C', 'M', 'P' ],
  4: [ 'F', 'H', 'V', 'W', 'Y' ],
  5: [ 'K' ],
  8: [ 'J', 'X' ],
  10: [ 'Q', 'Z' ]
};

export default (word) => {
  if (!word) {
    return 0;
  }

  let total = 0;
  [...word.toUpperCase()].forEach(i => {
    Object.keys(POINTS).forEach(p => {
      const chars = POINTS[p];
      if (chars.some(c => c === i)) {
        total += parseInt(p, 10);
      }
    });
  });

  return total;
}

