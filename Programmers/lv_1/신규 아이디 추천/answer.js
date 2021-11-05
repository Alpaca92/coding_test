function solution(new_id) {
  // new_id === ""를 걸러 line 5부터의 에러를 미연에 방지
  if (!new_id) return "aaa";

  new_id = new_id
    .toLowerCase() // 1
    .match(/[\w\d._-]/g) // 2
    .join("")
    .replace(/(\.)\1+/g, ".") // 3
    .replace(/^\.|\.$/g, " ") // 4
    .trim();

  if (!new_id) {
    return "aaa";
  } else if (new_id.length <= 2) {
    while (new_id.length <= 2) {
      new_id = new_id + new_id[new_id.length - 1];
    }

    return new_id;
  } else if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);

    return new_id.endsWith(".") ? new_id.slice(0, 14) : new_id;
  }

  return new_id;
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
