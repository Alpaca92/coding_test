### [올바른 괄호](https://programmers.co.kr/learn/courses/30/lessons/12909)

```js
function solution(s) {
  if (!s.match(/\(/g)) return false;

  return !s.split("").reduce((acc, cur) => {
    if (cur === "(") {
      ++acc;
    } else {
      acc -= acc ? 1 : 0;
    }

    return acc;
  }, 0)
    ? true
    : false;
}
```

처음에는 굉장히 쉽다고 생각했는데 `s가 짝수`라는 조건이 없어 위의 반례는 굉장히 많았다

하지만 홀수면 무조건 `false`이므로 그 조건을 추가하여 통과하였다