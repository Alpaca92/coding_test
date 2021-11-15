function solution(n) {
  return +[...n.toString(3)].map((digit) => (digit === 4 ? 3 : digit)).join("");
}

/*
examples

<case 1>
n = 1

return = 1

<case 2>
n = 2

return = 2

<case 3>
n = 3

return = 4

<case 4>
n = 4

return = 11
*/

/*
pseudo code

1, 2, 4로만 구성되므로 경우의 수를 통해 숫자를 표현한다고 생각
한 자릿수는 3 가지 경우
두 자릿수는 3 * 3 가지 경우

= 3 ** 1 + 3 ** 2 + 3 ** 3 + ...
등비수열의 합 공식을 이용해서 Sn = a * (r ** n - 1) / (r - 1)

let numberOfDigits = 1;
const sum = 3 / 2 * (3 ** numberOfDigits - 1)

while (sum < numberOfDigits)
  ++numberOfDigits;

---

3진법으로 숫자를 변형하고
+[...number].map(digit => digit === 4 ? 3 : digit).join('');

---

*/
