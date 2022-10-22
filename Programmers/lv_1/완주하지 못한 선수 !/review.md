### [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

```js
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  completion.forEach((person) => {
    const idx = participant.indexOf(person);

    if (idx !== -1) {
      participant.splice(idx, 1);
    }
  });

  return participant[0];
}
```

처음 답변은 위와 같았는데 효율성에서 0점이 나와서 다시 생각하기로 했다.
그러다 제목에 `해시`라는 것이 보였고 obj로 풀면 좀 더 빠를 것 같다 싶어서 그렇게 정리하고 value를 비교하여 답을 도출해냈다.

\+[Oct 23, 2022]

```js
function solution(participant, completion) {
  const participantObj = {};
  const completionObj = {};

  participant.forEach((person) => {
    if (!(person in participantObj)) {
      participantObj[person] = 1;
    } else {
      participantObj[person]++;
    }
  });

  completion.forEach((person) => {
    if (!(person in completionObj)) {
      completionObj[person] = 1;
    } else {
      completionObj[person]++;
    }
  });

  for (const key in participantObj) {
    if (participantObj[key] !== completionObj[key]) return key;
  }
}
```

새로운 폴이로 풀어보고 싶었다

```js
function solution(participant, completion) {
  for (let i = 0; i < participant.length; ++i) {
    const completionPlayerIdx = completion.findIndex(
      (completionPlayer) => completionPlayer === participant[i]
    );
    if (completionPlayerIdx === -1) return participant[i];
    participant[i] = 0;
    completion[completionPlayerIdx] = 0;
  }
  return participant.filter((player) => !!player)[0];
}
```

간단하게 풀어보려고 했는데 효율성에서 0점을 받았다
