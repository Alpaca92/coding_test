### [숫자 짝꿍](https://school.programmers.co.kr/learn/courses/30/lessons/131128)

```js
function solution(X, Y) {
  const numbers = [...new Set(X)].reduce((acc, digit) => {
    const regex = new RegExp(`${digit}`);
    if (regex.test(Y)) return [...acc, digit];
    return acc;
  }, []);

  return numbers.length ? numbers.sort((a, b) => b - a).join("") : "-1";
}
```

처음에 위와 같이 풀었는데 '짝꿍'에 대한 조건을 잘못 파악하였다

```js
function solution(X, Y) {
  const stack = [];

  [...X].forEach((char) => {
    const regex = new RegExp(char);

    if (regex.test(Y)) {
      Y = Y.replace(regex, "*");
      stack.push(char);
    }
  });

  if (stack.length === 0) return "-1";
  if (stack.filter((char) => +char).length === 0) return "0";
  return stack.sort((a, b) => b - a).join("");
}
```

위와 같은 풀이는 시간을 초과했다

