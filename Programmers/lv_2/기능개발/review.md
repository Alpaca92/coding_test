### [기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

```js
/*
pseudo code

obj = {}
(1) 반복문을 통해 speeds 만큼 각 배열에 추가를 해준다
(2) 맨앞의 요소 (idx = 0)이 100이 넘어가는지 확인한다

1. 넘어가지 않는다면 다시 (1)로 돌아간다
2. 넘어간다면 shift()를 통해 progresses, speeds의 맨앞 원소를 각각 없앤다
  day_i가 obj에 있는지 확인하고 없다면 obj['day_i'] = 1 || 있다면 obj['day_i']++;
  (2)로 가서 다시 맨앞요소가 100을 넘는지 확인한다

반복문이 끝나면 (progresses.length === 0) return obj.values
*/
```

`pseudo code`의 강력함을 알았다

처음으로 복잡하게 헤매지 않고 편하게 코딩을 할 수 있었다

근데 우수 풀이를 보니 코딩은 역시 수학을 잘하면 유리하다는 것을 또 한 번 느꼈다

```js
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
```
`(100 - progress) / speed`를 `ceil()`로 올림하여 각각 몇일 뒤에 끝날지를 계산해줬고 기준(`maxDay`)를 옮겨가면서 값을 올려줬다

내 답변도 나쁘지는 않지만 `O(n ** 2)`보다는 위 답변이 더 괜찮은 방법이란 생각이 들었다