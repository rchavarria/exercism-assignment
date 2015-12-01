import BigInt from './big-integer';

const powerOf2 = (exp) => BigInt(2).pow(exp);

function Grains() {
  const square = n => powerOf2(n - 1).toString();
  const total = () => powerOf2(64).minus(1).toString();

  return Object.freeze({ square, total });
}

export default Grains;

