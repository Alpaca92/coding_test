### [숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

```js
function solution(s) {
  let parsedString = s;

  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; ) {
    if (!parsedString.includes(numbers[i])) {
      i++;
    } else {
      parsedString = parsedString.replace(numbers[i], i);
    }
  }

  var answer = parseInt(parsedString);

  return answer;
}
```

이전에 풀었던 풀이다

```js
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
```

다른 사람 풀이 중에 split, join으로 풀어낸 풀이가 인상깊었다
