function numberOfPairs(gloves) {
  return Object.values(
    gloves.reduce((prev, cur) => {
      prev[cur] = prev[cur] ? prev[cur] + 1 : 1;

      return prev;
    }, {})
  ).reduce((prev, cur) => {
    if (cur >= 2) {
      return prev + Math.floor(cur / 2);
    } else {
      return prev;
    }
  }, 0);
}

/*
examples

<case 1>
gloves = ['red','red']

return = 1

<case 2>
gloves = ['red','green','blue']

return = 0

<case 3>
gloves = ['gray','black','purple','purple','gray','black']

return = 3
*/
