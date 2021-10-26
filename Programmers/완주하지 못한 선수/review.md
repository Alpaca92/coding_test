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
