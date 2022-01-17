### [N개의 최소공배수](https://programmers.co.kr/learn/courses/30/lessons/12953)

```js
/*
pseudo code

1. arr의 첫번째 원소를 소인수분해 한다
2. 해당 인수 중 obj에서 본인보다 작은 값이 있으면 그 값을 대체한다
3. arr의 끝까지 이를 반복한다
*/
```

반복문을 정말 많이 쓰는 방법이였다

gcd를 구하는 방법을 유클리드 호제법을 통해 재귀로 풀고 이를 reduce로 처리하는 식으로 풀이한 사람이 있었다

```js
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
```

`lsm(a, b) = (a * b) / gcd(a, b)`임을 잘 활용한 예인 것 같다
