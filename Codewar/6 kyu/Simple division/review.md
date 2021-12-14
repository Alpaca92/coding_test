### [Simple division](https://www.codewars.com/kata/59ec2d112332430ce9000005/train/javascript)

```js
/*
pseudo code

1. 빈 배열을 만든다
2. b를 1부터 나눠본다 (a의 절반의 올림 수까지)
3. 나눠지는 수에 대하여 소수인지를 확인하고 소수라면 a를 나눠본다
  3-1. 나눠지면 2로 돌아간다
  3-2. 안나눠지면 return false
4. 모든 수의 검증이 끝나면 return true 
*/
```

```js
function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) return false;
  }

  return true;
}

function solve(a, b) {
  for (let i = 1; i <= Math.ceil(a / 2); i++) {
    if (!(a % i)) {
      const primeFactor1 = isPrime(i) ? i : null;
      const primeFactor2 = isPrime(a / i) ? a / i : null;

      if (
        (primeFactor1 && b % primeFactor1) ||
        (primeFactor2 && b % primeFactor2)
      )
        return false;
    }
  }
  return true;
}
```

위와 같이 코드를 짰는데 `test case 9`에서 실패했다

```js
/*
<case 9>
a = 1000013
b = 7187761

return = true
*/
```

근데 문제를 잘 읽어보니 `b의 모든 prime factor a를 나눠봤을 때 나눠지면 true, 아니면 false`였다

문제를 반대로 이해해서 코드가 반대로 짜여져 실패했던 거였다

```js
function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) return false;
  }

  return true;
}

function solve(a, b) {
  for (let i = 1; i <= Math.ceil(b / 2); i++) {
    if (!(b % i)) {
      const primeFactor1 = isPrime(i) ? i : null;
      const primeFactor2 = isPrime(b / i) ? b / i : null;

      if (
        (primeFactor1 && a % primeFactor1) ||
        (primeFactor2 && a % primeFactor2)
      )
        return false;
    }
  }
  return true;
}
```

위와 같이 코드를 변경하니 잘 통과했다

영어공부가 뒷받침되어야 공부도 정확한 방향으로 나아갈 수 있다는 것을 다시한번 깨닫게 된 날이였다

그리고 다른 사람의 코드를 봤는데 역시나 굉장히 짧고 간결했다

```js
function solve(a, b) {
  function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return Math.abs(a);
  }
  for (var c; (c = gcd(a, b)) > 1; ) b /= c;
  return b == 1;
}
```

`[a, b] = [b, a % b]`부분은 내가 생각하기에 처음에 이해가 안되었다

```js
const temp = a;

[a, b] = [b, temp % b];
```

이렇게 해야되는 것이 아닐까? 라고 생각했는데 막상 콘솔로 찍어보니까 의도한대로 assignment가 되어있었다

`destructuring assignment`에 대해 하나 더 배울 수 있었다

나머지 부분에 대해서는 솔직히 잘 이해가 가지 않았다

짧고 간결하다는 것은 코드짜는 능력도 좋지만 수학적으로도 많은 지식을 갖고 있다는 것을 알 수 있었다