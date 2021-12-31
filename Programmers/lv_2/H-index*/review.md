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
