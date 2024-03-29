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

처음에 `entries`와 `sort`를 이용하여 정렬을 해보았지만 실패했다

```js
function getOwnAnswers(arr, answers) {
  while (answers.length > arr.length) {
    arr = arr.concat(arr);
  }

  return arr.slice(0, answers.length);
}

function gradeTest(obj, answers) {
  return obj["ownAnswers"].filter(
    (ownAnswer, idx) => ownAnswer === answers[idx]
  ).length;
}

function solution(answers) {
  const arr = [
    {
      participantNumber: 1,
      ownAnswers: getOwnAnswers([1, 2, 3, 4, 5], answers),
      score: 0,
    },
    {
      participantNumber: 2,
      ownAnswers: getOwnAnswers([2, 1, 2, 3, 2, 4, 2, 5], answers),
      score: 0,
    },
    {
      participantNumber: 3,
      ownAnswers: getOwnAnswers([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answers),
      score: 0,
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    arr[i].score = gradeTest(arr[i], answers);
  }

  return arr
    .filter((obj) => obj.score)
    .sort((a, b) => b.score - a.score)
    .map((obj) => obj.participantNumber);
}
```

이런식으로 새로운 방식으로도 접근해 봤지만 항상 `test case 5 ~ 12, 14`를 통과하지 못한다

명확하지 않은 것은

1. 동점인 경우 수험번호(participantNumber)가 낮은 순으로 정렬한다 ?

&rarr; 2번째 예시로 보아 true인듯하다

2. 모두 0점인 경우 `[]`을 return한다 ?

&rarr; 이점을 잘 모르겠다 return 문을 조금 바꿔 모두 0점인 경우 `null`을 return 해보았는데 동일하게 <br />`test case 5 ~ 12, 14`를 통과하지 못했다

\+ [12/15]

오랜만에 풀지 못한 문제를 다시 풀러 왔다

```js
function solution(answers) {
  const answerSheet1 = "12345".repeat(Math.ceil(answers.length / 5));
  const answerSheet2 = "21232425".repeat(Math.ceil(answers.length / 8));
  const answerSheet3 = "3311224455".repeat(Math.ceil(answers.length / 10));
  const result = {
    1: 0,
    2: 0,
    3: 0,
  };

  answers.forEach((answer, idx) => {
    result["1"] += +answerSheet1[idx] === answer ? 1 : 0;
    result["2"] += +answerSheet2[idx] === answer ? 1 : 0;
    result["3"] += +answerSheet3[idx] === answer ? 1 : 0;
  });

  return Object.entries(result)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0)
    .map(([student, ,]) => +student);
}
```

하지만 위와 같은 풀이에서 또 다시 `test case 5 ~ 12, 14`를 통과하지 못했다

이번엔 각각의 정답지를 array로 만들고 이를 answers로 빼는 방식으로 진행해보기로 하였다

```js
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
```

하지만 마찬가지로 `test case 5 ~ 12, 14`를 통과하지 못했다

반례를 찾은 후 다시 도전해봐야겠다

\+ [12/27]

여태 수많은 방법을 고안해봤는데 계속 틀려서 이유를 찾아보니 문제를 잘못 이해한 것이였다

나는 0점을 제외한 사람들을 오름차순으로 return했는데, 문제는 가장 높은 점수를 받은 사람을 return하는 것이였다

이때, 1등이 다수라면 이를 오름차순으로 정렬하라는 뜻이였다

이를 해결하고 나니 깔끔하게 통과하였다

> 문제를 해결하려는 마음이 급해 문제를 대충읽은 탓에 많은 시간을 허비했다<br />
> 실무에 가서도 이러한 실수를 하지 않기 위해 `문제를 정확히파악하는 것을 1순위`로 두고 접근해야겠다

\+ [Oct 15, 2022]

```js
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
```

문제를 다시 풀러 왔다
