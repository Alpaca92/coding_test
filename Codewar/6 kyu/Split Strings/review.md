### [Split Strings](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript)

```js
/*
pseudo code

string의 length를 구한다
for i = 0; i < str.length; i += 2
result.push(slice (i, i + 2))

if (length % 2) result[result.length - 1] += "_"
*/
```

내 코드도 깔끔하다고 생각했는데 다른사람 코드를 보니 `match()`와 `regex`를 사용하면 좀 더 깔끔한 코드가 될 것 같다고 생각이 들었다

`str + "_"`와 `/.{2}/g`로 좀 더 깔끔해지니 다음에 비슷한 상황이오면 좀 더 고심해봐야겠다
