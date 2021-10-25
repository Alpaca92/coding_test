function rankingCalculator(lottos, win_nums) {
  let counter = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) counter++;
    continue;
  }

  return counter;
}

function solution(lottos, win_nums) {
  const sortedLottos = lottos.sort((a, b) => b - a);
  const idx = sortedLottos.indexOf(0);
  let result = [];

  if (idx !== -1) {
    // 0이 하나라도 있을 때
    const unknownNumbers = sortedLottos.slice(idx).length;
    const knownNumbers = sortedLottos.slice(0, idx);
    const MIN_WIN_NUMS =
      knownNumbers.length !== 0 ? rankingCalculator(knownNumbers, win_nums) : 0;

    result = [MIN_WIN_NUMS + unknownNumbers, MIN_WIN_NUMS];
  } else {
    // 0이 하나도 없을 때
    const MIN_WIN_NUMS = rankingCalculator(sortedLottos, win_nums);

    result = [MIN_WIN_NUMS, MIN_WIN_NUMS];
  }

  return result.map((num) => {
    // 맞춘게 0개거나 1개면 6등
    if (num === 0 || num === 1) return 6;

    return 7 - num;
  });
}
