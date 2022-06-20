function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const removedDuplication = [...new Set([...report])];

  id_list.forEach((id) => {
    const reportedList = removedDuplication.filter((content) =>
      content.endsWith(` ${id}`)
    );

    if (reportedList.length >= k) {
      reportedList.forEach((reported) => {
        const [reporter] = reported.split(" ");
        const index = id_list.indexOf(`${reporter}`);

        ++result[index];
      });
    }
  });

  return result;
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
