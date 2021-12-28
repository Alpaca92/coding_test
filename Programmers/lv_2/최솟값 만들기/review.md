### [최솟값 만들기](https://programmers.co.kr/learn/courses/30/lessons/12941)

```js
/*
pseudo code

A에서 뽑은 값 * B에서 뽑은 값이 언제나 최선이어야 함(한쪽은 최솟값을, 한쪽은 최댓값을)

1. 빈공간 let acc = 0;
2. A와 B의 최댓값을 비교한다
  2-1. A의 최댓값이 더 클때,
       B의 최솟값과 곱한다
  2-2. B의 최댓값이 더 클때,
       A의 최솟값과 곱한다
  2-3. A의 최댓값과 B의 최댓값이 같을때,
       A와 B의 최솟값을 비교해 더 작은쪽이 최솟값을, 더 큰쪽이 최댓값을 선택해 곱한다
3. 곱한 값을 acc에 더해준다
4. 선택된 값들을 각각 A, B에서 없애준다
5. A(or B, 항상 A.length === B.length이므로)의 길이가 0인지 확인한다
  5-1. 0이라면 acc를 return해준다
  5-2. 0이 아니라면 2번으로 돌아간다
*/
```

```js
function solution(A, B) {
  let acc = 0;

  while (A.length) {
    const max = Math.max(...A, ...B);
    const min = Math.min(...A, ...B);

    if (A.includes(max) && B.includes(min)) {
      const idxA = A.findIndex((num) => num === max);
      const idxB = B.findIndex((num) => num === min);

      A.splice(idxA, 1);
      B.splice(idxB, 1);
    } else if (B.includes(max) && A.includes(min)) {
      const idxA = A.findIndex((num) => num === min);
      const idxB = B.findIndex((num) => num === max);

      A.splice(idxA, 1);
      B.splice(idxB, 1);
    }

    acc += max * min;
  }

  return acc;
}
```

코드에는 문제가 없는 것 같지만 `test case 1, 4`이외에는 모두 `시간초과로 실패`했다

`Math.max()`, `Math.min()`을 불필요하게 계속 돌리는 것 보다는 `sort()`로 한번 정렬한 후 맨앞과 맨뒤를 비교하는 것이 좋을 것 같다 생각했다

그래서 `shift()`, `pop()`이 해당 element를 return한다는 것과 side effect가 있다는 점을 이용해서 새롭게 코드를 짰고 통과할 수 있었다

하지만 다른 사람 코드를 보니 역시 `reduce()`를 잘쓰면 좀 더 깔끔한 코드를 짤 수 있다는 생각이 들었다

```js
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
```

문제를 잘 생각해보면 결국 정렬했을 때 최솟값과 그리고 반대 배열의 최댓값을 곱하는 것이고 두 배열은 항상 길이가 같으니 위와 같은 풀이가 더 깔끔한 것 같다

그리고 `sort()`도 side effect가 있다는 사실을 간과하지 말도록 하자

```js
// 내 통과한 코드의 일부

// before
A = A.sort((a, b) => a - b);
B = B.sort((a, b) => a - b);

// after
A.sort((a, b) => a - b);
B.sort((a, b) => a - b);
```
