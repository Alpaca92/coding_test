### [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

```js
/*
pseudo code

result = "";

strs[0].length 만큼 루프를 돌림
strs[0][0] === strs[1][0], [2][0], ...을 for로 돌림
다 같으면 result += strs[0][0]

else return result;
*/
```

나는 거의 대부분의 것들이 big O notation에서 `O(n ** 2)`정도 수준에서 문제를 해결하고 있다

다른 사람의 풀이를 보면

```js
var longestCommonPrefix = function (strs) {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
```

`reduce()`를 굉장히 경이롭게 사용하는데 `reduce()`에서 return된 것이 다시 `prev`가 된다는 점을 잘 활용한 것 같다

`every()`를 이용하는 방법도 있었는데 이 방법 또한 흥미로웠다
