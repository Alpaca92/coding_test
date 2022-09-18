### [자연수 뒤집어 배열로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12932)

```js
function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
      arr.push(n%10);
      n = Math.floor(n/10);
  } while (n>0);

  return arr;
}
```

깔끔하게 수학적으로 풀어낸 방법이 있어서 눈에 띄었다