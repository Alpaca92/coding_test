function solution(a, b) {
  const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const lastDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return days[
    (lastDays.slice(0, a - 1).reduce((prev, cur) => prev + cur, 0) + b) % 7
  ];
}
