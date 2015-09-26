function transform(old) {
  var newStructure = {},
    characters = old['1'];

  characters.forEach(function (c) {
    newStructure[c.toLowerCase()] = 1;
  });

  return newStructure;
}

module.exports = transform;
