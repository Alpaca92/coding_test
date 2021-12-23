### [Josephus Permutation](https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript)

```js
/*
pseudo code

const result = [];

1. start idx = k - 1
2. idx에 +k를 하여 해당 element를 없애고 result에 넣는다 (delete)
-> delete이 아니라 splice로 삭제해야 함
3. idx에 해당하는 element가 undefined이면 ++idx를 하고 2번으로 간다 (idx % items.length)

breaking point : items.filter(item => item !== undefined).length
-> splice로 삭제하니까 items.length로 하면 됨
*/
```

```js
function josephus(items, k) {
  if (!items.length) return [];

  const result = [];
  let idx = k - 1;

  while (items.length) {
    if (items[idx]) {
      result.push(items[idx]);
      items.splice(idx, 1);
      idx = (idx + k - 1) % items.length;
    }
  }

  return result;
}
```

위와 같은 코드를 짰는데 `Execution Timed Out (12000 ms)`시간초과를 했다

`if statement`를 삭제하고 실행을 해보니 `items.length === 1`인 조건부터 다양한 조건에서 실패하였다

이 실패문들을 하나하나 분석해보면서 새로운 코드를 짰다

```js
function josephus(items, k) {
  if (!items.length) return [];

  const result = [];
  let idx = (k - 1) % items.length;

  while (items.length) {
    result.push(items[idx]);
    items.splice(idx, 1);
    idx = (idx + k - 1) % items.length;
  }

  return result;
}
```

`test case`중에 `[true, false, false, true]`같은 케이스가 있어서 `if statement`를 제거하였다

코드 구조상 `items[idx]`는 항상 존재하기 때문에 제거해도 크게 달라질 것은 없다고 판단하였다

그리고 `idx = (k - 1) % items.length`로 변경해 주었다

처음 주어지는 `k`가 `items.length`를 넘지 말라는 조건이 없기 때문이었다

두가지를 수정하고 통과할 수 있었는데 `splice()`가 삭제된 `element`를 반환한다는 것을 이용한 풀이가 인상깊었다

```js
function josephus(items, k) {
  var result = [],
    index = 0;
  while (items.length > 0) {
    index = (index + k - 1) % items.length;
    result = result.concat(items.splice(index, 1));
  }
  return result;
}
```

나와 풀이가 거의 유사한데 결국 `idx = (idx + k - 1) % items.length`도 반복인 것을 이용한 좀 더 깔끔한 풀이였다
