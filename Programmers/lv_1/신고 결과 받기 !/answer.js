function solution(id_list, report, k) {
  const reportSet = [...new Set(report)];
  const bannedList = id_list.reduce((banned, id) => {
    const regex = new RegExp(` ${id}`);
    const reportedCounter = reportSet.filter((el) => regex.test(el)).length;

    if (reportedCounter >= k) return [...banned, id];
    return banned;
  }, []);

  return id_list.reduce((result, id, i) => {
    const regex = new RegExp(`${id} `);
    const reportedList = reportSet
      .filter((el) => regex.test(el))
      .map((el) => el.split(" ")[1]);

    if (reportedList.length === 0) {
      result[i] = 0;
      return result;
    }

    bannedList.forEach((banned) => {
      result[i] = (result[i] || 0) + (reportedList.includes(banned) ? 1 : 0);
    });

    return result;
  }, []);
}

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);

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
