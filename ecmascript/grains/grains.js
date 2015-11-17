import BigInt from './big-integer';

class Grains {
  square(n) {
    return BigInt(2).pow(n - 1).toString();
  }
}

export default Grains;
