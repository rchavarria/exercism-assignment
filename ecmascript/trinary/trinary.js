function Trinary(trinary) {
  const NOT_ALLOWED_CHARS = /[^0-9]/g;
  
  function toDecimal() {
    if (NOT_ALLOWED_CHARS.test(trinary)) {
      return 0;
    }

    return [...trinary]
      .reverse()
      .map((d, i) => parseInt(d) * Math.pow(3, i))
      .reduce((sum, d) => sum + d, 0);
  }

  return Object.freeze({ toDecimal });
}

export default Trinary;
