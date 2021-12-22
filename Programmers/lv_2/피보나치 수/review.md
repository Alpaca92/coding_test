### [피보나치 수](https://programmers.co.kr/learn/courses/30/lessons/12945)

```js
/*
pseudo code

fib = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

피보나치 수열 함수 만들기
1. 두 수와 몇번을 진행할지를 args로 받는다(a, b, n)
2. return n !== 0 ? fib(b, a + b, --n) : a 
*/
```

간단한 피보나치수열 문제라고 생각했다

```js
function solution(n) {
  const fib = (a, b, n) => (n !== 0 ? fib(b, a + b, --n) : a);

  return fib(0, 1, n) % 1234567;
}
```

근데 `test case 7 ~ 14`를 실패하였고 그 중에 `13 ~ 14`는 런타임 에러였다

재귀함수를 사용하면 아마 시간이 모자르는 듯 하다

찾아보니 재귀함수 등의 깊이가 `10,000`이 넘으면 안되는 것이였다 _[출처](https://jireh.tistory.com/14)_

`for loop`를 돌려도 시간초과가 될 것이 분명하므로 다른 방식을 고안해야 했다

이는 수학적 증명을 단순히 코드화했을 뿐이다

```js
function solution(n) {
  return Math.round(
    ((((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) /
      Math.sqrt(5)) %
      1234567
  );
}
```

무리수에 대한 소수점은 한계가 있기때문에 컴퓨터로의 계산은 오차가 있고 이를 보정하기에 가장 간단한 `Math.round()`를 사용했다

해당 알고리즘에서의 오차는 `0.00000000001`미만 수준이기 때문에 반올림으로도 충분하다 생각했기 때문이다

하지만 `test case 7 ~ 14`에서 여전히 실패하였다

그래도 `13 ~ 14`의 런타임 에러는 없는 것을 보니 시간의 문제는 아닌듯 하였다

결국 이 방법도 잘못된 방법임을 깨달았다 _[위 식의 증명과정](https://j1w2k3.tistory.com/330)_

우여곡절 끝에 행렬로 푸는 방법을 찾아냈다

> $\begin{pmatrix}F(n+1)\\F(n)\\ \end{pmatrix}$ = $\begin{pmatrix}1&1\\1&0\\ \end{pmatrix}$ \*_ n _ $\begin{pmatrix}1\\0\\ \end{pmatrix}$

이라는 논리였다 _[출처](https://ohgym.tistory.com/1)_

이를 구현해보려고 하는데 결국엔 많은 `for loop`를 돌리기도 해야하고 행렬을 구현할 아이디어가 떠오르지 않아 관두고 새로운 방식을 찾아봤다

찾아보던 와중에 `동적계획법(dynamic programming; DP)`중의 `bottom up`이라는 방식을 찾았다 _[개념설명](https://nyang-in.tistory.com/264)_, _[출처](https://www.youtube.com/watch?v=vYquumk4nWw&list=PLBZBJbE_rGRU5PrgZ9NBHJwcaZsNpf8yD)_

```js
function solution(n) {
  if (n === 2) return 1;

  const fibNumbers = new Array(n + 1).fill(0);
  fibNumbers[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }

  return fibNumbers[n] % 1234567;
}
```

`bottom up`방식으로 해결한 후에는 `test case 13 ~ 14`의 런타임 에러는 사라졌지만 `test case 7 ~ 14`가 실패하는건 여전하였다

`100000번째 피보나치 수`를 콘솔로 찍어보니 `Infinity`가 나왔다

결국 **숫자가 너무커서** `test case 7 ~ 14`에서 실패가 나는듯 하였다

```js
/*
pseudo code

p로 나눌 때의 나머지
A = a * p + x
B = b * p + y

A + B = (a + b) * p + x + y
이므로 (A % p) + (B % p) === (A + B) % p
*/
```
라는 결론이 나왔고 모든 피보나치 수를 먼저 `1234567`로 저장하여 더해주기로 하였다