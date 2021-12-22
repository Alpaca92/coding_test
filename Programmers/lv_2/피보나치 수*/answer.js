function solution(n) {
  if (n === 2) return 1;

  const fibNumbers = new Array(n + 1).fill(0);
  fibNumbers[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }

  return fibNumbers[n] % 1234567;
}

/*
examples

<case 1>
n = 3

return = 2

<case 2>
n = 5

return = 5
*/
