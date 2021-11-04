function deleteNth(arr, n) {
  const pictures = {};

  arr.map((number) => {
    if (!(number in pictures)) {
      return (pictures[`${number}`] = 1);
    } else {
      return pictures[`${number}`] < n ? ++pictures[`${number}`] : 0;
    }
  });

  return arr.filter((number) => {
    if (pictures[`${number}`] !== 0) {
      --pictures[`${number}`];

      return true;
    }
    return false;
  });
}

/*
examples

<case 1>
arr = [20,37,20,21]
n = 1

return = [20,37,21]

<case 2>
arr = [1,1,3,3,7,2,2,2,2]
n = 3

return = [1, 1, 3, 3, 7, 2, 2, 2]
*/
