### [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)

```js
function duplicateCount(text) {
  let lowerCaseText = "";

  if (text.length) {
    lowerCaseText = text.map((char) => char.toLowerCase());
  } else {
    return 0;
  }

  const charactors = [...new Set([...lowerCaseText])];
  const result = [];

  for (const charactor of charactors) {
    const regex = new RegExp(charactor, "gi");

    result.push({ charactor, count: text.match(regex).length });
  }

  result.sort((a, b) => b.count - a.count);

  return result[0].count;
}
```

위 코드에 `TypeError: text.map is not a function`가 발생하여 디버깅을 해보았다
