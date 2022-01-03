function solution(citations) {
  const entries = Object.entries(
    citations.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;

      return acc;
    }, {})
  ).reverse();

  let acc = 0;

  while (true) {
    const [key, value] = entries.shift();
    acc += value;

    if (+key <= acc) {
      return +key;
    } else {
      if (acc >= Math.max(...entries.map((entry) => entry[0]))) return acc;
    }
  }
}

/*
examples

<case 1>
citations = [3, 0, 6, 1, 5]

return = 3
*/
