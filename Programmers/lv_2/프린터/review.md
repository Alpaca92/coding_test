### [프린터](https://programmers.co.kr/learn/courses/30/lessons/42587)

```js
/*
pseudo code

result = [];

맨 앞의 item을 선택한다
priorities 그보다 큰 것을 찾아본다 .find()
  - 큰게 나오면 맨 뒤로 보낸다
    다시 처음으로 돌아간다
  - 큰게 나오지 않는다면 result에 넣는다
    그리고 처음으로 돌아간다

모든게 끝나면 location에 있던 애를 result에서 찾는다
return index + 1
*/
```

방법은 맞았지만 뭔가 좀 조잡한 방식으로 풀어나갔다

다른 사람 풀이를 보니까

```js
function solution1(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
```

깔끔하게 `location`만 marking해서 푸는 것이 인상적이였다
