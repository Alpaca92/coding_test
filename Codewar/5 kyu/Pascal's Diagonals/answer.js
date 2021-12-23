function generateDiagonal(n, l) {
  if (n === 0) return new Array(l).fill(1);

  const getFactorial = (n) => {
    if (n <= 1) return 1;

    return n * getFactorial(n - 1);
  };

  return new Array(l)
    .fill(0)
    .map(
      (num, idx) =>
        getFactorial(n + idx) / (getFactorial(n) * getFactorial(idx))
    );
}

/*
examples

<case 1>
n = 2
l = 5

return = [1, 3, 6, 10, 15]

<case 2>
n = 1
l = 10

return = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

<case 3>
n = 3
l = 7

return = [1, 4, 10, 20, 35, 56, 84]
*/
