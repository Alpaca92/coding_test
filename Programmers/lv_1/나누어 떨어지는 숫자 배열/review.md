### [나누어 떨어지는 숫자 배열](https://school.programmers.co.kr/learn/courses/30/lessons/12910)

```js
function solution(arr, divisor) {
  if (arr.filter(num => !(num % divisor)).length ) {
    return arr.filter(num => !(num % divisor)).sort((a, b) => a - b)
  } else {
    return [-1];
  }
}
```

이전에는 이런식으로 풀었었다