### [문자열 내림차순으로 배치하기](https://school.programmers.co.kr/learn/courses/30/lessons/12917)

```js
function solution(s) {
  const uppercases = s.match(/[A-Z]/g)
    ? s.match(/[A-Z]/g).sort().reverse()
    : [];
  const lowercases = s.match(/[a-z]/g)
    ? s.match(/[a-z]/g).sort().reverse()
    : [];

  return lowercases.concat(uppercases).join("");
}
```

예전에 풀었던 풀이인데 사실 이거보다 괜찮은 풀이를 생각해내지 못했다

`charCodeAt()`을 사용해서 sorting해볼 수 있지 않을까 했는데 어차피 기본적으로 소문자가 대문자보다 값이 크기때문에 잘라내서 다시 붙이는 작업이 필요할 것 같았다

근데 문제를 다시 읽어보니 '내림차순으로 정렬' 이어서 내가 생각한 방식과 딱 드러맞는다는 것을 깨달았다
