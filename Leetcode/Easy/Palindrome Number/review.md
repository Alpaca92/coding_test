### [Palindrome Number](https://leetcode.com/problems/palindrome-number/)

```js
/*
pseudo code

[...x.toString()]으로 arr에 담고
arr[i] === arr[arr.length - i - 1]임을 Math.ceil(arr.length / 2)까지 for문으로 돌려 확인
중간에 안같으면 return false; (음수여도 앞에 -가 붙어있어서 바로 첫번째 순회할 때 탈락함)

for문 끝나면 return true;
*/
```

다른 사람들의 풀이를 봐도 나와 크게 다르지 않음에 기쁘기도 했지만 난이도가 `easy`였다는 점에서 갈길은 아직 멀었다
