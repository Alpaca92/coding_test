### [약수의 개수와 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/77884)

```js
function solution(left, right) {
  const arr = [];
  
  for (let i = left; i <= right; i++) {
    arr.push(i);
  }
  
  const answer = arr.map(number => {
    let divisors = [1, number];
    
    for (let i = 2; i < number; i++) {
      if (number % i === 0) divisors.push(i, (number / i));
    }
    
    divisors = [... new Set(divisors)];
    
    if (divisors.length % 2 === 0) {
      return number;
    } else {
      return number * (-1);
    }
  })
  
  return answer.reduce((acc, cur) => acc + cur, 0);
}
```

전에 풀었던 방식보다 깔끔하게 풀고 싶었다

답은 좀 더 간단한 곳에 있었는데

```js
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
```

제곱근이 정수면 약수의 갯수가 홀수개라는 것이다

왜냐하면 `제곱근이 정수 === 어떠한 수를 제곱하면 나오는 수`이기때문이다

e.g.
1. 16 = [1, ..., 4, ..., 16];
2. 900 = [1, ..., 30, ..., 900];

수학적인 인사이트를 좀 더 길러야겠다