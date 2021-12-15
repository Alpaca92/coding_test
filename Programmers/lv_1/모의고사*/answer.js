function solution(answers) {
  const answerSheet1 = "12345"
    .repeat(Math.ceil(answers.length / 5))
    .slice(0, answers.length)
    .split("");
  const answerSheet2 = "21232425"
    .repeat(Math.ceil(answers.length / 8))
    .slice(0, answers.length)
    .split("");
  const answerSheet3 = "3311224455"
    .repeat(Math.ceil(answers.length / 10))
    .slice(0, answers.length)
    .split("");

  answers.forEach((answer, idx) => {
    answerSheet1[idx] -= answer;
    answerSheet2[idx] -= answer;
    answerSheet3[idx] -= answer;
  });

  return [
    { name: 1, score: answerSheet1.filter((elem) => elem === 0).length },
    { name: 2, score: answerSheet2.filter((elem) => elem === 0).length },
    { name: 3, score: answerSheet3.filter((elem) => elem === 0).length },
  ]
    .filter(({ name, score }) => score !== 0)
    .sort((a, b) => b.score - a.score)
    .map(({ name, score }) => name);
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