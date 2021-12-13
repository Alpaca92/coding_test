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