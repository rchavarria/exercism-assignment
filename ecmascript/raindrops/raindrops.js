
function convert(drop) {
  let sound = '';

  if (drop % 3 === 0) {
    sound += 'Pling';
  }

  if (drop % 5 === 0) {
    sound += 'Plang';
  }

  if (drop % 7 === 0) {
    sound += 'Plong';
  }

  return sound || drop.toString();
}

export default () => Object.freeze({ convert });

