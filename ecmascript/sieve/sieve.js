function computePrimes(limit) {
  let primes = [];
  let candidatesUpToLimit = Array.from({ length: limit - 1 }, (x, i) => i + 2);
  let firstPrime = candidatesUpToLimit[0];

  while (firstPrime) {
    candidatesUpToLimit = candidatesUpToLimit
      .filter(candidate => candidate % firstPrime !== 0);
    primes.push(firstPrime);
    firstPrime = candidatesUpToLimit[0];
  }

  return primes;
}

function Sieve(limit) {
  return Object.freeze({
    primes: computePrimes(limit)
  });
}

export default Sieve;
