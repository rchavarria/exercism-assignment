export default function accumulate(data, acc) {
  let result = [];
  const len = data.length;

  for (let i = 0; i < len; i++) {
    result.push(acc(data[i]));
  }

  return result;
}

