function solution(lottos, win_nums) {
  const illegibleNumbers = lottos.filter((lotto) => lotto === 0).length;
  const matchedNumbers = win_nums.reduce(
    (acc, cur) => (acc += lottos.includes(cur) ? 1 : 0),
    0
  );

  const highestRank =
    !illegibleNumbers && !matchedNumbers
      ? 6
      : 7 - (illegibleNumbers + matchedNumbers);
  const lowestRank = !matchedNumbers ? 6 : 7 - matchedNumbers;

  return [highestRank, lowestRank];
}

/*
examples

<case 1>
lottos = [44, 1, 0, 0, 31, 25]
win_nums = [31, 10, 45, 1, 6, 19]

result = [3, 5]

<case 2>
lottos = [0, 0, 0, 0, 0, 0]
win_nums = [38, 19, 20, 40, 15, 25]

result = [1, 6]

<case 3>
lottos = [45, 4, 35, 20, 3, 9]
win_nums = [20, 9, 3, 45, 4, 35]

result = [1, 1]
*/

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
