function throwIfNoSize(sides) {
  const size = sides.reduce((sum, i) => sum + i, 0);
  if (size === 0) {
    throw Error('Triangle with no size is illegal');
  }
}

function throwIfSomeNegativeSide(sides) {
  if (sides.some(s => s < 0)) {
    throw Error('Triangle with negative sides is illegal');
  }
}

function throwOnInequality(sides) {
  const [ a, b, c ] = sides;
  if ((a + b) < c || (a + c) < b || (b + c) < a) {
    throw Error('Triangle sides must obbey inequality');
  }
}

function throwIfInvalid(sides) {
  throwIfNoSize(sides);
  throwIfSomeNegativeSide(sides);
  throwOnInequality(sides);
}

class Triangle {

  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  kind() {
    throwIfInvalid(this.sides);

    const [ a, b, c ] = this.sides;
    if (a === b && a === c && b === c) {
      return 'equilateral';
    }

    if (a !== b && a !== c && b !== c) {
      return 'scalene';
    }

    return 'isosceles';
  }

}

export default Triangle;

