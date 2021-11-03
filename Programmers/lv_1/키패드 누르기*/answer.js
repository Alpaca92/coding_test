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

/*
examples

<case 1>
numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
hand = "right"

result = "LRLLLRLLRRL"

<case 2>
numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
hand = "left"

result = "LRLLRRLLLRR"

<case 3>
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
hand = "right"

result = "LLRLLRLLRL"
*/
