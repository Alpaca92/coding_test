### [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript)

```js
function isPangram(string) {
  if (string.match("/[a-z]/gi")) {
    const arr = [...new Set(...string.match("/[a-z]/gi"))];

    return arr.length === 26 ? true : false;
  }

  return false;
}
```

이렇게 했는데 `Set`에 대한 이해가 부족했다

`Set`이 받는 건 `iterable`이기 때문에 `arr`를 받아야 한다

그리고 `const arr = Array.from(new Set(...string.match('/[a-z]/gi')))`을 해도 되고

`Set`자체에 `size`가 있으므로

```js
const set = new Set(...string.match("/[a-z]/gi"));
return set.size === 26 ? true : false;
```

위와 같이 하는게 좀 더 메모리 등을 절약하는 방법인 것 같다
