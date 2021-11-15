function solution(number) {
  const symbols = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);
  let answer = "";

  for (const [key, value] of symbols) {
    while (true) {
      if (number - key >= 0) {
        number -= key;
        answer += value;
      } else {
        break;
      }
    }
  }

  return answer;
}

/*
examples

<case 1>
number = 1

return = 'I'

<case 2>
number = 2

return = 'II'

<case 3>
number = 3

return = 'III'

<case 4>
number = 4

return = 'IV'

<case 5>
number = 5

return = 'V'

<case 6>
number = 9

return = 'IX'

<case 7>
number = 10

return = 'X'

<case 8>
number = 11

return = 'XI'

<case 9>
number = 19

return = 'XIX'

<case 10>
number = 22

return = 'XXII'

<case 11>
number = 15

return = 'XV'

<case 12>
number = 1000

return = 'M'

<case 13>
number = 1001

return = 'MI'

<case 14>
number = 1990

return = 'MCMXC'

<case 15>
number = 2007

return = 'MMVII'

<case 16>
number = 2008

return = 'MMVIII'
*/
