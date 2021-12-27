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

    let front = +frontLong + +frontShort;
    let back = +backLong + +backShort;
    const over =
      back.toString().length > backLong.length ? back.toString()[0] : null;

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

\+ [12/17]

`reduce()`를 사용하는 법을 생각해봤다

```js
/*
1. 더 긴숫자를 찾아 긴숫자를 long, 짧은 숫자를 short에 저장한다
2. reduce로 계속 더한다
  2-1. 일의 자리부터 더하기 위해 `reverse()`를 사용하여 long, short을 뒤집는다
  2-2. 더할 때 short은 해당 자릿수가 없을 수 있으므로 ternary operator를 사용한다
  2-3. 한자릿수 + 한자릿수 이므로 가장 큰 숫자의 조합은 9 + 9, 결국 아무리 큰 숫자여도 자릿수는 최대 1이 증가할 수 있다
  2-4. 자릿수가 증가하는 것을 확인하고 증가했다면 잘라서 더해주고, 나머지 뒷부분을 이어준다
  2-5. 자릿수가 증가하지 않았다면 그냥 이어준다
3. 모든 과정이 다 끝났다면 return 해준다
*/
```

나도 꽤나 획기적인 방법으로 풀었다고 생각했지만 더 획기적인 방법으로 풀어낸 사람이 있었다

```js
function add(a, b) {
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
```

`javascript`는 동적언어여서 `true == 1`, `false == 0`이다

따라서 `true += 1 === 2`임을 이용하였다(가장 큰 수의 조합을 더해도 `9 + 9 === 18`이므로 한 자릿수 높은 숫자에 영향을 줄 수 있는 수는 `0` 혹은 `1`밖에 없다는 점을 활용한 코드다)

그리고 `bitwise not(~)`을 사용하여 만약 `pop()`이 없을 때 `undefined`를 return하는데 `~undefined === -1`, `~~undefined === 0` 인 것을 이용하여 `0`혹은 `원래 숫자`임을 표현했다

`while`문을 중단하기 위해서는 `or`을 이용하여 모두 `false`가 됐을 때 멈추도록 설정해두었다