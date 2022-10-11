### [2016년](https://school.programmers.co.kr/learn/courses/30/lessons/12901)

```js
function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const lastDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const totalDays =
    lastDays.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b;

  switch (totalDays % 7) {
    case 0:
      return "THU";
    case 1:
      return "FRI";
    case 2:
      return "SAT";
    case 3:
      return "SUN";
    case 4:
      return "MON";
    case 5:
      return "TUE";
    case 6:
      return "WED";
  }
}
```

예전에 스위치(switch)문으로 풀었던 풀이다
