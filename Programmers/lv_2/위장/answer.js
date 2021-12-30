function solution(clothes) {
  const classify = {};

  for (const [name, type] of clothes) {
    if (classify[type] === undefined) {
      classify[type] = 1;
    } else {
      ++classify[type];
    }
  }

  let answer = 1;

  for (const key in classify) {
    answer *= classify[key] + 1;
  }

  return answer - 1;
}

/*
examples

<case 1>
clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]

return = 5

<case 2>
clothes = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]

return = 3
*/
