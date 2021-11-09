function solution(number) {}

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

/*
pseudo code

const symbols = {
  1: I,
  4: IV,
  5: V,
  9: IX,
  10: X,
  40: XL,
  50: L,
  90: XC,
  100: C,
  400: CD,
  500: D,
  900: CM,
  1000: M,
};

숫자를 string으로 변환하여 array에 자릿수별로 담는다 [...number.toString()] (해당 arr의 elem은 각각 (arr.length - idx - 1)를 지수로 가진다)
[3, 9, 9, 4]라고 한다면 map()으로 각각을 순회하는데 if (num === 9(or 4)) symbols[`${10 ** (arr.length - idx - 1) * 9(or 4)}`]
else if (num >= 5) 
*/
