function solution(numbers, hand) {
  const keys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const positions = {
    left: [3, 0],
    right: [3, 2],
  };

  const resultArr = numbers.map((number) => {
    let currentPosition = null;

    for (let row = 0; row < keys.length; ++row) {
      const column = keys[row].findIndex((el) => el === number);
      if (column !== -1) {
        currentPosition = [row, column];
        break;
      }
    }

    switch (currentPosition[1]) {
      case 0:
        positions["left"] = currentPosition;
        return "L";
      case 2:
        positions["right"] = currentPosition;
        return "R";
      case 1:
        const [leftRow, leftColumn] = positions["left"];
        const [rightRow, rightColumn] = positions["right"];
        const [currentRow, currentColumn] = currentPosition;
        const leftDistance =
          Math.abs(leftRow - currentRow) + Math.abs(leftColumn - currentColumn);
        const rightDistance =
          Math.abs(rightRow - currentRow) +
          Math.abs(rightColumn - currentColumn);

        if (leftDistance - rightDistance < 0) {
          positions["left"] = currentPosition;
          return "L";
        } else if (leftDistance - rightDistance > 0) {
          positions["right"] = currentPosition;
          return "R";
        } else {
          positions[hand] = currentPosition;
          return hand[0].toUpperCase();
        }
    }
  });

  return resultArr.join("");
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
