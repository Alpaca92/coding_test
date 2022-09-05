### [로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484)

`filter`함수를 좀 더 적극적으로 썼으면 좋았을 것 같음

순위를 표현하는 방식이 `switch문`밖에 떠오르지 않아 `map`으로 순회하였는데 더 좋은 방법을 찾아볼 필요성이 있음
`7 - num`으로 하드코딩하였기 때문에 최대 당첨 숫자가 6이 아니라면 수정을 하여야 하기 때문
```js
return win_nums.length - num + 1
```
위와 같이 알아서 대응할 수 있도록 하는 것이 더 좋았을 것 같음

\+ [22.09.05]

회사 팀원들과 같이 스터디하면서 다시 풀기로 했음

```js
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
```

때로는 `rank`와 같이 랭킹표를 만드는 것이 보다 효과적일 수 있다는 것을 깨달았다