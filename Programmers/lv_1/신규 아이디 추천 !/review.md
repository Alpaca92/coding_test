### [신규 아이디 추천](https://programmers.co.kr/learn/courses/30/lessons/72410)

```js
/*
pseudo code

전부 소문자로 바꿈
알파벳 소문자, 숫자, -, _, .을 제외한 모든 문자 제거
..이상 => .
처음 끝에 . => 제거
"" => "" + 'a'
length 16이상 => length 15로 자르고 끝이 .이면 제거
length 2 이하 => 마지막 문자를 연속으로 반복(길이가 3이 될때까지)
*/
```

처음으로 정규표현식을 써본 것 같아 조금 뿌듯했다

조금 아쉬운 부분이 있었는데

```js
.replace(/^\.|\.$/g, " ")
.trim();
```

위 부분에서 `replace(regex, newSubstr)`부분에서 `.replace(/^\.|\.$/g, "")`을 하게되면 `trim()`을 안해도 된다는 것이다

위와 같은 것을 알았다면

```js
.match(/[\w\d._-]/g)
.join("")
```

위와 같은 부분도 `.replace(/[^\w\d._-]/g, "")`으로 해결할 수 있었을 것 같다

추가로 `string`에서의 숫자를 숫자로 인식하는지 문자로 인식하는지가 궁금했는데

```js
"123".replace(/\d/g, ""); // ''
"123".replace(/\w/g, ""); // ''
```

확인 결과 quote로 둘러 싸이면 `string`으로도 인식하는 것 같다

~~(알다가도 모를 javascript의 세계)~~

그리고 빈 문자열은 `/^$/`로 확인할 수 있는 것 같다

\+[Oct 27, 2022]

```js
function solution(new_id) {
  // new_id === ""를 걸러 line 5부터의 에러를 미연에 방지
  if (!new_id) return "aaa";

  new_id = new_id
    .toLowerCase() // 1
    .match(/[\w\d._-]/g) // 2
    .join("")
    .replace(/(\.)\1+/g, ".") // 3
    .replace(/^\.|\.$/g, " ") // 4
    .trim();

  if (!new_id) {
    return "aaa";
  } else if (new_id.length <= 2) {
    while (new_id.length <= 2) {
      new_id = new_id + new_id[new_id.length - 1];
    }

    return new_id;
  } else if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);

    return new_id.endsWith(".") ? new_id.slice(0, 14) : new_id;
  }

  return new_id;
}
```

예전에 풀었던 문제로 다시 풀어보고자 한다

```js
function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .match(/[\.]|[-]|[_]|[\w]/g);

  if (id.length === 0) {
    return "aaa";
  } else if (id.length > 15) {
    id.splice(15);
    return id.join("").replace(/\.$/g, "");
  } else if (id.length <= 2) {
    const lastChar = id[id.length - 1];
    return [...id, lastChar, lastChar].slice(0, 3).join("");
  }
  return id.join("");
}
```

위 코드를 풀었는데 길이가 2이하인 경우에서나 길이가 16초과해서 잘라버렸을 때, 끝이 .으로 끝나는 경우가 있어서 문제가 발생했다

이를 해결하는 코드의 순서를 조금 변경해야 할 것 같다
