function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .match(/[\.]|[-]|[_]|[\w]/g)
    .join("")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");

  if (id.length === 0) {
    return "aaa";
  } else if (id.length > 15) {
    return id.slice(0, 15).replace(/\.$/g, "");
  } else if (id.length <= 2) {
    const lastChar = id[id.length - 1];
    return `${id}${lastChar}${lastChar}`.slice(0, 3);
  }
  return id;
}

/*
examples

<case 1>
new_id = "...!@BaT#*..y.abcdefghijklm"

result = "bat.y.abcdefghi"

<case 2>
new_id = "z-+.^."

result = "z--"

<case 3>
new_id = "=.="

result = "aaa"

<case 4>
new_id = "123_.def"

result = "123_.def"

<case 5>
new_id = "abcdefghijklmn.p"

result = "abcdefghijklmn"
*/
