function solution(id_list, report, k) {
  const result = {};
  const reportedList = id_list.reduce((list, id) => {
    const regex = new RegExp(` ${id}`);
    const reporters = report
      .filter((el) => regex.test(el))
      .map((el) => el.split(" ")[0]);

    return { ...list, [id]: [...new Set(reporters)] };
  }, {});

  Object.entries(reportedList).forEach(([reportedName, reporters]) => {
    if (reporters.length >= k)
      reporters.forEach(
        (reporter) => (result[reporter] = (result[reporter] || 0) + 1)
      );
  });
}

/*
examples

<case 1>
id_list = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
k = 2

result = [2,1,1,0]

<case 2>
id_list = ["con", "ryan"]
report = ["ryan con", "ryan con", "ryan con", "ryan con"]
k = 3

result = [0,0]
*/
