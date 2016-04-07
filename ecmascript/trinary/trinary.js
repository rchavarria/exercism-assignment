const NOT_ALLOWED_CHARS = /[^0-9]/g;

function Trinary(trinary) {
  
  function toDecimal() {
    if (NOT_ALLOWED_CHARS.test(trinary)) {
      return 0;
    }

    return [...trinary].reduce((total, i) => +i + total * 3, 0);
  }

  return Object.freeze({ toDecimal });
}

export default Trinary;
