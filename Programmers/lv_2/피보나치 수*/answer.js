function solution(n) {
  return Math.round(
    ((((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) /
      Math.sqrt(5)) %
      1234567
  );
}

/*
pseudo code

fib = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

n >= 2 일떄

fib(0) + fib(1) = fib(2)
fib(1) + fib(2) = fib(3)
fib(2) + fib(3) = fib(4)
fib(3) + fib(4) = fib(5)
fib(4) + fib(5) = fib(6)
...
fib(n-2) + fub(n-1) = fib(n)
------------------------
fib(0) + 2 * (fib(1) + fib(2) + fib(3) + fib(4) + ... + fib(n-2) ) + fib(n-1) === fib(2) + fib(3) + fib(4) + fib(5) + ... + fib(n)
fib(0) + 2 * (fib(1) + fib(2) + fib(3) + fib(4) + ... + fib(n-3) ) + fib(n-2) === fib(2) + fib(3) + fib(4) + fib(5) + ... + fib(n - 1)
------------------------

---

1234567 === 127 * 9721 (둘 다 소수임)

*/

/*
examples

<case 1>
n = 3

return = 2

<case 2>
n = 5

return = 5
*/
