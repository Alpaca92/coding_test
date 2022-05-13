function getrainVolume(towers, start, end) {
  let volume = 0;

  const min = Math.min(towers[start], towers[end]);
  const rows = towers.slice(start + 1, end);

  for (const row of rows) {
    volume += min - row;
  }

  return volume;
}

function rainVolume(towers) {
  if (towers.length < 3) return 0;

  let volume = 0;
  let high;
  let startDescending = false;

  for (let i = 0; i < towers.length; ++i) {
    if (!startDescending && towers[i] > towers[i + 1]) {
      startDescending = true;

      if (high !== undefined) {
        volume += getrainVolume(towers, high, i);

        high = i;
      } else {
        high = i;
      }
    } else if (startDescending && towers[i] < towers[i + 1]) {
      startDescending = false;
    } else if (!startDescending && i === towers.length - 1) {
      volume += getrainVolume(towers, high, i);

      return volume;
    }
  }

  return volume;
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
