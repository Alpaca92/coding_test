function solution(id_list, report, k) {
  const bannedList = id_list.reduce((list, id) => {
    const regex = new RegExp(`${id}$`);
    // 신고자[]
    // 만약 햔제 id가 밴이 됐으면
    // 각 신고자들의 카운트에 더함
  }, []);
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
