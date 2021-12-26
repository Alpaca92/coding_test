function add(a, b) {
  const long = a > b ? a : b;
  const short = a > b ? b : a;

  if (long <= 10 ** 10) {
    return (+a + +b).toString();
  } else {
    const separationIdx = Math.floor(long.length / 2);
    const longLength = long.length;
    const shortLength = short.length;

    const frontLong = long.slice(0, longLength - separationIdx);
    const backLong = long.slice(longLength - separationIdx);
    const frontShort = short.slice(0, shortLength - separationIdx);
    const backShort = short.slice(shortLength - separationIdx);

    let front = +frontLong + (+frontShort);
    let back = +backLong + (+backShort);
    const over = back.toString().length > backLong.length ? back.toString()[0] : null;

    if (over) {
      front += +over;
      back = back.toString().slice(1);

      return front.toString() + back.toString();
    }

    return front.toString() + back.toString();
  }
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
