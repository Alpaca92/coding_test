const n = 5;
let lost = [2, 3, 4];
const reserve = [3, 4, 5];

function removeElement(arr, idx) {
  return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

function solution(n, lost, reserve) {
  for (const student of reserve) {
    if (lost.includes(student)) {
      const idx = lost.indexOf(student);

      lost = removeElement(lost, idx);
      continue;
    }
    if (lost.indexOf(student - 1) !== -1) {
      const idx = lost.indexOf(student - 1);

      lost = removeElement(lost, idx);
    } else if (lost.indexOf(student + 1) !== -1) {
      const idx = lost.indexOf(student + 1);

      lost = removeElement(lost, idx);
    }
  }
  return n - lost.length;
}

console.log(solution(n, lost, reserve));

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
