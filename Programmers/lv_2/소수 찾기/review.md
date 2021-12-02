### [소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/42839)

```js
/*
pseudo code
primeNumbers = [];

nC1의 모든 선택지들을 만든다(n = numbers.length)
각 선택지에서 나열가능한 방식을 모두 나열한다

소수인지 확인하고 primeNumbers안에 없다면 안에 넣는다
nC1을 nC2로 바꾸고 처음으로 돌아간다
(1이 n이 될때까지 무한히 반복한다)

primeNumbers.length를 return한다
*/
```

[순열과 조합 알고리즘 (자바스크립트/js/javascript)](https://nyang-in.tistory.com/212)을 참고하여 작성하였다

어떻게하면 이렇게 재귀함수를 깔끔하게 잘쓰는지 궁금하다

처음에는 `combination`을 쓰려고 하다가 `각 선택지에서 나열 가능한 방식을 모두 나열한다`를 풀어서 설명하면

결국 `permutation`이므로 그냥 `permutation`을 사용하기로 했다

다른 사람의 답도 굉장히 흥미로웠다

```js
function solution(numbers) {
  var answer = 0;

  var n = numbers.split("");
  var nums = new Set();
  combi(n, "");

  function combi(a, s) {
    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));
        console.log(Number(s));
        if (chkPrime(Number(s))) {
          answer++;
        }
      }
    }
    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {
        var t = a.slice(0);
        t.splice(i, 1);
        //console.log(t)
        combi(t, s + a[i]);
      }
    }
  }

  function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
```

이 부분에서 좋았다고 생각하는 점은

1. 중복을 `Set`으로 확인한 점
- 나의 경우에는 `Array.prototype.includes()`로 확인함

2. 소수 체크를 제곱근까지만 체크한 것
- 나의 경우에는 홀수만 체크해서 O(n)이지만 이건 O(ln n)이다

3. 중복을 체크하고 나서 소수 체크를 했다는 점
- 나는 소수체크를 먼저했는데 그럼 모든 결과물을 소수체크해야 함