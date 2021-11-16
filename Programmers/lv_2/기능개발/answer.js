function solution(progresses, speeds) {
  const answer = {};
  let day = 1;

  while (progresses.length > 0) {
    progresses = progresses.map((progress, idx) => progress + speeds[idx]);

    while (progresses[0] >= 100) {
      answer[`day_${day}`] = answer[`day_${day}`]
        ? answer[`day_${day}`] + 1
        : 1;

      progresses.shift();
      speeds.shift();
    }

    ++day;
  }

  return Object.values(answer);
}

/*
examples

<case 1>
progresses = [93, 30, 55]
speeds = [1, 30, 5]

return = [2, 1]

<case 2>
progresses = [95, 90, 99, 99, 80, 99]
speeds = [1, 1, 1, 1, 1, 1]

return = [1, 3, 2]
*/
