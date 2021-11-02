function isPangram(string) {
  if (string.match(/[a-z]/gi)) {
    const alpabets = string
      .match(/[a-z]/gi)
      .map((alpabet) => alpabet.toLowerCase());

    return [...new Set(alpabets)].length === 26 ? true : false;
  }
  return false;
}

/*
examples

<case 1>
string = 'The quick brown fox jumps over the lazy dog.'

result = true

<case 2>
string = This is not a pangram.

result = false
*/
