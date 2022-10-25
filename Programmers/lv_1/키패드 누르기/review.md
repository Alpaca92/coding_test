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

그 후에 다시 수정해 봤는데 일단
```js
  const currentPosition = [
    {
      hand: "L",
      position: [3, 0],
      distance: 0,
    },
    {
      hand: "R",
      position: [3, 2],
      distance: 0,
    },
  ];
```
이 부분이 잘못되어 수정했고 몇 가지 문제를 수정했더니 해결되었다

\+ [Oct 24, 2022]

```js
function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const handInfomations = [
    {
      mainHand: "L",
      coordinate: [3, 0],
      distance: 0,
    },
    {
      mainHand: "R",
      coordinate: [3, 2],
      distance: 0,
    },
  ];

  const result = numbers.map((number) => {
    const numberCoordinate = [0, 0];

    for (let i = 0; i < keypad.length; i++) {
      if (keypad[i].includes(number)) {
        numberCoordinate[0] = i;
        numberCoordinate[1] = keypad[i].indexOf(number);
      }
    }

    if (numberCoordinate[1] === 0) {
      handInfomations[0].coordinate = numberCoordinate;

      return handInfomations[0].mainHand;
    } else if (numberCoordinate[1] === 2) {
      handInfomations[1].coordinate = numberCoordinate;

      return handInfomations[1].mainHand;
    } else {
      for (const handInfomation of handInfomations) {
        handInfomation.distance = 0;

        for (let i = 0; i < numberCoordinate.length; i++) {
          handInfomation.distance += Math.abs(
            handInfomation.coordinate[i] - numberCoordinate[i]
          );
        }
      }

      if (handInfomations[0].distance === handInfomations[1].distance) {
        handInfomations[hand === "right" ? 1 : 0].coordinate = numberCoordinate;

        return hand[0].toUpperCase();
      } else if (handInfomations[0].distance > handInfomations[1].distance) {
        handInfomations[1].coordinate = numberCoordinate;

        return handInfomations[1].mainHand;
      } else {
        handInfomations[0].coordinate = numberCoordinate;

        return handInfomations[0].mainHand;
      }
    }
  });

  return result.join("");
}
```

위 코드보다 좀 더 괜찮은 코드를 짜보고 싶었다

우수 풀이를 보니 position을 정말 잘 짠 것 같았다

```js
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}
```
