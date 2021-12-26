### [Adding Big Numbers](https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript)

```js
/*
pseudo code

큰 숫자는 BigInt()로 처리한다
BigInt는 BigInt끼리만 연산이 가능하다
두 숫자를 더하고 toString()으로 return
*/
```

`별거 없네`라고 생각하고 쉽게 `BigInt`처리를 했는데

```js
function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
```

이 문제의 포인트는 **`BigInt`가 지원되지 않을때**를 어떻게 해결할 것인가였다

```js
/*
pseudo code

1. 긴 숫자의 length를 파악한다
2. 긴 숫자는 해당 Math.floor(length / 2)부터 마지막까지 자른다
3. 짧은 숫자는 짧은 숫자의 length - Math.floor(length / 2)부터 마지막까지 자른다
4. 2, 3번으로 생긴 긴 숫자의 앞뒤, 짧은 숫자의 앞뒤를 앞 + 앞, 뒤 + 뒤해주고
  4-1. 뒤 + 뒤의 length가 변했다면(1 증가했다면 그걸 잘라서 앞 + 앞에서 나온 숫자와 더해준다)
5. 앞 + 앞에서 나온 숫자와 뒤 + 뒤에서 나온 숫자를 이어서 return 해준다
*/
```

```js
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
```

위와 같이 코드를 짰는데 예제 코드는 통과하였지만 더 큰 숫자 `ex. 1057853509440367665682450458794866464501746580388666517943654`는 `1.0578535094403677e+308.664645017465803e+29`같이 나와 실패하였다

좀 더 획기적인 방법을 찾아야 할 것 같은데 아마 재귀에 관련된 방법 혹은 reduce를 사용하는 방법을 고안해봐야겠다

