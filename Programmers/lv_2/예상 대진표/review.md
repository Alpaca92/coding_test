### [예상 대진표](https://programmers.co.kr/learn/courses/30/lessons/12985)

```js
/*
pseudo code

1. 두 index의 차이가 1이고, 큰쪽이 짝수이면 현재 라운드에서 만난다
2. 다음 숫자 = Math.ceil(현재숫자 / 2)
*/
```

```js
function solution(n, a, b) {
  let counter = 1;
  const max = a > b ? a : b;
  const min = a > b ? b : a;

  if (max % 2 === 0 && max - min === 1) return counter;

  return (counter += solution(n / 2, Math.ceil(a / 2), Math.ceil(b / 2)));
}
```

내가 `재귀함수`에 약하다는 생각이 들어 간단한 문제인 것 같아 재귀함수로 풀어보았다

좀 더 깔끔하게 풀고 싶다면 반복문을 사용하는 것이 맞다고 생각한다
