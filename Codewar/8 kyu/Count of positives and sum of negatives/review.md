### [Count of positives / sum of negatives](https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript)

딱히 코멘트를 달 필요가 없는 수준의 문제였다

그래도 이 코드는 조금 참신하긴 했지만 `O(n^2)`이라 배열이 컸으면 fail이 됐을 수도 있을 것 같다

```js
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
```
