### [Roman Numerals Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript)

```js
/*
pseudo code

const symbols = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  4: "IV",
  5: "V",
  1: "I",
};

answer = "";
for ... in 으로 돌려서

while (true)
  if number - (+property) >= 0
    answer += obj[property]
  else
    break;

return answer;
*/
```

이렇게 코드를 짰더니 멋대로 `symbols`이 오름차순으로 정렬하여 `1`부터 시작하여 거의 무한루프에 가까운 상황이 발생했다

그래서 다시 `Map()`으로 짜고 `for ... of`로 해결하였다

stack overflow에서 위 현상에 대해 찾아보았는데 [How to prevent automatic sort of Object numeric property?](https://stackoverflow.com/questions/33351816/how-to-prevent-automatic-sort-of-object-numeric-property)에서 보면 알 수 있듯이

`obj`는 실제로 순서가 정해져있지 않다고하며 이를 해결하기 위해 `Map()`사용을 권장하고 있다
