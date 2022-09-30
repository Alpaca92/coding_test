### [제일 작은 수 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/12935)

```js
function solution(arr) {
    var answer = [];
    
    if (arr.length === 1) {
        return answer = [-1];
    }
    
    const idx = arr.indexOf(Math.min(...arr) );
    
    if (idx !== -1) {
        arr.splice(idx, 1)
        
        return answer = arr;
    }
}
```

이전에 풀었던 방식을 고치고 싶어서 다시 풀었다

```js
function solution(arr) {
  return arr.length > 1
    ? arr.filter((num, _, origin) => num !== Math.min(...origin))
    : [-1];
}
```

테스트 케이스 1번에서 5초정도 걸렸는데 이건 배열의 길이가 굉장히 긴 것이 아닐까하는 생각이 들었다

```js
function solution(arr) {
  if (arr.length === 1) return [-1];

  const minVal = Math.min(...arr);
  const minIndex = arr.indexOf(minVal);

  arr.splice(minIndex, 1);

  return arr;
}
```

이를 조금 개선해보면 테스트 케이스 1번에서 0.5초정도가 걸리는 `효율성 좋은` 코드를 짤 수 있었다

