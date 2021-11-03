function isSquareRoot(num) {
  return Math.sqrt(num) === Math.ceil(Math.sqrt(num)) ? true : false;
}

function findNextSquare(sq) {
  if (isSquareRoot(sq)) {
    for (let i = sq + 1; ; i++) {
      if (isSquareRoot(i)) return i;
    }
  }

  return -1;
}

/*
examples

<case 1>
sq = 121

return = 144,

<case 2>
sq = 625

return = 676,

<case 3>
sq = 319225

return = 320356,

<case 4>
sq = 15241383936

return = 15241630849,

<case 5>
sq = 155

return = -1

<case 6>
sq = 342786627

return = -1
*/
