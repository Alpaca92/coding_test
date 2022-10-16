function isPrime(numbers) {
  const target = numbers.reduce((prev, cur) => prev + cur, 0);

  if (target === 2 || target === 3) return true;
  if (!(target % 2)) return false;

  for (let i = 3; i < target; i += 2) {
    if (!(target % i)) return false;
  }

  return true;
}

function getCombinations(numbers, size) {
  const combinations = [];

  if (size === 1) return numbers.map((el) => [el]);

  numbers.forEach((fixed, index, origin) => {
    const newNumbers = origin.slice(index + 1);
    const combination = getCombinations(newNumbers, size - 1);

    const attached = combination.map((el) => [fixed, ...el]);
    combinations.push(...attached);
  });
  return combinations;
}

function solution(nums) {
  const combinations = getCombinations(nums, 3);

  return combinations.reduce(
    (result, combination) => (isPrime(combination) ? ++result : result),
    0
  );
}
