### [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

```js
/*
pseudo code

열린 괄호면 temp = [] 에 넣는다
닫힌 괄호면 temp의 가장 끝 괄호와 charCodeAt()으로 빼보고 1 or 2면 temp에 열린괄호(끝)를 지운다
아니면 return false;

s를 다 순회하고 마지막에 return ture;를 넣는다
*/
```

`temp[temp.length - 1] === undefined`가 되는 상황을 추가하여 오류를 잡고 해결하였다

다른 사람 풀이를 보면

```js
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};
```

`return !stack.length;`로 내가 구현한 코드의 `ternary operator`보다 간결하고 동적인 js의 특징을 잘 살린 것 같다
