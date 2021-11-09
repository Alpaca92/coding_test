function rgb(r, g, b) {
  return [r, g, b]
    .map((number) => {
      if (number >= 255) {
        return "FF";
      } else if (number <= 0) {
        return "00";
      } else if (number < 16) {
        return `0${number.toString(16)}`;
      } else {
        return number.toString(16);
      }
    })
    .join("")
    .toUpperCase();
}

/*
examples

<case 1>
r = 0
g = 0
b = 0

return = '000000'

<case 2>
r = 0
g = 0
b = -20

return = '000000'

<case 3>
r = 300
g = 255
b = 255

return = 'FFFFFF'

<case 4>
r = 173
g = 255
b = 47

return = 'ADFF2F'
*/
