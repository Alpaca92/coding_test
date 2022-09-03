### [없는 숫자 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/86051)

기존에 풀었던 풀이를 배제하고 풀다보니 새로운 관점이 많이 생기는 것 같다

제출하고 나니 비슷한 방식의 풀이가 최상단에 있는 모습을 보니 조금 뿌듯하기도 했다

```js
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; ++i) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
```

기존의 풀이는 위와 같았다
