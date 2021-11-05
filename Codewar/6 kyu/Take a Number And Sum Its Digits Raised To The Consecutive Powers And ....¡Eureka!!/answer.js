function sumDigPow(a, b) {
  const result = [];
  let n = a;

  while (a <= n && n <= b) {
    let acc = 0;

    [...n.toString()].map((digit, idx) => (acc += digit ** (idx + 1)));

    if (acc === n) {
      result.push(n);
      ++n;
    } else {
      ++n;
    }
  }

  return result;
}

/*
examples

<case 1>
a = 1
b = 10 

return = [1, 2, 3, 4, 5, 6, 7, 8, 9]

<case 2>
a = 1
b = 100 

return = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

<case 3>
a = 10
b = 100  

return = [89]

<case 4>
a = 90
b = 100

return = []

<case 5>
a = 90
b = 150

return = [135]

<case 6>
a = 50
b = 150

return = [89, 135]

<case 7>
a = 10
b = 150

return = [89, 135]
*/
