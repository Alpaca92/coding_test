### [로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484)

`filter`함수를 좀 더 적극적으로 썼으면 좋았을 것 같음

순위를 표현하는 방식이 `switch문`밖에 떠오르지 않아 `map`으로 순회하였는데 더 좋은 방법을 찾아볼 필요성이 있음
`7 - num`으로 하드코딩하였기 때문에 최대 당첨 숫자가 6이 아니라면 수정을 하여야 하기 때문
```js
return win_nums.length - num + 1
```
위와 같이 알아서 대응할 수 있도록 하는 것이 더 좋았을 것 같음