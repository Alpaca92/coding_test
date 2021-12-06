### [Product of consecutive Fib numbers](https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript)

```js
/*
pseudo code

prod에 제곱근(ceil)한 숫자를 구한다
피보나치 수열을 만드는 함수를 구한다 : (prod)의 제곱근보다 큰 수의 다음수까지 구한다

(i - 1) * (i) === prod ?
  prod보다 크면 => return [(i - 1), i, false]

  prod보다 작으면 => i++
  i * (i + 1) === prod ?
    prod보다 크면 => return [i, (i + 1), false]
*/
```

위와 같은 논리로 풀었는데 전혀 만족스럽지 않은 조잡하고 난잡한 코드로 풀어서 너무 실망스러웠다

다른 사람 풀이를 보면서 정말 깔끔하다고 생각했는데

```js
function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
```

`boolean`은 `===`으로 해결하면서 `while(a * b < prod)`라는 조건문을 넣어서 `a * b >= prod`라는 조건을 충족시켰다

나도 좀 더 고민하고 매일매일 문제를 풀어가다보면 저런 코드를 짤 수 있을까? 하는 기대가 들면서도 자신감이 많이 떨어지기도 한다

**꾸준히 노력하는 사람이 되자 :)**
