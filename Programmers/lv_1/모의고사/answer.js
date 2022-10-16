function solution(answers) {
  const answerPatterns = ["12345", "21232425", "3311224455"];
  const scores = answers.reduce(
    (prev, cur, i) => {
      answerPatterns.forEach((answerPattern, j) => {
        if (cur === +answerPattern[i % answerPattern.length]) {
          ++prev[j];
        }
      });
      return prev;
    },
    [0, 0, 0]
  );
  const winners = scores.map((score, i, origin) =>
    score === Math.max(...origin) ? i + 1 : null
  );

  return winners.filter((winner) => winner);
}

/*
examples

<case 1>
answers = [1,2,3,4,5]

return = [1]

<case 2>
answers = [1,3,2,4,2]

return = [1,2,3]
*/
