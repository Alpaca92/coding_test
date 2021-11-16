function solution(n) {
  const arr = ["4", "1", "2"];
  let result = "";

  while (n > 0) {
    const quotient = Math.floor(n / 3);
    const remainder = n % 3;

    if (quotient !== 0 && remainder === 0) {
      result += arr[remainder];
      n = quotient - 1;
    } else if (quotient !== 0 && remainder !== 0) {
      result += arr[remainder];
      n = quotient;
    } else {
      result += arr[remainder];
      break;
    }
  }

  return [...result].reverse().join("");
}

/*
examples

<case 1>
n = 1

return = 1

<case 2>
n = 2

return = 2

<case 3>
n = 3

return = 4

<case 4>
n = 4

return = 11
*/
