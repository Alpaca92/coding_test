### [짝지어 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12973)

```js
function solution(s) {
  return "" ===
    [...s].reduce((acc, word) => {
      const LAST_INDEX = acc.length - 1;

      if (acc[LAST_INDEX] !== word) return acc + word;

      return acc.slice(0, LAST_INDEX);
    }, "")
    ? 1
    : 0;
}
```

처음에는 굉장히 별거 아니라고 생각했다

근데 효율성이 0이 나오면서 모든 케이스에서 시간초과가 발생하였다

문자열의 길이가 1,000,000이하의 자연수이기 때문에 10^6 * 10^6 = 10^12 즉 1조에 달하기 때문에 O(n^2)로는 풀수 없는 문제였다

```js
function solution(s) {
  const regex = /(\w)\1/g;

  while (s.match(regex)) {
    s = s.replace(regex, "");
  }

  return s === "" ? 1 : 0;
}
```

정규포현식을 사용했지만 replace와 match를 사용했기 때문인지 일반 테스트케이스에서도 시간초과가 발생하였다

```js
/*
pseudo code

1. 다음과 같으면 index를 2 더함
2. 안같으면 ""에 더함
*/
```

```js
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; ) {
    if (s[i] === s[i + 1]) {
      i += 2;
    } else {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
      ++i;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
```

다시 처음으로 돌아와 O(n)으로 풀 방법을 찾아보다가 굳이 삭제 하지 않아도 되는 부분들은 삭제 대신 건너뛰는 것을 선택하니 해결할 수 있었다
