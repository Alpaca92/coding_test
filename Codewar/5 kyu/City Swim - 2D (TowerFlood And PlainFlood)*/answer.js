function rainVolume(towers) {
  let result = 0;

  towers.reduce((prev, cur, i, origin) => {
    if (cur > origin[i + 1] && prev.rebound === undefined) {
      prev.start = prev.start ? prev.start : i;
    } else if (prev.start !== undefined && cur < origin[i + 1]) {
      prev.rebound = true;
    } else if (prev.rebound === true && cur > origin[i + 1]) {
      prev.end = i;
      const min = Math.min(origin[prev.start], origin[prev.end]);
      origin
        .slice(prev.start + 1, prev.end)
        .map((height) => (result += min - height));
      prev.start = prev.end;
      delete prev.rebound;
      delete prev.end;
    }

    return prev;
  }, {});
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
