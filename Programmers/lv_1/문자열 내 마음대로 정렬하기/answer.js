function solution(strings, n) {
  if (strings.length === 1) return strings;

  strings.sort();
  return strings.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}

/*
examples

<case 1>
strings = ["sun", "bed", "car"]
n = 1

result = ["car", "bed", "sun"]

<case 1>
strings = ["abce", "abcd", "cdx"]
n = 2

result = ["abcd", "abce", "cdx"]
*/