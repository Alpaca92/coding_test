### [RGB To Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript)

```js
/*
pseudo code

10 미만의 숫자는 앞에 0붙여주기
음수는 return '00'해주기
255이상의 숫자는 return 'ff'해주기
*/
```

```js
function rgb(r, g, b) {
  return [r, g, b]
    .map((number) => {
      if (number >= 255) {
        return "FF";
      } else if (number <= 0) {
        return "00";
      } else if (number < 10) {
        return `0${number.toString(16)}`;
      } else {
        return number.toString(16);
      }
    })
    .join("")
    .toUpperCase();
}
```

처음에는 `10 미만의 숫자`에 `0`을 붙여줬는데 16진수이기 때문에 `16 미만의 숫자`에 붙여줘야된다는 것을 깨닫고 `number < 16`으로 조건을 변경해줬다
