export default class Hamming {
  compute(strand1, strand2) {
    if (strand1 === strand2) {
      return 0;
    }

    return strand1.length;
  }
}

