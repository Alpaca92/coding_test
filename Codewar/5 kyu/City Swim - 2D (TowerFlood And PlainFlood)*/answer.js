function rainVolume(towers) {
  return towers.reduce(
    (acc, cur, i, origin) => {
      if (cur >= origin[i + 1] || origin[i + 1] === undefined) {
        acc.max.push(i);

        if (acc.max.length === 2) {
          const min = Math.min(origin[acc.max[0]], origin[acc.max[1]]);
          const heights = origin.slice(acc.max[0] + 1, acc.max[1]);

          heights.forEach(
            (height) => (acc.result += min - height > 0 ? min - height : 0)
          );
          acc.max.shift();
        }
      }

      return acc;
    },
    { result: 0, max: [] }
  ).result;
}

/*
pseudo code


*/

/*
examples

<case 1>
towers = []

return = 0

<case 2>
towers = [5,2,10]

return = 3

<case 3>
towers = [1,0,5,2,6,3,10]

return = 7

<case 4>
towers = [15,0,6,10,11,2,5]

return = 20

<case 5>
towers = [1,5,1]

return = 0

<case 6>
towers = [6,5]

return = 0
*/
