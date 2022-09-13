function collatz(num, counter) {
  if (num === 1) return counter;
  if (counter === 500 && num != 1) return -1;
  num = !!(num % 2) ? num * 3 + 1 : num / 2;

  return collatz(num, ++counter);
}

function solution(num) {
  return collatz(num, 0);
}
