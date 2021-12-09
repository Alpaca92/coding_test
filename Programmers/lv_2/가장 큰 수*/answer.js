function solution(numbers) {
  for (let i = numbers.length - 2; i >= 0; i--) {
    let startIdx = i;

    while (startIdx < numbers.length - 1) {
      if (
        +(numbers[startIdx].toString() + numbers[startIdx + 1].toString()) <=
        +(numbers[startIdx + 1].toString() + numbers[startIdx].toString())
      ) {
        const temp = numbers[startIdx];
        numbers[startIdx] = numbers[startIdx + 1];
        numbers[startIdx + 1] = temp;
      }

      ++startIdx;
    }
  }

  return numbers.map(number => number.toString()).join('');
}

/*
examples

<case 1>
numbers = [6, 10, 2]

return = "6210"

<case 2>
numbers = [3, 30, 34, 5, 9]

return = "9534330"
*/