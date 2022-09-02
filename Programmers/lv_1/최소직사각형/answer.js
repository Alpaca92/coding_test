function solution(sizes) {
  const walletSize = sizes.reduce(
    (prev, cur) => {
      if (cur[0] < cur[1]) cur = [cur[1], cur[0]];

      return [Math.max(prev[0], cur[0]), Math.max(prev[1], cur[1])];
    },
    [0, 0]
  );

  return walletSize[0] * walletSize[1];
}
