###[소수 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12977)

```js
function isPrime(num) {
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function isEven(num) {
    return !(num % 2) ? true : false;
}

function solution(nums) {
    const combined = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isEven(nums[i]) && isEven(nums[j]) && isEven(nums[k]) ) continue; // 짝짝짝
                if (isEven(nums[i]) && !isEven(nums[j]) && !isEven(nums[k]) ) continue; // 짝홀홀
                if (!isEven(nums[i]) && isEven(nums[j]) && !isEven(nums[k]) ) continue; // 홀짝홀
                if (!isEven(nums[i]) && !isEven(nums[j]) && isEven(nums[k]) ) continue; // 홀홀짝
                
                const sumNumbers = nums[i] + nums[j] + nums[k];
                
                if (isPrime(sumNumbers) ) combined.push(sumNumbers);
            }
        }
    }
    
    return combined.length;
}
```

처음 풀어냈을 때에는 3중 for loop를 사용하였는데 다른방법을 사용해보도록 하였다