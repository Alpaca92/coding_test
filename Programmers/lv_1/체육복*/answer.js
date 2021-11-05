function removeElement(arr, idx) {
  return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

function solution(n, lost, reserve) {
  reserve.forEach((student) => {
    if (lost.indexOf(student) !== -1) {
      lost = removeElement(lost, lost.indexOf(student));
    } else {
      if (lost.indexOf(student - 1) !== -1) {
        lost = removeElement(lost, lost.indexOf(student - 1));
      } else if (lost.indexOf(student + 1) !== -1) {
        lost = removeElement(lost, lost.indexOf(student + 1));
      }
    }
  });

  return n - lost.length;
}

/*
examples

<case 1>
n = 5
lost = [2, 4]
reserve =	[1, 3, 5]

return = 5

<case 2>
n = 5
lost = [2, 4]
reserve = [3]

return = 4

<case 3>
n = 3
lost = [3]
reserve = [1]

return = 2
*/

/*
pseudo code

예약자의 본인의 이름이 있는지 확인한다
있다면 예약자에서 본인의 이름을 없애고 분실자에서도 해당 번호의 이름을 지운다

예약자의 전번호가 lost에 있는지를 확인한다
있다면 예약자에서 본인의 이름을 없애고 분실자에서도 해당 번호의 이름을 지운다
예약자의 전원을 다 훑어봤다면 이번엔 뒷번호가 lost에 있는지를 확인하고 지우기를 반복한다

반복이 다 끝났다면 n - lost.length가 수업을 들을 수 있는 인원 수이다
*/
