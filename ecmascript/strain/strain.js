function filterBuilder(keep) {
  return (list, predicate) => {
    let result = [];

    const len = list.length;
    for (let i = 0; i < len; i++) {
      let element = list[i];
      if (predicate(element) === keep) {
        result.push(element);
      }
    }

    return result;
  }
}

export default Object.freeze({
  keep: filterBuilder(true),
  discard: filterBuilder(false)
});

