### [후보키](https://programmers.co.kr/learn/courses/30/lessons/42890)

```js
/*
pseudo code

1. 혼자서 candidate key가 될 수 있는지 확인한다
2-1. 만약 혼자서 candidate key가 될 수 있는 것이 있다면 이는 앞으로의 둘 이상에서의 candidate key 그룹이 될 수 없다
     ex. '학번'이 혼자 되었다면, ['학번', '이름']은 minimality에 반하므로 candidate key가 될 수 없다
2-2. 둘이서 candidate key가 될 수 있는지를 확인한다(combination으로)
     ...

---
let result = 0
let minimality = 1
const exception = [];

1. minimality의 갯수로 candidate key가 될 수 있는지 각 relation의 element(s)를 확인해 본다
   (단, exception에 들어있는 element(s)가 모두 들어가 있으면 안됨)
2. 1의 조건을 만족하는 element(s)가 있다면(예시에서는 학번) ++result
3. 1의 조건을 만족하는 element(s)를 exception.push([...element(s)])를 한다
4. ++minimality

*/
```

위와 같이 하기 위해서 `combination`을 구현해야 했다

구현하기 위해 구글링을 했고 재귀함수로 깔끔하게 구현한 것을 가져왔다 _[출처](https://nyang-in.tistory.com/212)_
