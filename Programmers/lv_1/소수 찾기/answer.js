function getPrimeNumbers(numbers, divideIndex = 1) {
  if (numbers[divideIndex] >= numbers.at(-1)) return numbers;

  const newNumbers = numbers.filter(
    (number, _, origin) => !!(number % origin[divideIndex])
  );

  if (numbers.length === newNumbers.length) return newNumbers;

  return getPrimeNumbers(newNumbers, ++divideIndex);
}

function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  return getPrimeNumbers(numbers).length;
}

solution(10);
