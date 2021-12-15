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

그 다음으로는 obj에 각각의 알파벳의 갯수를 파악하고 str1의 각 알파벳의 갯수가 str2 이상이면 통과하도록 코드를 짜보려고 했는데 그보다 정규표현식을 이용하면 좀 더 빠르지 않을까하여 정규표현식으로 코드를 짜보았다

```js
function scramble(str1, str2) {
  for (let i = 97; i < 123; i++) {
    const regex = new RegExp(String.fromCharCode(i), "g");

    if (
      (str1.match(regex) ? str1.match(regex).length : 0) <
      (str2.match(regex) ? str2.match(regex).length : 0)
    )
      return false;
  }
  return true;
}
```

다른 사람의 정답 중에 가장 인상깊었던 것은

```js
function scramble(str1, str2) {
  var hashtab = [...new Array(256)].map((x) => 0);

  str2.split("").forEach((ele) => hashtab[ele.charCodeAt(0)]++);
  str1.split("").forEach((ele) => hashtab[ele.charCodeAt(0)]--);

  hashtab = hashtab.filter((x) => x > 0);

  return hashtab.length == 0;
}
```

위와 같이 한쪽은 더해주고 한쪽은 빼줘서 filtering한 array의 길이로 판단하는 것이다

간결하면서도 굉장히 가독성이 좋은 코드인 것 같다
