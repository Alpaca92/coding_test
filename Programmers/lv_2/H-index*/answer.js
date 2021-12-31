function solution(citations) {
  const citationsMap = new Map();

  citations
    .sort((a, b) => b - a)
    .forEach((citation) => {
      if (!citationsMap.has(citation)) {
        citationsMap.set(citation, 1);
      } else {
        citationsMap.set(citation, citationsMap.get(citation) + 1);
      }
    });

  let acc = 0;

  for (const [key, value] of citationsMap) {
    acc += value;

    if (key <= acc) return key;
  }
}

/*
examples

<case 1>
citations = [3, 0, 6, 1, 5]

return = 3
*/
