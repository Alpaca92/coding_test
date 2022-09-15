function solution(n) {
  let result = 0;

  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (!(n % i)) result += i !== Math.sqrt(n) ? i + n / i : i;
  }

  return result;
}
