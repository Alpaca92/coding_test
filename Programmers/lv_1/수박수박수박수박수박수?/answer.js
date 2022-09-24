function solution(n) {
  return n % 2 ? "수박".repeat(n / 2 + 1).slice(0, -1) : "수박".repeat(n / 2);
}
