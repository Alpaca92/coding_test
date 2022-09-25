function solution(n, lost, reserve) {
  const students = new Array(n).fill(0);

  lost.forEach((loser) => {
    students[loser - 1] += -1;
  });

  reserve.forEach((reserver) => {
    students[reserver - 1] += +1;
  });

  for (let i = 0; i < n - 1; ++i) {
    if (students[i] + students[i + 1] === 0) {
      students[i] = 0;
      students[i + 1] = 0;
    }
  }

  return n - students.filter((student) => student === -1).length;
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
