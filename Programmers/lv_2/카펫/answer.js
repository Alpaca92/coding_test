function solution(brown, yellow) {
  let width = 3;
  let height = 3;

  while (width >= height) {
    const area = (brown + 4) / 2;
    width = area - height;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    } else {
      ++height;
    }
  }
}

/*
examples

<case 1>
brown = 10
yellow = 2

return = [4, 3]

<case 2>
brown = 8
yellow = 1

return = [3, 3]

<case 3>
brown = 24
yellow = 24

return = [8, 6]
*/
