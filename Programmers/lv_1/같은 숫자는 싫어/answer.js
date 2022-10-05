function solution(arr) {
  return arr.reduce(
    (prev, cur) => (prev[prev.length - 1] === cur ? prev : [...prev, cur]),
    []
  );
}
