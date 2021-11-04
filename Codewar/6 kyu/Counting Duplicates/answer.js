function duplicateCount(text) {
  const charactors = {};

  if (text) {
    text = text.toLowerCase().split("");
  } else {
    return 0;
  }

  return new Set(
    text.filter((char) => {
      charactors[char] = (charactors[char] || 0) + 1;

      return charactors[char] > 1;
    })
  ).size;
}

/*
examples

<case 1>
text = ""

return = 0

<case 2>
text = "abcde"

return = 0

<case 3>
text = "aabbcde"

return = 2

<case 4>
text = "aabBcde"

return = 2

<case 5>
text = "Indivisibility"

return = 1

<case 6>
text = "Indivisibilities"

return = 2
*/
