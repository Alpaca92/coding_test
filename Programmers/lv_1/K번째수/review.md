### [K번째수](https://school.programmers.co.kr/learn/courses/30/lessons/42748)

```js
function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const pick = commands[i][2] - 1;

    answer.push(array.slice(start, end).sort((a, b) => a - b)[pick]);
  }

  return answer;
}
```

이전에 풀었던 풀이다
