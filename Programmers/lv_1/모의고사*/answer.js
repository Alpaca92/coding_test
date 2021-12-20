function solution(answers) {
  let result = [];

  answers = answers.map((answer) => answer.toString()).join("");

  ["12345", "21232425", "3311224455"].forEach((answerSheet, idx) => {
    const obj = {
      name: idx + 1,
      score: 0,
    };

    answerSheet = answerSheet
      .repeat(Math.ceil(answers.length / answerSheet.length))
      .slice(0, answers.length);

    for (let i = 0; i < answerSheet.length; i++) {
      if (answerSheet[i] === answers[i]) ++obj.score;
    }

    if (obj.score) result.push(obj);
  });

  if (result.length) {
    result = result
      .sort((a, b) => b.score - a.score)
      .map(({ name, score }) => name);
  }

  return result;
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

answers = [1, 3, 2, 4, 2];
console.log(solution(answers));
