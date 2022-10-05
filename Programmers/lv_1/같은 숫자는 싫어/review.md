### [같은 숫자는 싫어](https://school.programmers.co.kr/learn/courses/30/lessons/12906)

```js
function solution(arr) {
  return arr.filter((val, index, origin) => val !== origin[index + 1]);
}
```

위 풀이가 가장 깔끔한 것 같다

\+ [Oct 06, 2022]

다시 풀었을 때에는 위와 같은 풀이로 풀었다

```js
function solution(arr) {
  return arr.filter((num, i, origin) => num !== origin[i + 1]);
}
```

근데 reduce와 어느정도 퍼포먼스 차이가 있을까 싶어서 이렇게 풀어보기도 하였다

```js
function solution(arr) {
  return arr.reduce(
    (prev, cur) => (prev[prev.length - 1] === cur ? prev : [...prev, cur]),
    []
  );
}
```

효율성 테스트에서 모두 시간초과 나왔다

filter의 경우 O(n)이어서 통과를 했지만 reduce의 경우 기본이 O(n)이지만 내부에 있는 spread operator 또한 O(n)이기 때문에 결국 O(n^2)이 되어 효율성 테스트를 통과 못하는 것으로 보인다