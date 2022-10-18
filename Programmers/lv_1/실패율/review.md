### [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)

```js
function solution(N, stages) {
    const results = [];    
    let challengers = stages.length;
    const answer = [];
    
    for (let i = 1; i <= N; i++) {
        const failure = stages.filter(stage => stage === i).length;
        const failureRate = failure / challengers;
        challengers -= failure;
        
        results[i - 1] = {
            "stage": i,
            "failureRate": failureRate
        }
    }
    
    results.sort((a, b) => b.failureRate - a.failureRate);
    results.forEach(result => answer.push(result.stage));
    
    return answer;
}
```

위와 같이 풀었는데 다시 풀어보고자 한다

항상 이런 문제를 풀면 객체를 통해 정렬하려고해서 시간을 많이 잡아먹는듯 하다

우수 풀이를 보니

```js
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
```

굉장히 간결하게 푼 것을 볼 수 있었다