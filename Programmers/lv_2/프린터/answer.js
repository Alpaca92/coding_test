function solution(priorities, location) {
  priorities = priorities.map((priority, idx) => {
    const obj = {};
    obj[`${idx}`] = priority;

    return obj;
  });

  const result = [];

  while (priorities.length) {
    if (
      priorities.find(
        (priority) =>
          Object.values(priority)[0] > Object.values(priorities[0])[0]
      )
    ) {
      const postponed = priorities.shift();
      priorities.push(postponed);
    } else {
      const printed = priorities.shift();
      result.push(printed);
    }
  }

  return result.map((item) => +Object.keys(item)[0]).indexOf(location) + 1;
}

/*
examples

<case 1>
priorities = [2, 1, 3, 2]
location = 2

return = 1

<case 2>
priorities = [1, 1, 9, 1, 1, 1]
location = 0

return = 5
*/
