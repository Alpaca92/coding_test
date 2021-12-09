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

혼자 힘으로 풀기 어려워 아이디어를 좀 찾아봤는데 각각의 `number`들을 비교하여 푸는 아이디어가 눈에 띄었다

예를 들어 `[3, 5, 30]`이라는 배열이 있다면

1. `[5, 30]`을 비교 => `530` > `305` => `[3] + [5, 30]`
2. `[3, 5]`을 비교 => `35` < `53` => `[5, 3] + [30]`
3. `[3, 30]`을 비교 => `330` > `303` => `[5] + [3, 30]`

위와 같은 방식이다

```js
/*
pseudo code

맨 끝에서부터 두개를 선택하여 크기비교 ab, ba
정렬을 하고 한칸 앞으로 당겨서 다시 비교
...
return string
*/
```
하지만 위와 같은 방식으로 코드를 짰는데
```js
function solution(numbers) {
  for (let i = numbers.length - 2; i >= 0; i--) {
    let startIdx = i;

    while (startIdx < numbers.length - 1) {
      if (
        +(numbers[startIdx].toString() + numbers[startIdx + 1].toString()) <=
        +(numbers[startIdx + 1].toString() + numbers[startIdx].toString())
      ) {
        const temp = numbers[startIdx];
        numbers[startIdx] = numbers[startIdx + 1];
        numbers[startIdx + 1] = temp;
      }

      ++startIdx;
    }
  }

  return numbers.map(number => number.toString()).join('');
}
```

`테스트 케이스 11`에서 실패하였고 `테스트 케이스  1, 2, 3, 5, 6`에서 `시간 초과`가 되었다

