### [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

```js
/*
pseudo code

예약자의 본인의 이름이 있는지 확인한다
있다면 예약자에서 본인의 이름을 없애고 분실자에서도 해당 번호의 이름을 지운다

예약자의 전번호가 lost에 있는지를 확인한다
있다면 예약자에서 본인의 이름을 없애고 분실자에서도 해당 번호의 이름을 지운다
예약자의 전원을 다 훑어봤다면 이번엔 뒷번호가 lost에 있는지를 확인하고 지우기를 반복한다

반복이 다 끝났다면 n - lost.length가 수업을 들을 수 있는 인원 수이다

반례 : R L R L 이면 위 알고리즘대로 하면 3이지만 정답은 4이다
*/
```

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

\+ [12/16]

구글링을 하여 정렬을 하는 것이 기본인듯하여 정렬을 하고 빈 배열을 만들어 풀어보았다

```js
/*
pseudo code

arr를 n개만큼 만든다 [0, 0, 0, 0, 0]
모든 idx(lost의 있는 숫자 - 1)에 대해 -1을 해준다 [0, -1, 0, -1, 0]
if 자기 idx(reserve의 있는 숫자 - 1)이 음수라면 거기에 1을 더해준다
elif idx(reserve의 있는 숫자 - 2)이 음수라면 1을 더해준다
elif idx(reserve의 있는 숫자)이 음수라면 1을 더해준다

모든 reserve에 대하여 위 행위를 진행하고 return (filter >= 0).length
*/
```

```js
function solution(n, lost, reserve) {
  const students = [...new Array(n)].map((student) => 0);

  lost
    .sort((a, b) => a - b)
    .forEach((lostStudent) => --students[lostStudent - 1]);

  reserve
    .sort((a, b) => a - b)
    .forEach((reserveStudent) => {
      if (students[reserveStudent - 1] === -1) {
        ++students[reserveStudent - 1];
      } else if (students[reserveStudent - 2] === -1) {
        ++students[reserveStudent - 2];
      } else if (students[reserveStudent] === -1) {
        ++students[reserveStudent];
      }
    });

  return students.filter((student) => student === 0).length;
}
```

이번엔 거의 모든 케이스에서 성공했지만 `test case 5`는 통과하지 못했다
