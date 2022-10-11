function solution(n, arr1, arr2) {
  return arr1.map((num, i) => {
    const first =
      num.toString(2).length === n
        ? num.toString(2)
        : "0".repeat(n - num.toString(2).length) + num.toString(2);
    const second =
      arr2[i].toString(2).length === n
        ? arr2[i].toString(2)
        : "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);

    let row = "";

    [...first].forEach((digit, j) => {
      row += +digit + +second[j] === 0 ? " " : "#";
    });

    return row;
  });
}
