function solution(number, k) {
  const numberArrayFromString = [...number];
  let smallest = [0, 0];

  if (numberArrayFromString[0] < numberArrayFromString[i + 1]) {
  } else {
    if (numberArrayFromString[0] < smallest)
      smallest = [numberArrayFromString[0], 0];
  }
}

/*
pseudo code

1. 선택한 숫자의 앞이랑 비교해본다 (index = 1 이상일 때)
2. 선택한 숫자의 뒤랑 비교해본다
3. k === 0 이면 return

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
