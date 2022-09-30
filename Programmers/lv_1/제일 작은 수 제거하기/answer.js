function solution(arr) {
  return arr.length > 1
    ? arr.filter((num, _, origin) => num !== Math.min(...origin))
    : [-1];
}
