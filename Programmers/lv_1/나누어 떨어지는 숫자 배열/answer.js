function solution(arr, divisor) {
  const dividables = arr.filter((num) => !(num % divisor));

  return dividables.length ? dividables.sort((a, b) => a - b) : [-1];
}