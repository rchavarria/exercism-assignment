export default class PrimeFactors {
  for(n) {
    let factors = [];
    let candidate = 2;

    while (candidate <= n) {
      if (n % candidate === 0) {
        factors.push(candidate);
        n /= candidate;
      } else {
        candidate++;
      }
    }

    return factors;
  }
}
