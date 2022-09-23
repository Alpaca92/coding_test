### [문자열 내 p와 y의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/12916)

```js
function solution(s){
  return s.match(/p/ig).length === s.match(/y/ig).length;
}
```

예전에는 위와 같이 풀었는데 지금은 런타임 에러가 발생한다

문제는 해결했지만 가장 인상깊었던 코드를 보면 좀 더 좋은 사고가 있지 않을까 늘 생각이 든다

```js
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
```