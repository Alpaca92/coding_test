function solution(strings, n) {
  strings.sort((a, b) => {
    if (!a[n].localeCompare(b[n])) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });
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
