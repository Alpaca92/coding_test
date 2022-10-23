function solution(a, b, n, acc = 0) {
  const receive = Math.floor(n / a) * b;
  if (!receive) return acc;

  const rest = n % a;

  return solution(a, b, receive + rest, acc + receive);
}
