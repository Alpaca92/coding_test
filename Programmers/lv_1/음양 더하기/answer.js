function solution(absolutes, signs) {
  return absolutes.reduce(
    (prev, cur, idx) => (signs[i] ? prev + cur : prev - cur),
    0
  );
}
