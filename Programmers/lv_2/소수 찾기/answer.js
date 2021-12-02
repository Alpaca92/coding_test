function isPrime(number) {
  if (number === 2 || number === 3) return true;
  if (number === 1 || number % 2 === 0) return false;

  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

function getPermutations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((number) => [number]);

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });

  return results;
}

function solution(numbers) {
  const primeNumbers = [];

  for (let i = 1; i <= numbers.length; i++) {
    const permutations = getPermutations([...numbers], i);
    permutations.forEach((permutation) => {
      const number = +permutation.join("");

      if (isPrime(number)) {
        !primeNumbers.includes(number) ? primeNumbers.push(number) : null;
      }
    });
  }

  return primeNumbers.length;
}

/*
examples

<case 1>
numbers = "17"

return =3

<case 2>
numbers = "011"

return =2
*/

