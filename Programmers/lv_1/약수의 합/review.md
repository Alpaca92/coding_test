### [약수의 합](https://school.programmers.co.kr/learn/courses/30/lessons/12928)

```js
function solution(n) {
  const divisors = [];

  if (n === 0) return 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && i !== n / i) divisors.push(i, n / i);
    if (i === Math.sqrt(n)) divisors.push(i);
  }

  return divisors.reduce((acc, cur) => acc + cur, 0);
}
```

이전에 풀었던 방식과는 다르게 풀어보기로 하였는데 결국 비슷하게 풀렸지만 더 짧아진 감은 있다

역시 잘 푼 사람 풀이를 보니 재귀로 풀었는데 args가 3개이상부터는 지양하는 것이 좋다는 걸 클린코드에서 읽어 시도하지 않은 방법이었다<br />
(클린코드에서는 함수명과 args를 통해 하는 일이 명확하다면 args가 적으면 적을 수록 좋다고 말한다)

```js
function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}
```
