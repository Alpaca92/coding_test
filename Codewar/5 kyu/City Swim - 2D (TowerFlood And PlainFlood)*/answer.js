function rainVolume(towers) {
  let result = 0;

  towers.reduce((prev, cur, i, origin) => {
    if (
      cur >= (origin[i - 1] !== undefined ? origin[i - 1] : 0) &&
      cur >= (origin[i + 1] !== undefined ? origin[i + 1] : 0)
    ) {
      prev.push(i);

      if (prev.length === 2) {
        if (prev[1] - prev[0] !== 1) {
          const min =
            origin[prev[0]] <= origin[prev[1]]
              ? origin[prev[0]]
              : origin[prev[1]];

          origin
            .slice(prev[0] + 1, prev[1])
            .map((height) => (result += min - height));
        }

        prev.shift();
      }
    }

    return prev;
  }, []);

  return result;
}

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
