### [H-index](https://programmers.co.kr/learn/courses/30/lessons/42747)

```js
/*
pseudo code

논문 n편 중 h번 이상 인용된 논문이 h편 이상이고
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 h-index

1. 배열을 정렬한다
2. set으로 중복값을 없앤 배열을 하나 더 만든다
3. 2번에서 만든 배열의 가장 큰 값을 선택한다
4-1. 3번의 값 =< citations.length - 3번값의(findindex로 찾음) idx
     return 3번의 값
4-2. 3번의 값 > citations.length - 3번값의 idx
     3번으로 돌아가 바로 아랫값을 선택한다
*/
```

```js
function solution(citations) {
  const table = {};

  citations.forEach((citation) => {
    if (table[citation] === undefined) {
      table[citation] = 1;
    } else {
      ++table[citation];
    }
  });

  const keys = Object.keys(table).reverse();
  const values = Object.values(table).reverse();

  for (const i in keys) {
    if (
      +keys[i] <= values.slice(0, +i + 1).reduce((prev, cur) => prev + cur, 0)
    )
      return +keys[i];
  }
}
```

`test case 11, 16`빼고 전부다 실패하였다

```js
function solution(citations) {
  const citationsMap = new Map();

  citations
    .sort((a, b) => b - a)
    .forEach((citation) => {
      if (!citationsMap.has(citation)) {
        citationsMap.set(citation, 1);
      } else {
        citationsMap.set(citation, citationsMap.get(citation) + 1);
      }
    });

  let acc = 0;

  for (const [key, value] of citationsMap) {
    acc += value;

    if (key <= acc) return key;
  }
}
```

`Map`으로 바꿔서 좀 더 깔끔하게 코드를 정리해 보았다 _[출처](https://hackinbits.com/articles/how-to-iterate-a-map-in-javascript---map-part-2)_

그래도 아직도 `test case 11, 16`이외에는 통과하지 못했다

문제를 잘못이해한 것인지 다시 한번 확인해봐야겠다

\+ [01/03]

`test case`를 찾아보던 중에 `{ input: [9, 9, 9, 12], answer: 4 }`의 경우를 발견하였다

현재에는 위와 같은 `input`에는 `undefined`를 반환하게 되어있어서 이를 수정하기로 하였다

그래서 최하단에 `return acc`를 추가하자 `test case 9`도 통과를 하였지만 역시나 나머지는 통과하지 못했다

```js
const data = [
  { input: [9, 9, 9, 12], answer: 4 },
  { input: [9, 7, 6, 2, 1], answer: 3 },
  { input: [1, 1, 5, 7, 6], answer: 3 },
];
```

위와 같은 케이스들을 내가 다 간과하고 있었다

두번째, 세번째 케이스에 대한 내용만 수정하면 통과할 수 있을듯하여 수정하기 위해 다시 `pseudo code`를 짰다

```js
/*
pseudo code

1. table을 만든다
2. table의 끝에서부터 for문을 돌린다
  3-1. 해당 value값이 key값보다 크거나 같다면 return 한다
  3-2. 해당 value값이 key값보다 작다면 Object.values(i ~ end)까지 더한 값보다 큰 key(first ~ i - 1)값이 있는지 찾아본다
    4-1. 없으면 더한값을 return
    4-2. 있다면 --i를 하고 다시 for문 처음으로 돌아간다
*/
```
위와 같이 코드를 짜서 통과할 수 있었다

그리고 역시나 다른 사람 코드를 보면서 간결성에 또 다시 감탄을 하였다

```js
function solution(citations) {
  let i = 0;

  while (i + 1 <= citations.sort((a, b) => b - a)[i]) i++;

  return i;
}
```

수학적인 능력이 정말 많이 필요한 것이 코딩인 것 같다