function primeFactorization(num) {
  const obj = {};
  let divisor = 2;

  while (num !== 1) {
    if (num % divisor === 0) {
      num /= divisor;
      obj[divisor] = obj[divisor] ? ++obj[divisor] : 1;
    } else {
      ++divisor;
    }
  }

  return obj;
}

function solution(arr) {
  const result = arr
    .map((number) => primeFactorization(number))
    .reduce(
      (acc, cur) => {
        for (const key in cur) {
          if (!acc[key]) {
            acc[key] = cur[key];
          } else {
            acc[key] = acc[key] >= cur[key] ? acc[key] : cur[key];
          }
        }

        return acc;
      },
      { 1: 1 }
    );

  let lsm = 1;

  for (const base in result) {
    lsm *= base ** result[base];
  }

  return lsm;
}

/*
examples

<case 1>
arr = [2,6,8,14]

return = 168

<case 2>
arr = [1,2,3]

return = 6
*/

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

console.log(nlcm([2, 6, 8, 14]));
