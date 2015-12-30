const TRANSLATION_TABLE = [
  [ 1000, 'M' ],
  [ 900, 'CM' ],
  [ 500,  'D' ],
  [ 400, 'CD' ],
  [ 100,  'C' ],
  [ 90,  'XC' ],
  [ 50,   'L' ],
  [ 40,  'XL' ],
  [ 10,   'X' ],
  [ 9,   'IX' ],
  [ 5,    'V' ],
  [ 4,   'IV' ],
  [ 1,    'I' ]
];

export default (arabic) => {
  let romanSymbols = '';

  TRANSLATION_TABLE.forEach( ([arabicValue, romanSymbol]) => {
    while (arabic >= arabicValue) {
      romanSymbols += romanSymbol;
      arabic -= arabicValue;
    }
  });

  return romanSymbols;
}

