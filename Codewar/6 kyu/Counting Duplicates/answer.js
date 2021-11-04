function duplicateCount(text) {
  let lowerCaseText = "";

  if (text.length) {
    lowerCaseText = text.map((char) => char.toLowerCase());
  } else {
    return 0;
  }

  const charactors = [...new Set([...lowerCaseText])];
  const result = [];

  for (const charactor of charactors) {
    const regex = new RegExp(charactor, "gi");

    result.push({ charactor, count: text.match(regex).length });
  }

  result.sort((a, b) => b.count - a.count);

  return result[0].count;
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
