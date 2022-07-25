function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const setReport = Array.from(new Set([...report]));
  const reportedList = setReport.map((content) => content.split(" ")[1]);
  reportedList.reduce((counter, person) => {
    counter[person] = counter[person] ? counter[person] + 1 : 1;

    if (counter[person] === k) {
      const regex = new RegExp(` ${person}$`);
      const feedbackable = setReport.filter((content) => regex.test(content));

      feedbackable.forEach((content) => {
        const id = content.split(" ")[0];
        const index = id_list.indexOf(id);

        ++result[index];
      });
    }

    return counter;
  }, {});

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
