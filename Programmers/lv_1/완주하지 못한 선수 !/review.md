### [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

```js
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  completion.forEach((person) => {
    const idx = participant.indexOf(person);

    if (idx !== -1) {
      participant.splice(idx, 1);
    }
  });

  return participant[0];
}
```

처음 답변은 위와 같았는데 효율성에서 0점이 나와서 다시 생각하기로 했다.
그러다 제목에 `해시`라는 것이 보였고 obj로 풀면 좀 더 빠를 것 같다 싶어서 그렇게 정리하고 value를 비교하여 답을 도출해냈다.

\+[Oct 23, 2022]

```js
function solution(participant, completion) {
  const participantObj = {};
  const completionObj = {};

  participant.forEach((person) => {
    if (!(person in participantObj)) {
      participantObj[person] = 1;
    } else {
      participantObj[person]++;
    }
  });

  completion.forEach((person) => {
    if (!(person in completionObj)) {
      completionObj[person] = 1;
    } else {
      completionObj[person]++;
    }
  });

  for (const key in participantObj) {
    if (participantObj[key] !== completionObj[key]) return key;
  }
}
```

새로운 폴이로 풀어보고 싶었다

```js
function solution(participant, completion) {
  for (let i = 0; i < participant.length; ++i) {
    const completionPlayerIdx = completion.findIndex(
      (completionPlayer) => completionPlayer === participant[i]
    );
    if (completionPlayerIdx === -1) return participant[i];
    participant[i] = 0;
    completion[completionPlayerIdx] = 0;
  }
  return participant.filter((player) => !!player)[0];
}
```

간단하게 풀어보려고 했는데 효율성에서 0점을 받았다

이번엔 통과했는데 풀이를 보니 경이로운 풀이가 있었다

```js
// minified
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1));

// parsed
var solution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );
```

`find`라는 함수에 대한 이해, 전치/후치에 대한 이해, 그리고 js의 배열에 대한 이해가 필요했다

먼저 js의 배열은 유사객체이므로 다음과 같은 코드가 작동한다

```js
const arr = [];
arr['test'] = 10;

console.log(arr); // [test: 10]
```

배열의 키값에 숫자는 우리가 배열을 선언할 때 자동으로 매칭되지만 위와 같이 임의의 키값을 넣어줄 수 있다는 점이다

하지만 이는 length에는 반영이 안된다

```js
console.log(arr.length); // 0
```

둘째로 전치와 후치다

```js
let couter = 0;

console.log(counter++); // 0 (후치)
console.log(++conuter); // 2 (전치)
```

후치의 경우는 값이 코드에 먼저 반영된 후 증감이 진행되고, 전치의 경우는 증감이 먼저된 후 그 값이 코드에 반영된다

즉, 위 예시에서 첫번째는 콘솔에 `counter`가 찍히고 난 후 값이 1 증가하고, 두번째의 콘솔은 `counter`의 값이 1 증가한 후 콘솔에 반영된다

```js
let counter = 0;

console.log(counter++); // 1. 현재 counter = 0; 이 값이 콘솔에 반영
// 2. counter = 1;
console.log(++counter); // 3. 현재 counter = 2; 그 후, 콘솔에 반영
```

그리고 마지막으로 `array.prototype.find()`에 대한 이해다

find에는 두개의 args가 들어가는데, 첫번째는 callbackFn이고 두번째는 thisArgs다

> If a thisArg parameter is provided to find, it will be used as the this value inside each invocation of the callbackFn. If it is not provided, then undefined is used.

이 부분에 대해서는 블로그에 좀 더 자세히 작성하는 걸로 하겠다

그리고 하나 궁금한 점은 왜 or(||)이 아닌 bitwise or(|)을 썼느냐는 점이다