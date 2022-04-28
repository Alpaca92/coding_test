function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];

  return input.reduce(
    (acc, cur) => {
      if (cur > 0) {
        acc[0] += 1;
      } else if (cur < 0) {
        acc[1] += cur;
      }

      return acc;
    },
    [0, 0]
  );
}
