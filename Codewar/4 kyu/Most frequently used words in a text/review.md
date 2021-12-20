### [Most frequently used words in a text](https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript)

```js
/*
pseudo code

1. text.toLowerCase()로 소문자로 만든다(대소문자를 구분하지 않음)
2. \n, #, ! 등 ("'", " ") 두가지를 제외하고는 모두 띄어쓰기로 대체하고 (".")은 없앤다
3. arr = text.split(' ')으로 단어들을 쪼갠다
4. arr를 for문으로 돌려
  4-1. 만약 obj에 해당 단어가 없다면 : obj.해당단어 = match().length로 key-value를 만들어줌
  4-2. 만약 obj에 해당 단어가 있다면 넘어감
5. 다 끝나면 배열을 내림차순으로 정렬하고 상위 3개의 key값을 배열에 담아 return 한다 (Object.keys(arr).slice(0, 3)) => 빈배열이면 알아서 []로 return 해줌
  */
```

```js
function topThreeWords(text) {
  let obj = {};
  const textArr = text
    .toLowerCase()
    .replace(/[^a-z ']/g, " ")
    .split(" ")
    .filter((word) => word);
  text = textArr.join(" ");

  if (text === "'") return [];

  textArr.forEach((word) => {
    if (!obj[word]) {
      const regex = new RegExp(word, "g");
      obj[word] = text.match(regex).length;
    }
  });

  obj = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  return Object.keys(obj).slice(0, 3);
}
```

처음에는 마지막 케이스에서 통과하지 못했다

`'this is andrew's android phone. an ···'`과 같은 문장이 있다고 하면 `an`을 찾을 때 1개가 아니라 `["andrew's", "android", "an"]`이렇게 3개와 매칭되는 문제 때문이였다

결국 그 부분을 해결하지 못하여 해당 부분을 `regex`를 쓰는 대신 `filter`를 사용하여 문제를 해결하였다

역시 다른 사람들은 `regex`를 적극 활용하는 모습을 볼 수 있었다

```js
let topThreeWords = (text) => {
  let dict = new Map();
  text.replace(/[A-z']+(?=[ ]+|$)/g, (match) => {
    let word = match.toLowerCase();
    dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
  });
  dict.delete("'");
  return [...dict]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, 3);
};
```

먼저 정규표현식 `[A-z']+(?=[ ]+|$)`을 이해해보자면

1. `[A-z']` : `모든 알파벳(소문자, 대문자)`와 `'`을 찾음<br />
   **&rarr; 하지만 `Z`와 `a`사이에 `_`같은 것들도 있기 때문에 `[A-Za-z']`가 더 적합함**
2. `+` : `[A-z']`가 1개 이상이 반복됨을 의미
3. `(?=[ ]+|$)` : `?=`뒤에 있는 조건과 match되면 조건을 제외한 앞부분을 return 해줌<br />
   여기서는 `뒤에 띄어쓰기가 1개 이상 있는 것들`을 찾아 앞에 단어를 return 해줌<br />
   `|$` `|`은 `or`의 의미이기 때문에 위의 조건 혹은 string에서의 마지막 부분을 return 해줌

`replace`함수에 대해서도 2번째 args에 함수가 들어갈 때의 활용도가 굉장히 무궁무진하다는 것을 깨달았다
