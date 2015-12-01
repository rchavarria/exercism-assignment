class Triangle {

  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  kind() {
    const [ a, b, c ] = this.sides;

    // check for some size
    if (a + b + c === 0) {
      throw Error('Triangle with no size is illegal');
    }

    // check for negative sides
    if (this.sides.some(s => s < 0)) {
      throw Error('Triangle with negative sides is illegal');
    }

    // check for inequality
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw Error('Triangle sides must obbey inequality');
    }

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

