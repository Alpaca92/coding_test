### [삼총사](https://school.programmers.co.kr/learn/courses/30/lessons/131705)

처음으로 든 생각은 combination을 활용하는 방법이다

```js
function getCombination(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, arr) => {
    const new_arr = arr.slice(index + 1);
    const combination = func(new_arr, selectNumber - 1);

    const attached = combination.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}
```

구글링을해서 얻은 combination에 대한 코드다

이를 활용해 답을 도출했는데 좀 더 깔끔한 combination 코드를 활용한 답안이 있었다

```js
function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}
```

