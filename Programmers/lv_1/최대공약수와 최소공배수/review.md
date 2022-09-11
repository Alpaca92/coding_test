### [최대공약수와 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12940)

유클리드 호제법을 사용하는 것이 가장좋은듯 하다

```js
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}
```

나도 깔끔하게 짰다고 생각했는데 위 사람의 코드를 보면 굉장히 깔끔하게 짠 것을 볼 수 있다

