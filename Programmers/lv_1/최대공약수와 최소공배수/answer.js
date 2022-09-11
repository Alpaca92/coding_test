function getGcd(n, m) {
  const largeNum = n > m ? n : m;
  const smallNum = n > m ? m : n;
  const remainder = largeNum % smallNum;

  return remainder ? getGcd(smallNum, remainder) : smallNum;
}

function getLcm(n, m) {
  const gcd = getGcd(n, m);

  return (n * m) / gcd;
}

function solution(n, m) {
  return [getGcd(n, m), getLcm(n, m)];
}
