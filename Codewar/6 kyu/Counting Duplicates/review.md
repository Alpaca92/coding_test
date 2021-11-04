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

위 코드에 `TypeError: text.map is not a function`가 발생하여 확인해 봤는데 마음만 앞서서 `str`에 바로 `map()`을 사용한 것이 원인이였다

그래서 `split()`으로 분해해주고 나중에 다시 `join()`으로 합쳐줬다

이래서 `pseudo code`를 습관화해야되는 것 같다 이러한 간단한 실수를 미연에 방지하기 위해서라도 말이다

다른 사람 풀이를 보니 역시 고인물(?)의 풀이는 깔끔하고 좋았다

```js
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
```

처음에 코딩을 배울땐 '정규표현식? 그런거 왜 필요한지 잘 모르겠는데?'라고 생각했었는데 이런 풀이를 볼때마다 정규표현식의 필요성을 뼈저리게 느낀다

해당 정규표현식이 이해하기 어려웠는데 `/([\w])\1+/g`와 같다고 생각하면 되고 flag도 `toLowerCase()`를 빼고 `gi`를 넣으면 될 것 같다
