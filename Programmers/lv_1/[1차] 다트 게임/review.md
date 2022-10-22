### [[1차] 다트 게임](https://school.programmers.co.kr/learn/courses/30/lessons/17682)

```js
function solution(dartResult) {
  const scoreArr = dartResult
    .split(/[^0-9]+/g)
    .filter((score) => score !== "")
    .map((score) => parseInt(score));

  dartResult
    .split(/[^SDT]+/g)
    .filter((bonus) => bonus !== "")
    .map((bonus, idx) => {
      if (bonus === "D") {
        return (scoreArr[idx] = Math.pow(scoreArr[idx], 2));
      } else if (bonus === "T") {
        return (scoreArr[idx] = Math.pow(scoreArr[idx], 3));
      }
    });

  const optionArr = dartResult.split(/\d+\w/g);
  optionArr.shift();

  for (let i = 0; i < optionArr.length; i++) {
    if (optionArr[i] === "*" && i === 0) scoreArr[i] *= 2;

    if (optionArr[i] === "*" && i > 0) {
      scoreArr[i] *= 2;
      scoreArr[i - 1] *= 2;
    } else if (optionArr[i] === "#") scoreArr[i] *= -1;
  }

  return scoreArr.reduce((acc, cur) => acc + cur, 0);
}
```

위와 같은 풀이로 풀었고 새로 풀어보고자 했다

여태 극단적으로 for loop를 사용하지 않으려고 노력했는데 이제는 그렇게까지는 하지 않고자 하고있다

각자의 역할이 있는거고 그 역할에 충실하고 가장 걸맞는게 for loop라면 이를 사용해도 된다고 생각된다

그래도 이번엔 좀 더 정규표현식을 많이 사용해보고자 했는데 다른 사람의 풀이를 보면서 match에 대한 좀 더 큰 고찰을 할 수 있게 됐다

```js
"1S".match(/(^\d{1,})(S|D|T)(\*|#)?/);
// ['1S', '1', 'S', undefined, index: 0, input: '1S', groups: undefined]

"1S".match(/(^\d{1,})(S|D|T)(\*|#)?/g);
// ['1S']
```

위처럼 `g flag`의 유무에 따라 결과값이 달라진다

> An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
>
> - If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included.
> - If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, match() will return the same result as RegExp.prototype.exec() (an array with some extra properties).

이를 활용하여 forEach 내에서 중복되게 사용된 match를 한번으로 줄일 수 있다

```js
function solution(dartResult) {
  const scores = [];
  const areas = {
    S: 1,
    D: 2,
    T: 3,
  };
  const prizes = {
    "*": 2,
    "#": -1,
    non: 1,
  };
  const regex = /\d{1,2}\w[\*|#]?/g;

  dartResult.match(regex).forEach((dart, i) => {
    const [origin, score, area, prize, ...rest] = dart.match(/(^\d{1,})(S|D|T)(\*|#)?/);

    if (i !== 0 && prize === "*") scores[scores.length - 1] = scores.at(-1) * 2;
    scores.push((+score) ** areas[area] * prizes[prize ?? 'non']);
  });

  return scores.reduce((prev, cur) => prev + cur, 0);
}
```
