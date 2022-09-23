function solution(number, k) {
  const numArr = [...number];
  const isOnlyOneDigit = new Set([...number]).size === 1;
  const isPerfectlyDescendingOrder =
    number === numArr.sort((a, b) => +b - +a).join("");

  if (isOnlyOneDigit || isPerfectlyDescendingOrder)
    return number.slice(0, number.length - k);

  for (let i = 0; i < number.length - 1; ++i) {
    if (number[i] < number[i + 1]) {
      number = number.slice(0, i) + number.slice(i + 1);
      --k;
      break;
    }
  }

  if (k === 0) return number;
  return solution(number, k);
}

/*
pseudo code

1. 현재 인덱스와 다음 인덱스의 숫자를 비교하여 현재값이 더 작다면 현재값을 지운다
2. 숫자가 지워지지 않았다면 인덱스와 숫자를 stack에 저장한다
*/

/*
examples

<case 1>
number = "1924"
k = 2

return = "94"

<case 2>
number = "1231234"
k = 3

return = "3234"

<case 3>
number = "4177252841"
k = 4

return = "775841"
*/
