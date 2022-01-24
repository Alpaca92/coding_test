function solution(people, limit) {
  people.sort((a, b) => b - a);

  let result = 0;
  let leftIndex = 0;
  let rightIndex = people.length - 1;

  while (leftIndex <= rightIndex) {
    const rest = limit - people[leftIndex];

    if (rest >= people[rightIndex]) --rightIndex;

    ++leftIndex;
    ++result;
  }

  return result;
}

/*
examples

<case 1>
people = [70, 50, 80, 50]
limit = 100

return = 3

<case 2>
people = [70, 80, 50]
limit = 100

return = 3
*/
