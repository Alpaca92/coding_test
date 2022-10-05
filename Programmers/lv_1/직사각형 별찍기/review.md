### [직사각형 별찍기](https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript)

```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  
  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
});
```

이전에 풀었던 방식인데 좀 더 깔끔하게 풀어보고자 한다