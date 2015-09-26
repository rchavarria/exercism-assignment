var AVAILABLE_POINTS = [ 1, 2, 3, 4, 5, 8, 10 ];

function transform(oldStructure) {
  var newStructure = {};

  AVAILABLE_POINTS.forEach(function (point) {
    var characters = oldStructure[point];
    if (!characters) {
      return;
    }

    characters.forEach(function (c) {
      newStructure[c.toLowerCase()] = point;
    });
  });

  return newStructure;
}

module.exports = transform;
