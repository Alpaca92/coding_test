### [콜라 문제](https://school.programmers.co.kr/learn/courses/30/lessons/132267)

재귀를 연습할겸 재귀로 풀었는데 신박한 풀이가 있었다

```js
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
```

근데 식 자체를 이해를 못하는 거 보니 이산수학이 필요하다는 생각이 들었다
