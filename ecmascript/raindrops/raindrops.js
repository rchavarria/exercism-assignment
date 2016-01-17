const SOUNDS = [
  { factor: 3, sound: 'Pling' },
  { factor: 5, sound: 'Plang' },
  { factor: 7, sound: 'Plong' }
];

function convert(drop) {
  const sounds = SOUNDS
    .filter(s => drop % s.factor === 0)
    .map(s => s.sound);

  return sounds.join('') || drop.toString();
}

export default () => Object.freeze({ convert });

