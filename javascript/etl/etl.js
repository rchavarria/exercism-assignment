var AVAILABLE_POINTS = [ '1', '2', '3', '4', '5', '8', '10' ];

function transform(old) {
  var newStructure = {};

  AVAILABLE_POINTS.forEach(function (point) {
    var characters = old[point];
    if (!characters) {
      return;
    }

    characters.forEach(function (c) {
      newStructure[c.toLowerCase()] = parseInt(point, 10);
    });
  });

  return newStructure;
}

module.exports = transform;
