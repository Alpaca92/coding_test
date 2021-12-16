function solution(n, lost, reserve) {
  const students = [...new Array(n)].map((student) => 0);

  lost
    .sort((a, b) => a - b)
    .forEach((lostStudent) => --students[lostStudent - 1]);

  reserve
    .sort((a, b) => a - b)
    .forEach((reserveStudent) => {
      if (students[reserveStudent - 1] === -1) {
        ++students[reserveStudent - 1];
      } else if (students[reserveStudent - 2] === -1) {
        ++students[reserveStudent - 2];
      } else if (students[reserveStudent] === -1) {
        ++students[reserveStudent];
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
