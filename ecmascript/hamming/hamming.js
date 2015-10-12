export default class Hamming {
  compute(strand1, strand2) {
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

