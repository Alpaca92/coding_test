function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) return false;
  }

  return true;
}

function solve(a, b) {
  for (let i = 1; i <= Math.ceil(b / 2); i++) {
    if (!(b % i)) {
      const primeFactor1 = isPrime(i) ? i : null;
      const primeFactor2 = isPrime(b / i) ? b / i : null;

      if (
        (primeFactor1 && a % primeFactor1) ||
        (primeFactor2 && a % primeFactor2)
      )
        return false;
    }
  }
  return true;
}

/*
examples

<case 1>
a = 2
b = 256

return = true

<case 2>
a = 2
b = 253

return = false

<case 3>
a = 9
b = 243

return = true

<case 4>
a = 15
b = 12

return = false

<case 5>
a = 21
b = 2893401

return = true

<case 6>
a = 21
b = 2893406

return = false

<case 7>
a = 54
b = 2834352

return = true

<case 8>
a = 54
b = 2834359

return = false

<case 9>
a = 1000013
b = 7187761

return = true

<case 10>
a = 1000013
b = 7187762

return = false
*/