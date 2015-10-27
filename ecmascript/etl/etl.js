let transform = (oldDataset) => Object.keys(oldDataset)
    .reduce((newDataset, key) => {
      oldDataset[key].forEach((character) => {
        newDataset[character.toLowerCase()] = +key;
      });
      return newDataset;
    }, {});

export default transform;
