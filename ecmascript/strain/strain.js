const filter = (list, predicate) => {
  let result = [];

  const len = list.length;
  for (let i = 0; i < len; i++) {
    let element = list[i];
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

const keep = (list, predicate) => filter(list, predicate);
const discard = (list, predicate) => filter(list, e => !predicate(e));

export default Object.freeze({ keep, discard });

