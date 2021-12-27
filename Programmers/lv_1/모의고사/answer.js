function solution(answers) {
  const answerPatterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    answerPatterns.forEach((answerPattern, j) => {
      scores[j] += answer === answerPattern[i % answerPattern.length] ? 1 : 0;
    });
  });

  return scores
    .map((score, idx) => (score === Math.max(...scores) ? idx + 1 : null))
    .filter((score) => score !== null);
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
