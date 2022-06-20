function solution(id_list, report, k) {
  const result = id_list.reduce((prev, cur) => ({ ...prev, [cur]: 0 }), {});
  const usableReportList = [];
  const removedDuplication = [...new Set([...report])];

  id_list.forEach((id) => {
    const filteredReport = removedDuplication.filter((content) =>
      content.endsWith(` ${id}`)
    );
    const isUsable = filteredReport.length >= k;

    if (isUsable) usableReportList.push(filteredReport);
  });

  usableReportList.flat().forEach((usableReport) => {
    const [reporter] = usableReport.split(" ");

    ++result[reporter];
  });

  return Object.values(result);
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
