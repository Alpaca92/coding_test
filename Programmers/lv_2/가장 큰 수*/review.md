### [가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746)

```js
function solution(numbers) {
  numbers = numbers.map((number) => number.toString());

  for (let i = 1; i < 5; i++) {
    numbers.sort((a, b) => {
      const LENGTH_A = a.split("").length;
      const LENGTH_B = b.split("").length;

      if (b[LENGTH_B - i] && a[LENGTH_A - i]) {
        return +b[LENGTH_B - i] - +a[LENGTH_A - i];
      }

      return 0;
    });
  }
  return numbers.join("");
}
```

처음에는 **1의 자리 ~ 1,000의 자리까지 sort()로 한 번씩 순회**하는 방식으로 풀어보았다

아쉽게도 거의 모든 case에서 실패하고 말았다
