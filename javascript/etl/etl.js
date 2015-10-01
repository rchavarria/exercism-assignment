function transform(dataset) {
  var keys = Object.keys(dataset);

  return keys.reduce(function (transformed, key) {
    var point = +key;

    dataset[point].forEach(function (c) {
      transformed[c.toLowerCase()] = point;
    });

    return transformed;
  }, {});
}

module.exports = transform;
