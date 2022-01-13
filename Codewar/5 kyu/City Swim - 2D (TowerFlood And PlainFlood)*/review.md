### [City Swim - 2D (TowerFlood And PlainFlood)](https://www.codewars.com/kata/58e77c88fd2d893a77000102/train/javascript)

```js
/*
pseudo code

0. towers.length > index : 반복조건
1. elem 선택(index = 0으로 시작)
  2-1. 1번에서 선택된 숫자가 다음 숫자보다 큰가? ==> 고점 배열에 저장 []
       고점이 1개인가 ? ==> 1번으로
       고점이 2개인가 ? ==> 3번으로
  2-2. 고점이 0개 ? ==> continue;
       고점이 1개 ? ==> 저점 배열에 저장 [] 후 1번으로
  (고점이 2개인 경우)
  3. 두 고점 중에 더 작은 고점을 선택한다
  4. 선택된 고점과 각각의 저점들의 차이를 보관한다
  5. 두 고점 중 앞에 있는 고점을 삭제하고 1번으로 돌아간다 
*/
```

```js
function rainVolume(towers) {
  let result = 0;

  towers.reduce((prev, cur, i) => {
    if (
      cur > towers[i + 1] ||
      (i === towers.length - 1 && cur > towers[i - 1])
    ) {
      prev.high = prev.high ? [...prev.high, cur] : [cur];

      if (prev.high.length === 2) {
        const min = Math.min(...prev.high);
        prev.low.map((num) => (result += min - num));
        prev.high.shift;
      }
    } else {
      if (prev.high) prev.low = prev.low ? [...prev.low, cur] : [cur];
    }

    return prev;
  }, {});

  return result;
}
```

위와 같이 코드를 짰는데 `[1,0,5,2,6,3,10]`, `[15,0,6,10,11,2,5]`에서 실패를 했다

단순한 오타가 있었고 `low`를 비워주지 않았다

```js
/* inside reduce */

// before
if (prev.high.length === 2) {
  const min = Math.min(...prev.high);
  prev.low.map((num) => (result += min - num));
  prev.high.shift;
}

// after

if (prev.high.length === 2) {
  const min = Math.min(...prev.high);
  prev.low.map((num) => (result += min - num));
  prev.high.shift();
  prev.low = [];
}
```

하지만 아래와 같이 통과하지 못했고 보완할 부분들이 많았다

> **_ERROR_** <br /> > `Randomly generated test cases for rainVolume function:` <br />
> 100 small random tests (10 <= number of towers < 30, 0 <= heights < 50) <br />
> 100 medium random tests (100 <= number of towers < 200, 0 <= heights < 50) <br />
> 100 medium, tall towers random tests (100 <= number of towers < 200, 0 <= heights < 5000) <br />
> 100 big random tests (10000 <= number of towers < 15000, 0 <= heights < 50000)

예를 들어 `[7, 6, 5, 4, 3, 2, 1]` 같은 배열에서는 고점이 바로 `[7, 6]`으로 등록되지만 저점은 하나도 존재하지 않는다

처음부터 끝까지 끊임없이 낮아지는 배열이라면 결국 `return 0`인 것이다

```js
/*
1. start index 찾기
다음 숫자보다 크고, rebound가 없으면 됨
(만약 start index가 있으면 변경하지 않음)

2. rebound 찾기
start index가 있으면서 다음 숫자보다 작은 숫자가 있다면 rebound = true

3. end index 찾기
rebound를 지나서 처음으로 다음 숫자보다 큰 지점
*/
```

```js
function rainVolume(towers) {
  let result = 0;

  towers.reduce((prev, cur, i, origin) => {
    if (cur > origin[i + 1] && prev.rebound === undefined) {
      prev.start = prev.start ? prev.start : i;
    } else if (prev.start !== undefined && cur < origin[i + 1]) {
      prev.rebound = true;
    } else if (prev.rebound === true && cur > origin[i + 1]) {
      prev.end = i;
      const min = Math.min(origin[prev.start], origin[prev.end]);
      origin
        .slice(prev.start + 1, prev.end)
        .map((height) => (result += min - height));
      prev.start = prev.end;
      delete prev.rebound;
      delete prev.end;
    }

    return prev;
  }, {});
}
```

위와 같이 코드를 짰지만 하나도 통과하지 못했다

\+ [01/06]

```js
/*
pseudo code

0. let result = 0;
1. 해당 숫자가 앞, 뒤와 비교해 봤을 때 크거나 같은가 ?
앞, 혹은 뒤가 undefined 이면(처음과 끝의 숫자면) 그 부분의 조건은 충족한 것으로 본다
  n: 넘어간다
  y: index를 arr에 저장한다
    arr.length === 2이면
    두 index의 차이가 1인가?
      y: arr.shift()
      n: 두 index에 해당하는 값 중 작은 값을 min에 넣고
        towers.slice(앞 index + 1, 뒤 index).map(height => result += min - height);
        arr.shift()
*/
```

```js
function rainVolume(towers) {
  let result = 0;

  towers.reduce((prev, cur, i, origin) => {
    if (
      cur >= (origin[i - 1] !== undefined ? origin[i - 1] : 0) &&
      cur >= (origin[i + 1] !== undefined ? origin[i + 1] : 0)
    ) {
      prev.push(i);

      if (prev.length === 2) {
        if (prev[1] - prev[0] !== 1) {
          const min =
            origin[prev[0]] <= origin[prev[1]]
              ? origin[prev[0]]
              : origin[prev[1]];

          origin
            .slice(prev[0] + 1, prev[1])
            .map((height) => (result += min - height));
        }

        prev.shift();
      }
    }

    return prev;
  }, []);

  return result;
}
```

하지만 또 실패하였다

\+ [01/08]

```js
/*
pseudo code

1. towers에서 가장 큰 값을 찾는다
2. 1번의 값과 같거나 혹은 앞, 뒤와 비교했을 때 크다면 arr에 넣는다
   (단 undefined라면 0으로 치환한다)
3. arr.length === 2라면 사이에 있는 건물의 높이랑 arr안에 있는 건물 중 낮은 높이의 건물과의 차이를 더한다
*/
```

```js
function rainVolume(towers) {
  let result = 0;
  const max = Math.max(...towers);

  towers.reduce((prev, cur, i, origin) => {
    if (
      cur === max ||
      (cur > (origin[i - 1] ? origin[i - 1] : 0) &&
        cur > (origin[i + 1] ? origin[i + 1] : 0))
    ) {
      prev.push(i);

      if (prev.length === 2) {
        const min = Math.min(origin[prev[0]], origin[prev[1]]);

        origin
          .slice(prev[0] + 1, prev[1])
          .map((height) => (result += min - height));
        prev.shift();
      }
    }
    return prev;
  }, []);

  return result;
}
```

위와 같은 코드도 통과하지 못했다

위 코드의 반례로 `[3, 0, 4, 5, 6]`가 존재했다

\+ [01/13]

```js
/*
pseudo code

1. 현재 숫자가 다음 숫자보다 크거나 같은가 ? (다음 숫자가 없어 undefined면 y로 간주한다)
  n: pass
  y:  2. arr에 넣는다
      3. arr.length === 2 ?
        n: pass
        y:  4. arr안의 값중에 작은 값(min)을 찾는다
            5. arr안에 있는 값들 사이의 값을 heights라는 배열로 만든다
            6. heights.forEach => min - height > 0 ?
              n: pass
              y:  7. 차이 값들을 더해 누적시킨다
            8. 다 끝나면 arr.shift()로 앞의 값을 삭제한 후 1번으로 돌아간다
9. 모든 반복이 끝나면 누적시킨 값을 return한다
*/
```

```js
function rainVolume(towers) {
  return towers.reduce(
    (acc, cur, i, origin) => {
      if (cur >= origin[i + 1] || origin[i + 1] === undefined) {
        acc.max.push(i);

        if (acc.max.length === 2) {
          const min = Math.min(origin[acc.max[0]], origin[acc.max[1]]);
          const heights = origin.slice(acc.max[0] + 1, acc.max[1]);

          heights.forEach(
            (height) => (acc.result += min - height > 0 ? min - height : 0)
          );
          acc.max.shift();
        }
      }

      return acc;
    },
    { result: 0, max: [] }
  ).result;
}
```
