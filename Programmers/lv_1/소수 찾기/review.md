### [소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/12921)

```js
function solution(n) {
  let counter = 1;

  function isPrime(num) {
    if (num === 3) return 1;

    if (num % 2 === 0 || num % 3 === 0) return 0;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return 0;
      }
    }

    return 1;
  }

  for (let i = 2; i <= n; i++) {
    counter += isPrime(i);
  }

  return counter;
}
```

위와 같은 풀이를 했었는데 이는 `자바스크립트 알고리즘`책에서 소수를 찾는 함수를 가져온 것이었다

\+[Oct 13, 2022]

자력으로 문제를 다시 풀어보고 싶어서 다시 풀어봤다

```js
function isPrime(number) {
  if (number === 2 || number === 3) return true;
  if (number % 2 === 0 || number === 1) return false;

  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(n) {
  const primeNumbers = [];

  for (let i = 1; i <= n; ++i) {
    if (isPrime(i)) primeNumbers.push(i);
  }

  return primeNumbers.length;
}
```

nested for loop여서 O(n^2)으로 실패했다

구글링을 하니 [에라토스테네스의 체](https://vvs1.tistory.com/66)에 대한 내용이 있었다

쉽게 말하면 1을 제외하고 2부터는 자신의 배수들을 다 지우면 결국 소수만 남는다는 말이다

예를 들어

`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]`라는 배열이 있다면 2부터 자신의 배수들을 지워가면

`const numbers = [1, 2, 3, undefined, 5, undefined, 7, undefined, 9, undefined, 11, undefined, 13, undefined, 15, undefined, 17, undefined, 19]`

`const numbers = [1, 2, 3, undefined, 5, undefined, 7, undefined, undefined, undefined, 11, undefined, 13, undefined, undefined, undefined, 17, undefined, 19]`

...

`const numbers = [1, 2, 3, undefined, 5, undefined, 7, undefined, undefined, undefined, 11, undefined, 13, undefined, undefined, undefined, 17, undefined, 19]`

결국 남은 숫자는 `const numbers = [1, 2, 3, 5, 7, 11, 13, 17, 19]`로 소수만 남게된다

```js
function getPrimeNumbers(numbers, dividerIndex = 1) {
  if (numbers[dividerIndex] > Math.floor(Math.sqrt(numbers.at(-1))))
    return numbers;

  const filteredNumbers = numbers.filter(
    (number, i, origin) =>
      i <= dividerIndex || !!(number % origin[dividerIndex])
  );

  return getPrimeNumbers(filteredNumbers, ++dividerIndex);
}

function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  return getPrimeNumbers(numbers).length - 1;
}
```

테스트 케이스는 모두 통과했지만 효율성 측면에서 통과하지 못했다

```js
function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  numbers[0] = 0;

  for (let i = 1; i < numbers.length - 1; ++i) {
    if (numbers[i] === 0) continue;

    for (let j = i + 1; j < numbers.length; ++j) {
      if (!(numbers[j] % numbers[i])) numbers[j] = 0;
    }
  }

  return numbers.filter((number) => number !== 0).length;
}
```

이 코드 또한 효율성을 통과하지 못했다
