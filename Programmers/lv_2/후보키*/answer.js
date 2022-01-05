function solution(relation) {
  const getCombinations = (arr, select) => {
    if (select === 1) return arr.map((el) => [el]);

    let results = [];

    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, --select);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);

      results.push(...attached);
    });

    return results;
  };

  // inside loop
  const indexes = relation[0].reduce((prev, cur, idx) => {
    if (!cur) return prev;

    return [...prev, idx];
  }, []);

  const combinations = getCombinations(indexes, 1);
}

/*
examples

<case 1>
relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]

result = 2
*/

/*
pseudo code

후보키로 가능하다면 삭제한다

ex. 학번으로 후보키로 가능

[undefined, "ryan", "music", "2"]
[undefined, "apeach", "math", "2"]
[undefined, "tube", "computer", "3"]
[undefined, "con", "computer", "4"]
[undefined, "muzi", "music", "3"]
[undefined, "apeach", "music", "2"]

ex. 이름-전공으로 후보키 가능

[undefined, undefined, undefined, "2"]
[undefined, undefined, undefined, "2"]
[undefined, undefined, undefined, "3"]
[undefined, undefined, undefined, "4"]
[undefined, undefined, undefined, "3"]
[undefined, undefined, undefined, "2"]

더 이상 만들 수 있는 후보키가 없음 (이미 1가지로 만들 수 있는 후보키, 2가지로 만들 수 있는 후보키를 검증하고 왔으므로 최소한 3개의 element가 필요함)

---

*/
