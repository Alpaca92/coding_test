function solution(number, k) {
  const numberArrayFromString = [...number];
  let removedNumber = null;

  for (
    let i = 0, numberArrayLength = numberArrayFromString.length;
    i < numberArrayLength - 1;

  ) {
    if (k === 0) return numberArrayFromString.join("");

    if (numberArrayFromString[i] < numberArrayFromString[i + 1]) {
      [removedNumber] = numberArrayFromString.splice(i, 1);
      --k;
      i = i ? i - 1 : 0;

      continue;
    } else {
      removedNumber = null;
      ++i;
    }

    if (i === numberArrayLength - 1 && k !== 0)
      return numberArrayFromString.slice(0, numberArrayLength - k).join("");
  }
}

/*
pseudo code

1. 선택된 숫자가 다음 숫자보다 작으면 선택된 숫자를 지운다
2. 숫자를 지웠다면 맨 처음부터 다시 시작한다
3. 아무것도 지우지 못했다면 맨 뒤에서 만큼 k만큼 지운다

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
