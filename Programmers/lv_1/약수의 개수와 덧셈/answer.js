function getDivisors(number) {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(number); ++i) {
    if (number % i === 0) divisors.push(i, number / i);
  }

  return [...new Set(divisors)];
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; ++i) {
    result += getDivisors(i).length % 2 === 0 ? i : -i;
  }

  return result;
}