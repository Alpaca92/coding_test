### [가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746)

```js
/*
psuedo code

가장 왼쪽에 있는 숫자 ex. 3000 => 3, 49819027 => 4를 기준으로 내림차순 정렬한다
```

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

이번엔 새로운 방식으로 해봤는데

```js
1. 뒤의 두 숫자를 선택해서 더 큰숫자를 만든다
2. 한칸 앞당긴다
  3-1. 1번을 진행한다
  3-2. 당길 수 없다면 반복문을 종료한다
4. 정렬된 배열을 합쳐서 string으로 return 한다
```

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

  return numbers.map((number) => number.toString()).join("");
}
```

딱히 진전이 있지는 않았다

\+ [12/21]

```js
1. 조건이 0이상 1000이하이므로 모두 4자리수로 변경함
  -> ex. [0, 10, 6, 66, 660] => [0000, 1010, 6666, 6666, 6606]
2. 이를 내림차순으로 정렬함
3. 원래 숫자로 되돌려 놓음
4. 다 합쳐서 string type으로 return
*/
```

```js
function solution(numbers) {
  return numbers
    .sort((a, b) => {
      const repeatA = a.toString().repeat(4).slice(0, 4);
      const repeatB = b.toString().repeat(4).slice(0, 4);

      return +repeatB - +repeatA;
    })
    .map((number) => number.toString())
    .join("");
}
```

아쉽게도 `test case 11`에서 실패를 하였다

찾아보니까

```js
// test case 11

const numbers = [0, 0, 0, 0, 0, 0];
```

위와 같이 0만 반복되는 배열인데, 이를 `string`으로 변환하면 `000000`이 return되어 실패하는 거였다

해당 부분만 걸러내니 통과할 수 있었다

```js
function solution(numbers) {
  const result = numbers
    .sort((a, b) => {
      const repeatA = a.toString().repeat(4).slice(0, 4);
      const repeatB = b.toString().repeat(4).slice(0, 4);

      return +repeatB - +repeatA;
    })
    .map((number) => number.toString())
    .join("");

  return +result === 0 ? "0" : result;
}
```

나도 나름 굉장히 간결하게 잘 짠 코드라고 생각했는데 우수 풀이를 보니 생각이 달라졌다

```js
function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
```

`map()`으로 해당 배열을 문자열로 바꿔주고

`sort()`를 할 때는 `* 1`을 해주어 다시 숫자로 바꾸어 연산을 해주었는데

`sort()`의 특성상 배열을 `combination`으로 순회해주는 특성을 이용하여

`ba`와 `ab`를 비교하여 내림차순으로 정렬하였다

이는 내가 맨 처음 시도한 아이디어와 매우 흡사한 방식인데 나는 생각을 코드로 옮기는 능력이 부족하다는 것을 다시 한 번 깨달았다