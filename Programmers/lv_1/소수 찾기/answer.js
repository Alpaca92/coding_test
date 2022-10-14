function getPrimeNumbers(numbers, dividerIndex = 1) {
  if (numbers[dividerIndex] > Math.floor(Math.sqrt(numbers.at(-1))))
    return numbers;

  const filteredNumbers = numbers.filter(
    (number, i, origin) =>
      i <= dividerIndex || !!(number % origin[dividerIndex])
  );

  return getPrimeNumbers(filteredNumbers, ++dividerIndex);
}

function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  return getPrimeNumbers(numbers).length - 1;
}
