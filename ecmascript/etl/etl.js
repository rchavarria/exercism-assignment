function transform(oldDataset) {
  const entries = Object.entries(oldDataset);
  return entries.reduce((newDataset, [ key, value ]) => {
    value.map(c => c.toLowerCase())
         .forEach(c => newDataset[c] = +key);
    return newDataset;
  }, {});
}

export default transform;
