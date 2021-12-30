### [위장](https://programmers.co.kr/learn/courses/30/lessons/42578)

```js
/*
pseudo code

ex. const sortClothes = {
      'headgear': [yellowhat, green_turban],
      'eyewear': [bluesunglasses],
      'face': [crowmask, smoky_makeup], 
}

1. 빈 obj를 만든다 const classifyClothes = {};
2. clothes의 원소를 하나 꺼내 두번째 항목이 obj에 들어있느지 확인한다
  2-1. 있다면 sortClothes[두번째 항목].push(첫번째 항목)
  2-2. 없다면 sortClothes[두번째 항목] = [첫번째 항목]

idea. 조합문제인 것 같다

[3C1개의 조합]1가지 일 때 : 2C1 + 1C1 + 2C1
[3C2개의 조합]2가지 일 때 : (2C1 * 1C1) + (2C1 * 2C1) + (1C1 * 2C1)
[3C3개의 조합]3가지 일 때 : 2C1 * 1C1 * 2C1

classify는 숫자로만 표현해도 충분함

1. classify를 만들고 각 부위별 갯수를 파악한다
2. 조합식으로 부위가 1개일때 부터 갖고있는 모든 부위를 착용하는 것까지의 combination을 구한다
3. 해당 combination안에 있는 각 부위들의 구비갯수를 곱한다
*/
```

```js
function solution(clothes) {
  const classify = {};

  clothes.forEach((cloth) => {
    if (!classify[cloth[1]]) {
      classify[cloth[1]] = 1;
    } else if (classify[cloth[1]]) {
      ++classify[cloth[1]];
    }
  });

  const getCombination = (arr, select) => {
    const result = [];
    if (select === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombination(rest, --select);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      result.push(...attached);
    });

    return result;
  };

  const keys = Object.keys(classify);
  let result = 0;

  for (let i = 1; i <= keys.length; i++) {
    result += getCombination(keys, 1).reduce((prev, cur) => {
      let acc = 1;
      cur.forEach((el) => (acc *= classify[el]));

      return prev + acc;
    }, 0);
  }

  return result;
}
```

`test case 1`에서 통과하지 못했다

단순한 오타였고 `for loop`안에 `getCombination(keys, 1)` &rarr; `getCombination(keys, i)`로 바꾸고 해결되었다

하지만 `submit`할 때에는 `case 1`에서 시간초과를 하였고, 나머지에서도 성능이 그다지 좋지 못한듯했다

\+ [12/30]

```js
function solution(clothes) {
  const classify = {};

  for (const [name, type] of clothes) {
    if (classify[type] === undefined) {
      classify[type] = 1;
    } else {
      ++classify[type];
    }
  }

  const getCombinations = (arr, select) => {
    const result = [];
    if (select === 1) return arr;

    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(++idx);
      const combinations = getCombinations(rest, --select);
      const attached = combinations.map((combination) => fixed * combination);

      result.push(...attached);
    });

    return result;
  };

  let result = 0;
  const clothNames = Object.values(classify);

  for (let i = 1; i <= clothNames.length; i++) {
    result += getCombinations(clothNames, i).reduce(
      (prev, cur) => prev + cur,
      0
    );
  }

  return result;
}
```

조금 개선은 되었지만 그래도 지금도 `case 1`에서는 시간초과를 하였다

나머지 `case`들에 대해서는 많이 시간절약이 되었는데 `case 1`의 `clothes.length`가 굉장히 크다는 것을 짐작할 수 있었다

위 함수의 `big O notation`은

1. 첫 `for loop`에서 `n`
2. 재귀함수 부분에서 `n ** select`

따라서 `clothes`에서 `type`의 종류가 많아질 수록 `clothNames`가 커져 기하급수적으로 시간이 늘어나는 것을 알 수 있다

`type`별로 위장복의 갯수를 정리하면 쉽게 풀리는 문제였다

해당 `type`의 갯수에 `+1`을 해주어 안입었을 때의 경우의 수를 추가해 준 후

모두 곱하고 마지막에 아무것도 안입었을 경우의 수를 빼주면(`-1`) 되는 것이였다 _[출처](https://velog.io/@fastpace04/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-%EC%9C%84%EC%9E%A5)_

이해하고나니 어이없을 정도로 쉬운 문제였던 것 같다

알고리즘 문제는 코딩능력보다 이해능력과 수학능력이 더 중요한 것 같다

이해능력과 수학능력으로 문제를 수학적으로 계산하고 그 계산식을 단순히 코드로 옮겨적는다는 느낌이 강하게 드는 만큼

수학능력을 좀 더 기르는 방법을 모색해야겠다