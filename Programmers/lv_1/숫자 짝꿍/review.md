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

그리고 다시 풀어서 해결했는데 `Array`함수와 `new Array` 생성자의 차이가 궁금해졌고 [참고1](https://262.ecma-international.org/5.1/#sec-15.4.1), [참고2](https://www.designcise.com/web/tutorial/are-there-any-differences-between-using-array-and-new-array-in-javascript)를 통해 동일하다는 것을 확인 하였다

```js
function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(""))]
    .filter((number) => {
      return Y.includes(number);
    })
    .sort((a, b) => b - a);

  if (!commonNumbers.length) return "-1";

  if (!Number(commonNumbers[0])) return "0";

  return commonNumbers
    .map((number) => {
      const Xcount = X.split("").reduce((count, Xnumber) => {
        if (Xnumber === number) return (count += 1);

        return count;
      }, 0);

      const Ycount = Y.split("").reduce((count, Ynumber) => {
        if (Ynumber === number) return (count += 1);

        return count;
      }, 0);

      return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount);
    })
    .join("");
}
```

추상화가 잘 되었다고 해서 봤는데 결국 나랑 비슷한 방식으로 접근한 풀이었다
