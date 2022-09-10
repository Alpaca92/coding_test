function solution(price, money, count) {
  const result = (count * price * (count + 1)) / 2 - money;
  return result >= 0 ? result : 0;
}
