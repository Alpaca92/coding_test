function solution(n, lost, reserve) {
  const students = [...new Array(n)].map((student) => 0);

  lost
    .sort((a, b) => a - b)
    .forEach((lostStudentIdx) => --students[lostStudentIdx - 1]);

  reserve
    .filter((reserveStudentIdx) => {
      if (students[reserveStudentIdx - 1] == -1) {
        ++students[reserveStudentIdx - 1];

        return false;
      }

      return true;
    })
    .sort((a, b) => a - b)
    .forEach((reserveStudentIdx) => {
      if (students[reserveStudentIdx - 2] === -1) {
        ++students[reserveStudentIdx - 2];
      } else if (students[reserveStudentIdx] === -1) {
        ++students[reserveStudentIdx];
      }
    });

  return students.filter((student) => student === 0).length;
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
