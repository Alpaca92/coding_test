function add(a, b) {
  const long = [...(a.length >= b.length ? a : b)].reverse();
  const short = [...(a.length >= b.length ? b : a)].reverse();

  return long.reduce((prev, cur, idx) => {
    const sum = +cur + +(short[idx] ? short[idx] : 0) // number
    const over = prev.length === idx + 1 ? +prev[0] : null; // number

    if (over) {
      const result = sum + over; // number
      return result.toString() + prev.slice(1);
    }

    return sum.toString() + prev;
  }, "");
}

/*
examples

<case 1>
a = "1"
b = "1"

return = "2"

<case 2>
a = "123"
b = "456"

return = "579"

<case 3>
a = "888"
b = "222"

return = "1110"

<case 4>
a = "1372"
b = "69"

return = "1441"

<case 5>
a = "12"
b = "456"

return = "468"

<case 6>
a = "101"
b = "100"

return = "201"

<case 7>
a = '63829983432984289347293874'
b = '90938498237058927340892374089'

return = "91002328220491911630239667963"
*/

function add1(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

a = "1372"
b = "69"
console.log(add1(a, b))