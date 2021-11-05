function solution(numbers) {
  return numbers
    .map((number) => number.toString())
    .sort((a, b) => b[0] - a[0])
    .join("");
}

numbers = [3, 30, 34, 5, 9];

console.log(solution(numbers));

/*
examples

<case 1>
numbers = [6, 10, 2]

return = "6210"

<case 2>
numbers = [3, 30, 34, 5, 9]

return = "9534330"
*/

/*
psuedo code

// 가장 왼쪽에 있는 숫자 ex. 3000 => 3, 49819027 => 4를 기준으로 내림차순 정렬한다
*/
