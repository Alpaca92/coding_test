### [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

```js
/*
pseudo code

const symbols = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

arr = [...s];
result = 0;

while(arr.length)
symbols[arr[0] + arr[0 + 1]] ? 앞에 두개를 지우고 result + symbols[arr[0] + arr[0 + 1]]
없으면 앞에 한개 지우고 result + symbols[arr[0]]

return result;
*/
```

위와 같이 생각하고 접근했는데 다른 사람 풀이를 보던 와중에 정말 수학적 사고가 중요하다는 것을 또 한번 깨달았다

```js
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
```

이렇게 뒷 녀석이 앞에보다 큰 값이라면 값을 빼주고 아니면 값을 더해주는 식의 발상이다

이러한 발상으로 저번에 풀지 못했던 `codewar: Roman Numerals Encoder*`를 풀어봐야겠다
