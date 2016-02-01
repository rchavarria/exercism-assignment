const keep = (l, f) => l.filter(f);
const discard = (l, f) => l.filter(e => !f(e));
export default Object.freeze({ keep, discard });

