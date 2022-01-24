### [구명보트](https://programmers.co.kr/learn/courses/30/lessons/42885)

```js
/*
pseudo code

0. let result = 0;
1. obj로 정리하면서 limit - 본인몸무게의 몸무게의 소유자가 있으면 둘을 같이 없애고 answer++을 한다
2. 없다면 그와 가장 가까운 몸무게의 소유자와 같이 없애고 answer++
3. 남아있는 자들은 모두 limit / 2보다 몸무게가 크면서 파트너가 없는 사람이므로 남아있는 사람의 수만큼 answer를 늘린다
*/
```

```js
function solution(people, limit) {
  people = people.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < people.length; ++i) {
    if (people[i] === undefined) continue;

    const rest = limit - people[i];
    delete people[i];
    const target = people.findIndex((weight) => weight <= rest);
    if (target !== -1) delete people[target];
    ++result;
  }
  return result;
}
```

모든 테스트케이스를 통과하였지만 효율성테스트는 하나도 통과하지 못했다

```js
function solution(people, limit) {
  let result = 0;
  people = people.sort((a, b) => b - a);

  while (people.length) {
    const rest = limit - people.shift();
    const targetIdx = people.findIndex((weight) => weight <= rest);
    if (targetIdx !== -1) people.splice(targetIdx, 1);

    ++result;
  }

  return result;
}
```

다른 방식도 마찬가지인 것 보니 `O(n^2)`을 넘어가면 실패하는 듯했다

```js
function solution(people, limit) {
  let result = 0;
  people = people.sort((a, b) => b - a);

  while (people.length) {
    const rest = limit - people.shift();

    if (rest >= people[people.length - 1]) people.pop();

    ++result;
  }

  return result;
}
```

정렬을 해놨다면 그저 맨앞과 맨뒤만을 확인하면 되므로 그렇게 해봤는데 이방식도 실패를 하였다

배열의 삭제없이 구현하니 통과할 수 있었다

