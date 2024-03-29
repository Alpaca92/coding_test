### [문자열 내 마음대로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12915)

처음에는 `idx = n`부터 쭉 정렬을 해보았다

```js
strings.sort((a,b) => a[n].charCodeAt() - b[n].charCodeAt());

do {
  n++;

  strings.sort((a, b) => {
    if (a.slice(0, n) === b.slice(0, n) {
      return (a[n].charCodeAt() - b[n].charCodeAt());
    })
  })
} while (/*some condition */)
```

문득 `...같을 시 사전 순으로 정렬`이라는 조건이 눈에 띄었고 그럼 처음부터 한번 정렬을 하고 시작하면 되지 않을까하여 방식을 바꿔보았다

하지만 이 방식보다 `sort()`와 `localCompare()`를 잘 활용하면 좀 더 깔끔한 코드가 되지 않을까 싶다

\+ [Oct 10, 2022]

```js
function solution(strings, n) {
  if (strings.length === 1) return strings;

  strings.sort();
  return strings.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}
```

예전 풀이보다 좀 더 깔끔한 풀이를 찾아보도록 했다

```js
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
```

위 풀이가 내 풀이보다 좀 더 깔끔한 것 같다
