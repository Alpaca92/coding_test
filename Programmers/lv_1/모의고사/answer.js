function solution(answers) {
  const ANSWERS_LENGTH = answers.length;
  let arr = ["12345", "21232425", "3311224455"];
  const obj = {
    1: 0,
    2: 0,
    3: 0,
  };

  arr = arr.map((answer) => {
    return answer
      .repeat(Math.ceil(ANSWERS_LENGTH / answer.length))
      .slice(0, ANSWERS_LENGTH);
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < ANSWERS_LENGTH; j++) {
      if (+arr[i][j] === answers[j]) obj[`${i + 1}`]++;
    }
  }

  const result = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  const answer = [];

  for (const person in result) {
    if (result[person] !== 0) answer.push(+person);
  }

  return answer;
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