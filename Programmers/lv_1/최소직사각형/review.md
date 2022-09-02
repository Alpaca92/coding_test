### [최소직사각형](https://school.programmers.co.kr/learn/courses/30/lessons/86491)

```js
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
```

조금만 더 생각했으면 위와 같은 코드를 짤 수 있었을 텐데 깔끔하게 코드를 짜지 못해서 조금 아쉬웠다