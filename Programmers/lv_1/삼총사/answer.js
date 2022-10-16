function getCombinations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, arr) => {
    const new_arr = arr.slice(index + 1);
    const combination = getCombinations(new_arr, selectNumber - 1);

    const attached = combination.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

function solution(number) {
  return getCombinations(number, 3)
    .map((combination) => {
      const [a, b, c] = combination;
      return a + b + c;
    })
    .filter((sum) => sum === 0).length;
}
