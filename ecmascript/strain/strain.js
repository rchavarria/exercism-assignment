function keep(list, filter) {
  return list.filter(filter);
}

function discard(list, filter) {
  return list.filter(e => !filter(e));
}

export default Object.freeze({ keep, discard });

