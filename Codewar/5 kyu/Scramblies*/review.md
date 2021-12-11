### [Scramblies](https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript)

```js
/*
pseudo code

str1에서 str2[i]을 찾아본다 (i =0, ++)
  있으면 이를 빼고 str1을 재조합한다 ex. 'rkqodlw' => 'rkqodl'
  처음으로 돌아간다

  없으면 return false;
*/
```

처음에는 `reduce()`로 짜볼까 하여

```js
function scramble(str1, str2) {
  return (
    str2 ===
    [...str2].reduce((prev, cur) => {
      if (str1.indexOf(cur) !== -1) {
        str1 =
          str1.slice(0, str1.indexOf(cur)) + str1.slice(str1.indexOf(cur) + 1);

        return (prev += cur);
      }
    }, "")
  );
}
```
위와 같은 코드를 짰는데 `Execution Timed Out (12000 ms)`으로 실패하였다

그래서 하나라도 없으면 바로 `false`가 나오도록 코드를 짜봤는데

```js
function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return false;
    } else {
      str1 =
        str1.slice(0, str1.indexOf(str2[i])) +
        str1.slice(str1.indexOf(str2[i]) + 1);
    }
  }

  return true;
}
```

그래도 동일하게 `Execution Timed Out (12000 ms)`으로 실패하였다

그 다음으로는 obj에 각각의 알파벳의 갯수를 파악하고 str1의 각 알파벳의 갯수가 str2 이상이면 통과하도록 코드를 짜봤다