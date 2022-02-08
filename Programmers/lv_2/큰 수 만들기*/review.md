### [큰 수 만들기](https://programmers.co.kr/learn/courses/30/lessons/42883)

```js
function solution(number, k) {
  if ([...number].sort((a, b) => b - a).join("") === number)
    return number.slice(0, number.length - k);

  const numberArray = [...number];
  let removedNumber = null;

  while (k !== 0) {
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] < numberArray[i + 1]) {
        removedNumber = numberArray.splice(i, 1)[0];
        --k;

        break;
      }
    }

    if (removedNumber === null) {
      numberArray.pop();
      --k;
    }

    removedNumber = null;
  }

  return numberArray.join("");
}
```

위 코드에서 `test case 10`에서 시간초과로 통과하지 못했다

아무래도 반복문이 겹쳐있어 O(n^2)에 splice(or pop)까지 하여 O(n^3)이 되어 시간이 초과된 것 같다
