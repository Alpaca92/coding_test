function solution(dartResult) {
  const scores = [];
  const areas = {
    S: 1,
    D: 2,
    T: 3,
  };
  const prizes = {
    "*": 2,
    "#": -1,
    non: 1,
  };
  const regex = /\d{1,2}\w[\*|#]?/g;

  dartResult.match(regex).forEach((dart, i) => {
    const [score] = dart.match(/\d{1,2}/g);
    const [area] = dart.match(/[S|D|T]/g);
    const [prize] = dart.match(/[*|#]/g) ?? ["non"];

    if (i !== 0 && prize === "*") scores[scores.length - 1] = scores.at(-1) * 2;
    scores.push((+score) ** areas[area] * prizes[prize]);
  });

  return scores.reduce((prev, cur) => prev + cur, 0);
}
