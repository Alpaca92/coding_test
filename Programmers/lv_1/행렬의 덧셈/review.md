### [행렬의 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/12950)

```js
function solution(arr1, arr2) {
    let answer = [];
    
    arr1.forEach((a, i) => {
		a.forEach((b, j) => {
			answer[i] = b + arr2[i][j]
		});
	});
    
    return answer;
}
```

이전의 풀이보다 좀 더 깔끔하게 풀어보도록 노력했다

그리고 위 풀이는 통과하지도 못한 풀이었다
