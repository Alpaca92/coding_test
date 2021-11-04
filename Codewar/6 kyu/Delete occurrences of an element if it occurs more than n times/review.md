### [Delete occurrences of an element if it occurs more than n times](https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript)

아직은 `key`의 존재여부를 확인할 때 `hasOwnProperty()`를 사용하려다가 구글링 후 `key in obj`로 변경하는 등 시행착오가 있지만

이제 조금은 `obj`, `arr`를 사용하는 것에 익숙해진 것 같다

하지만 아직

```js
const obj = {};

obj[1] = 2; // obj { 1: 2};
obj['2'] = 'some string'; // obj { 1: 2, 2: 'some string;}
```
과 같이 숫자를 `[]`에 넣으면 알아서 `string`으로 변환되는 것을 모르고 `templete literal`을 쓰는 등 미숙한 점이 많았다

이에 대한 가장 우수한 풀이가
```js
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
```
이었다고 생각한다

아직 나는 `filter`에 대한 이해도가 부족한데 `return`에 `bool`값을 줘서 하는 방식을 고안할 필요가 있다고 생각한다