### [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

```js
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
```
처음에 `entries`와 `sort`를 이용하여 정렬을 해보았지만 실패했다.
