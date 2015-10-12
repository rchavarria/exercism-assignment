export default class Hamming {
  compute(strand1, strand2) {
    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let difference = 0;
    for (let i = 0; i < strand1.length; i++) {
      if (strand1.charAt(i) === strand2.charAt(i)) {
        continue;
      }

      difference++;
    }

    return difference;
  }
}

