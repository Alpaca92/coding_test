### [Two Sum](https://leetcode.com/problems/two-sum/)

```js
/*
pseudo code

nums.length 순회
if (nums.indexOf(target - nums[i]) !== -1) return [i, nums.indexOf(target - nums[i]];
*/
```

처음에 이렇게 코드를 짰는데 실패를해서 봤더니 `nums = [3, 3], target = 6`이면 `[0, 0]`을 return한다는 것을 알게 되었다

그래서 `nums.indexOf(target - nums[i], i + 1)`로 변경해줘서 해결했다

```js
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
```

우수 풀이를 보면 정말 경이로웠다 `hash`를 완벽하게 이해하고 있는 사람 같았다

`key-value`를 뒤집어서 `value-key`위치에서 해결하는 방식이 종종 보이는데(index를 return해야하는 경우) 이 경우를 더 연습해야겠다
