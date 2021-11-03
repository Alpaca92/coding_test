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

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

console.log(solution(numbers, hand));

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
