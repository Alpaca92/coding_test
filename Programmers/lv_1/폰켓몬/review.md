### [폰켓몬](https://programmers.co.kr/learn/courses/30/lessons/1845)

그냥 딱 생각했던대로의 너무 쉬운 문제였다

```js
function solution(nums) {
  const maxinum = Math.floor(nums.length / 2);
  const types = [...new Set(nums)];

  return maxinum >= types.length ? types.length : maxinum;
}
```

전에 풀이와 다르게 풀어보고자 해봤는데 딱히 `set`보다 괜찮은 방법은 없는 것 같았다

근데 풀이를 보면서 좀 더 응용을 해봤는데

```js
function solution (nums) {
  const max = nums.length / 2;
  const types = new Set(nums);

  return Math.min(max, types.size);
}
```

위와 같은 풀이가 좀 더 깔끔할 것 같다