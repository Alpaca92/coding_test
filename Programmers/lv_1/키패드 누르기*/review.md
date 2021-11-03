### [키패드 누르기](https://programmers.co.kr/learn/courses/30/lessons/67256)

```js
function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const currentPosition = [
    {
      hand: "L",
      position: [4, 0],
      distance: 0,
    },
    {
      hand: "R",
      position: [4, 2],
      distance: 0,
    },
  ];

  numbers.map((number) => {
    let numberPosition = [null, null];

    for (let i = 0; i < keypad.length; i++) {
      if (keypad[i].includes(number)) numberPosition[0] = i;

      for (let j = 0; keypad[i].length; j++) {
        if (keypad[i][j] === number) numberPosition[1] = j;
      }
    }

    if (col === 0) {
      currentPosition[0].position = numberPosition;

      return "L";
    } else if (col === 2) {
      currentPosition[1].position = numberPosition;

      return "R";
    }

    for (const handInfo of currentPosition) {
      for (let i = 0; i < handInfo.position.length; i++) {
        handInfo += Math.abs(handInfo.position[i] - numbersPosition[i]);
      }
    }

    if (currentPosition[0].distance === currentPosition[1].distance) {
      return hand[0].toUpperCase();
    } else if (currentPosition[0].distance < currentPosition[1].distance) {
      currentPosition[0].position = numberPosition;

      return "L";
    } else {
      currentPosition[1].position = numberPosition;

      return "R";
    }
  });

  return numbers.join("");
}
```
처음 짠 코드는 시간초과로 실패하였다

아무리 생각해도 나는 2차원 배열로 해결을 하는 방법밖에 떠오르지 않는데 어떻게 코드를 진행, 수정해야할지 모르겠다