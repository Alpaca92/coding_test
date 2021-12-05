function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    const idx = str1.indexOf(str2[i]);

    if (idx === -1) {
      return false;
    } else {
      str1 = str1.slice(0, idx) + str1.slice(idx + 1);
    }
  }

  return true;
}

/*
examples

<case 1>
str1 = 'rkqodlw'
str2 = 'world'

return = true

<case 2>
str1 = 'cedewaraaossoqqyt'
str2 = 'codewars'

return = true

<case 3>
str1 = 'katas'
str2 = 'steak'

return = false

<case 4>
str1 = 'scriptjava'
str2 = 'javascript'

return = true

<case 5>
str1 = 'scriptingjava'
str2 = 'javascript'

return = true

<case 6>
str1 = 'scriptsjava'
str2 = 'javascripts'

return = true

<case 7>
str1 = 'jscripts'
str2 = 'javascript'

return = false

<case 8>
str1 = 'aabbcamaomsccdd'
str2 = 'commas'

return = true
*/

const str1 = "rkqodlw";
const str2 = "world";

console.log(scramble(str1, str2));
