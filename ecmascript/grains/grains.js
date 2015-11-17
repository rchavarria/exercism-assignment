import BigInt from './big-integer';

function Grains() {
  const square = n => BigInt(2).pow(n - 1).toString();
  const total = () => BigInt(2).pow(64).minus(1).toString();

  return Object.freeze({ square, total });
}

export default Grains;
