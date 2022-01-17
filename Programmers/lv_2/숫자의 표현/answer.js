function solution(n) {
  let counter = 1;

  for (let i = 1; i < n; i++) {
    let temp = n;

    for (let j = i; temp >= 0; j++) {
      if (temp === 0) ++counter;
      temp -= j;
    }
  }

  return counter;
}

/*
examples

<case 1>
n = 15

return = 4
*/
