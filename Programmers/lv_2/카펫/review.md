### [카펫](https://programmers.co.kr/learn/courses/30/lessons/42842)

```js
/*
pseudo code
제한사항 : b >= 8 && y >= 1, 따라서 최소 크기는 3x3임(w >= 3 && h >= 3)
b = 가로 * 세로 - y
y = (가로 - 2) * (세로 - 2)
==> w + h = (b + 4) / 2

1. h = 3으로 시작, w = 차이
2. return (w - 2)(h - 2) === y ? [w, h] : h++해서 1번으로 
*/
```

딱히 어려운 것은 없었어서 쉽게 풀었다
