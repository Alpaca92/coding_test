### [같은 숫자는 싫어](https://school.programmers.co.kr/learn/courses/30/lessons/12906)

```js
function solution(arr) {
  return arr.filter((val, index, origin) => val !== origin[index + 1]);
}
```

위 풀이가 가장 깔끔한 것 같다

