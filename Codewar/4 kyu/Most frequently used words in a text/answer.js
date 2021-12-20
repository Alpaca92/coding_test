function topThreeWords(text) {
  let obj = {};
  const textArr = text
    .toLowerCase()
    .replace(/[^a-z ']/g, " ")
    .split(" ")
    .filter((word) => word);
  text = textArr.join(" ");

  if (text === "'") return [];

  textArr.forEach((word, idx) => {
    if (!obj[word]) {
      obj[word] = textArr.filter((text) => text === textArr[idx]).length;
    }
  });

  obj = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  return Object.keys(obj).slice(0, 3);
}

/*
examples

<case 1>
text = "a a a  b  c c  d d d d  e e e e e"

return = ['e','d','a']

<case 2>
text = "a a c b b"

return = ['a','b','c']

<case 3>
text = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

return = ['e','ddd','aa']

<case 4>
text = "  //wont won't won't "

return = ["won't", "wont"]

<case 5>
text = "  , e   .. "

return = ["e"]

<case 6>
text = "  ...  "

return = []

<case 7>
text = "  '  "

return = []

<case 8>
text = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

return = ['a','of','on']
*/

text = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

console.log(topThreeWords(text));
