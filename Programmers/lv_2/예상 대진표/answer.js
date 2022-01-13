function solution(n, a, b) {
  let counter = 1;
  const max = a > b ? a : b;
  const min = a > b ? b : a;

  if (max % 2 === 0 && max - min === 1) return counter;

  return (counter += solution(n / 2, Math.ceil(a / 2), Math.ceil(b / 2)));
}

/*
examples

<case 1>
n = 8
a = 4
b = 7

return = 3
*/
