function solution(n, arr1, arr2) {
  const a = arr1.map((num, i) => {
    const fristMapRow = num.toString(2);
    const secondMapRow = arr2[i].toString(2);

    let row = "";

    [...fristMapRow].forEach((digit, j) => {
      row += +digit + +secondMapRow[j] === 0 ? " " : "#";
    });

    return row;
  });
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
