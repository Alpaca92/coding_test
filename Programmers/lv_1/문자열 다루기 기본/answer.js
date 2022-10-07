function solution(s) {
  return (
    (s.length === 4 || s.length === 6) && s.length === s.match(/[0-9]/g).length
  );
}
