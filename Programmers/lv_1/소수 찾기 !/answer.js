function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  numbers[0] = 0;

  for (let i = 1; i < numbers.length - 1; ++i) {
    if (numbers[i] === 0) continue;

    for (let j = i + 1; j < numbers.length; ++j) {
      if (!(numbers[j] % numbers[i])) numbers[j] = 0;
    }
  }

  return numbers.filter((number) => number !== 0).length;
}
