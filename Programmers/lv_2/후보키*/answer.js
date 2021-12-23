function solution(relation) {
  let result = 0;
  const exception = [];
  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      results.push(...attached);
    });

    return results;
  };

  for (let i = 1; i < relation[0].length; i++) {
    
  }
}

/*
examples

<case 1>
relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]

result = 2
*/