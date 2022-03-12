function solution(number, k) {
  const numberList = [...number];

  for (let i = 0; i < numberList.length - 1; ) {
    if (+numberList[i] < +numberList[i + 1]) {
      let deleteCounter = 1;

      for (let j = i; j > 0; --j) {
        if (k > deleteCounter && +numberList[j - 1] < +numberList[i + 1]) {
          ++deleteCounter;
        } else {
          break;
        }
      }

      const startEliminationIndex = deleteCounter - 1;
      numberList.splice(i - startEliminationIndex, deleteCounter);
      k -= deleteCounter;

      if (k === 0) return numberList.join("");

      i = i - startEliminationIndex;
    } else {
      ++i;
    }
  }

  if (k !== 0) numberList.splice(numberList.length - k, k);

  return numberList.join("");
}

solution("4177252841", 4);

/*
pseudo code

1. 다음 숫자랑 비교
2. 현재 숫자가 작으면 그전, 전전, 전전전까지 계속비교
3. 아닌인덱스 + 1, 현재 인덱스까지 splice
4. 현재인덱스 - (지워진 갯수 - 1)으로 인덱스 설정하고 1번으로 돌아감

5. return 루프가 끝났는데 k !== 0이면 splice(length - k)
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
