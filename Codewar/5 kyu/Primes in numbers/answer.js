function primeFactors(n) {
  const integerFactorization = {};
  let divisor = 3;
  let result = "";

  while (!(n % 2)) {
    if (!integerFactorization.hasOwnProperty(2)) {
      n /= 2;
      integerFactorization[2] = 1;
    } else {
      n /= 2;
      integerFactorization[2]++;
    }
  }

  while (n !== 1) {
    if (!(n % divisor)) {
      if (!integerFactorization.hasOwnProperty(divisor)) {
        n /= divisor;
        integerFactorization[divisor] = 1;
      } else {
        n /= divisor;
        integerFactorization[divisor]++;
      }
    } else {
      divisor += 2;
    }
  }

  for (const number in integerFactorization) {
    const exponent = integerFactorization[number].toString();

    if (exponent === "1") {
      result += `(${number})`;
    } else {
      result += `(${number}**${exponent})`;
    }
  }

  return result;
}

/*
examples

<case 1>
n = 86240

return = "(2**5)(5)(7**2)(11)"
*/

n = 86240;
console.log(primeFactors(n));
