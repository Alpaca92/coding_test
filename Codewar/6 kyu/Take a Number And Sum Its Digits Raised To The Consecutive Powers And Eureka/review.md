### [Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!](https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript)

```js
/*
pseudo code

n = a;
result = [];
a이상 ~ b이하의 범위에서 1씩 증가시키면서 찾아봄 (a <= n <= b)
n을 문자로 바꾸고 for (let i = 0; i < n.length; i++)
n[i]^i + ... = n이면 result.push(n)
*/
```
`reduce()`에 대한 이해가 부족해서 `map()`을 사용해버렸다

`reduce()`를 쓰려고 했는데 `index`에 대한 부분을 어떻게 풀어가야할지 감이 오지 않았다

그래도 썩 나쁘지 않게 풀어나간 것 같은데 그것보다 더 중요한 건 `n = a`를 할 이유가 없기 때문이다

`++a`같이 `a`를 점점 `b`에 접근시키면 되는 건데 왜 따로 새로운 변수를 만들었는지 나도 나를 모르겠다

```js
function sumDigPow(a, b) {
  const result = [];

  while (a <= b) {
    let acc = 0;

    [...a.toString()].map((digit, idx) => (acc += digit ** (idx + 1)));

    if (a === acc) {
      result.push(a);
      ++a;
    } else {
      ++a;
    }
  }

  return result;
}
```
이렇게 풀었다면 메모리 측면에서 조금 더 깔끔하고 절약된 코드가 되지않을까 싶다