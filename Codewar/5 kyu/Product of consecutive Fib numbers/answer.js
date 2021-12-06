function productFib(prod) {
  const fibNumbers = [0, 1];
  const targetNumber = Math.ceil(Math.sqrt(prod));
  let n = 2;

  function fib(n) {
    if (n <= 1) return fibNumbers[n];

    fibNumbers[n] = fibNumbers[n - 2] + fibNumbers[n - 1];
  }

  do {
    fib(n);
    ++n;
  } while (fibNumbers[fibNumbers.length - 2] < targetNumber);

  const FIB_NUMBERS_LENGTH = fibNumbers.length;

  for (let i = 3; i >= 2; i--) {
    if (
      prod ===
      fibNumbers[FIB_NUMBERS_LENGTH - i] *
        fibNumbers[FIB_NUMBERS_LENGTH - (i - 1)]
    ) {
      return [
        fibNumbers[FIB_NUMBERS_LENGTH - i],
        fibNumbers[FIB_NUMBERS_LENGTH - (i - 1)],
        true,
      ];
    } else if (
      prod <
      fibNumbers[FIB_NUMBERS_LENGTH - i] *
        fibNumbers[FIB_NUMBERS_LENGTH - (i - 1)]
    ) {
      return [
        fibNumbers[FIB_NUMBERS_LENGTH - i],
        fibNumbers[FIB_NUMBERS_LENGTH - (i - 1)],
        false,
      ];
    }
  }
}

/*
examples

<case 1>
prod = 4895

return = [55, 89, true]

<case 2>
prod = 5895

return = [89, 144, false]

<case 3>
prod = 74049690

return = [6765, 10946, true]

<case 4>
prod = 84049690

return = [10946, 17711, false]

<case 5>
prod = 193864606

return = [10946, 17711, true]

<case 6>
prod = 447577

return = [610, 987, false]

<case 7>
prod = 602070

return = [610, 987, true]
*/
