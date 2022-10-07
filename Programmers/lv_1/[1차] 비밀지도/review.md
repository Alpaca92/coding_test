### [[1차] 비밀지도](https://school.programmers.co.kr/learn/courses/30/lessons/17681)

```js
function solution(n, arr1, arr2) {
    const parsedArr1 = arr1.map(num => {
        const binaryNum = num.toString(2);
        
        if(n > binaryNum.length) {
            return ('0'.repeat(n - binaryNum.length) + binaryNum);
        } else {
            return binaryNum;
        }
    })
    
    const parsedArr2 = arr2.map(num => {
        const binaryNum = num.toString(2);
        
        if(n > binaryNum.length) {
            return ('0'.repeat(n - binaryNum.length) + binaryNum);
        } else {
            return binaryNum;
        }
    })
    
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let result = '';
        
        for (let j = 0; j < parsedArr1[i].length; j++) {
            if (parseInt(parsedArr1[i][j]) + parseInt(parsedArr2[i][j]) === 0) {
                 result += ' ';
            } else {
                result += '#';
            }
        }
        
        answer.push(result);
    }
    
    return answer;
}
```

예전 풀이보다 좀 더 깔끔하게 풀 순 없을까하여 다시 풀게되었다

