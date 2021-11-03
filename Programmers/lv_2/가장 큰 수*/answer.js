function solution(numbers) {
  numbers = numbers.map((number) => number.toString());

  for (let i = 1; i < 5; i++) {
    numbers.sort((a, b) => {
      const LENGTH_A = a.split("").length;
      const LENGTH_B = b.split("").length;

      if (b[LENGTH_B - i] && a[LENGTH_A - i]) {
        return +b[LENGTH_B - i] - +a[LENGTH_A - i];
      }

      return 0;
    });
  }
  return numbers.join("");
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
