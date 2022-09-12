### [시저 암호](https://school.programmers.co.kr/learn/courses/30/lessons/12926)

```js
const isLowerCase = (char) => (char === char.toLowerCase() ? true : false);

function solution(s, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arr = s.split("");
  const caesarCipher = arr.map((char) => {
    if (char === " ") {
      return " ";
    } else {
      const idx =
        ((isLowerCase(char)
          ? alphabet.indexOf(char)
          : alphabet.indexOf(char.toLowerCase())) +
          n) %
        26;

      return isLowerCase(char) ? alphabet[idx] : alphabet[idx].toUpperCase();
    }
  });

  return caesarCipher.join("");
}
```

예전의 풀었던 문제라서 다시 풀어보기로 했다

정규표현식으로 푼 사람이 되게 인상적이었다

```js
function caesar(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    var startCode = lowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
    return String.fromCharCode(
      ((c.charCodeAt(0) - startCode + n) % 26) + startCode
    );
  });
}
```

나도 정규표현식에 대해 공부를 계속해야 될 것 같다
