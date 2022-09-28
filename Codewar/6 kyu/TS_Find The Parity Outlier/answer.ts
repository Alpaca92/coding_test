export function findOutlier(integers: number[]): number {
  const odds: number[] = integers.filter((integer) => integer % 2);

  return odds.length === 1
    ? odds[0]
    : integers.filter((integer) => !(integer % 2))[0];
}

/*
examples

<case 1>
integers = [0, 1, 2]

result = 1

<case 2>
integers = [1, 2, 3]

result = 2

<case 3>
integers = [2, 6, 8, 10, 3]

result = 3

<case 4>
integers = [0, 0, 3, 0, 0]

result = 3

<case 5>
integers = [1, 1, 0, 1, 1]

result = 0
*/
