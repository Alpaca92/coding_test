### [[1차] 다트 게임](https://school.programmers.co.kr/learn/courses/30/lessons/17682)

```js
function solution(dartResult) {
  const scoreArr = dartResult
    .split(/[^0-9]+/g)
    .filter((score) => score !== "")
    .map((score) => parseInt(score));
    
  dartResult
    .split(/[^SDT]+/g)
    .filter((bonus) => bonus !== "")
    .map((bonus, idx) => {
      if (bonus === "D") {
        return (scoreArr[idx] = Math.pow(scoreArr[idx], 2));
      } else if (bonus === "T") {
        return (scoreArr[idx] = Math.pow(scoreArr[idx], 3));
      }
    });
    
  const optionArr = dartResult.split(/\d+\w/g);
  optionArr.shift();
    
  for (let i = 0; i < optionArr.length; i++) {
      if (optionArr[i] === '*' && i === 0) scoreArr[i] *= 2;
      
      if (optionArr[i] === '*' && i > 0) {
          scoreArr[i] *= 2;
          scoreArr[i - 1] *= 2;
      } else if (optionArr[i] === '#') scoreArr[i] *= -1;
  }

  return scoreArr.reduce((acc, cur) => acc + cur, 0)
}
```

위와 같은 풀이로 풀었고 새로 풀어보고자 했다

여태 극단적으로 for loop를 사용하지 않으려고 노력했는데 이제는 그렇게까지는 하지 않고자 하고있다

각자의 역할이 있는거고 그 역할에 충실하고 가장 걸맞는게 for loop라면 이를 사용해도 된다고 생각된다

