### [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript)

```js
/*
pseudo code

알파벳을 utf-16 code로 다 전환함 -> map()
idx = 0부터 확인하여 1씩 증가하며 idx = length - 2까지 확인 (처음과 끝은 missing letter가 될 수 없음)
=> a, c, d, e, f, h 에서 a가 빠진 경우 c, d, e, f, h -> g
=> a, c, d, e, f, h 에서 h가 빠진 경우 a, c, d, e, f -> b 이기 때문에
빠진 값이 있다면 그 값이 missing letter임 -> 이 숫자를 String.fromCharCode()로 문자로 변환
*/
```
항상 하나의 알파벳만 없기 때문에 풀기 쉬웠던 것 같다
