### [큰 수 만들기](https://programmers.co.kr/learn/courses/30/lessons/42883)

```js
function solution(number, k) {
  if ([...number].sort((a, b) => b - a).join("") === number)
    return number.slice(0, number.length - k);

  const numberArray = [...number];
  let removedNumber = null;

  while (k !== 0) {
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] < numberArray[i + 1]) {
        removedNumber = numberArray.splice(i, 1)[0];
        --k;

        break;
      }
    }

    if (removedNumber === null) {
      numberArray.pop();
      --k;
    }

    removedNumber = null;
  }

  return numberArray.join("");
}
```

위 코드에서 `test case 10`에서 시간초과로 통과하지 못했다

아무래도 반복문이 겹쳐있어 O(n^2)에 splice(or pop)까지 하여 O(n^3)이 되어 시간이 초과된 것 같다

\+ [02/18]

```js
/*
pseudo code

1. 맨 처음 숫자가 다음 숫자보다 크다 ?
  y. 다음 숫자로 넘어가서 1번으로 돌아간다
  n. 해당 숫자를 지우고 1번으로 돌아간다
2. 지워진 숫자가 없다 ?
  y. 맨끝 숫자를 지운다
3. k를 1 줄이고 1번으로 돌아간다
*/
```

```js
function solution(number, k) {
  let numberArrayFromString = [...number];

  while (k) {
    let deleteCounter = 0;

    for (let i = 0; i < numberArrayFromString.length - 1; ++i) {
      if (
        k !== 0 &&
        +numberArrayFromString[i] < +numberArrayFromString[i + 1]
      ) {
        delete numberArrayFromString[i];
        --k;
        ++deleteCounter;
      }
    }

    if (deleteCounter === 0)
      return numberArrayFromString
        .splice(0, numberArrayFromString.length - k)
        .join("");

    numberArrayFromString = numberArrayFromString.filter(
      (num) => num !== undefined
    );
  }

  return numberArrayFromString.join("");
}
```

다틀렸음

알고리즘을 조금 바꾼탓인 것 같다

```js
function solution(number, k) {
  let numberArrayFromString = [...number];

  while (k) {
    let deletedNumber = null;

    for (let i = 0; numberArrayFromString.length - 1; ++i) {
      if (+numberArrayFromString[i] < +numberArrayFromString[i + 1]) {
        deletedNumber = numberArrayFromString[i];
        delete numberArrayFromString[i];
        numberArrayFromString = numberArrayFromString.filter(
          (num) => num !== undefined
        );
        --k;

        break;
      }
    }

    if (deletedNumber === null)
      return numberArrayFromString
        .slice(0, numberArrayFromString.length - k)
        .join("");
  }

  return numberArrayFromString.join("");
}
```

`test case 7, 8, 10, 12`에서 시간초과로 실패하였다

`delete` + `filter`가 `splice`보다 시간을 많이 잡아먹는 다는 것을 알게 되었다

```js
function solution(number, k) {
  while (k) {
    let deletedNumber = null;

    for (let i = 0; i < number.length - 1; ++i) {
      if (number[i] < number[i + 1]) {
        number = number.slice(0, i) + number.slice(i + 1);
        deletedNumber = number[i];
        --k;

        break;
      }
    }

    if (deletedNumber === null) return number.slice(0, number.length - k);
  }

  return number;
}
```

오히려 처음 풀었던 풀이보다 시간이 늘었다

결국 `test case 10`은 시간초과로 통과하지 못했다

```js
function solution(number, k) {
  const numberArrayFromString = [...number];
  let removedNumber = null;

  for (
    let i = 0, numberArrayLength = numberArrayFromString.length;
    i < numberArrayLength - 1;

  ) {
    if (k === 0) return numberArrayFromString.join("");

    if (numberArrayFromString[i] < numberArrayFromString[i + 1]) {
      [removedNumber] = numberArrayFromString.splice(i, 1);
      --k;
      i = i ? i - 1 : 0;

      continue;
    } else {
      removedNumber = null;
      ++i;
    }

    if (i === numberArrayLength - 1 && k !== 0)
      return numberArrayFromString.slice(0, numberArrayLength - k).join("");
  }
}
```

이건 더 시간이 길어졌고 역시 `test case 10`은 시간초과로 통과하지 못했다
