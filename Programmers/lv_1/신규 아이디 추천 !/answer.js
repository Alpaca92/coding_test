function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .match(/[\.]|[-]|[_]|[\w]/g);

  if (id.length === 0) {
    return "aaa";
  } else if (id.length > 15) {
    id.splice(15);
    return id.join("").replace(/\.$/g, "");
  } else if (id.length <= 2) {
    const lastChar = id[id.length - 1];
    return [...id, lastChar, lastChar].slice(0, 3).join("");
  }
  return id.join("");
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
