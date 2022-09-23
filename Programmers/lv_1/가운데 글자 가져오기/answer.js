function solution(s) {
  const startIndex = Math.floor(s.length / 2);
  
  if (s.length % 2 !== 0) {
    return s[startIndex];
  } else {
    return s[startIndex - 1] + s[startIndex];
  }
}
