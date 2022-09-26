function solution(x) {
  return !Boolean(x % [...x.toString()].reduce((prev, cur) => prev + +cur, 0));
}
