### [문자열 다루기 기본](https://school.programmers.co.kr/learn/courses/30/lessons/12918)

```js
function solution(s) {
  if (s.search(/[^0-9]/gi) === -1) {
    if (s.length === 4 || s.length === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

예전에도 정규표현식을 사용했고 지금도 정규표현식을 사용해서 풀었지만 길이에 대한 표현까지 정규표현식에 넣을 생각을 하지 못했다

다른 사람의 풀이를 보면

```js
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
```

굉장히 간결하면서 정확하게 의미전달이 되는 정규표현식이다

또, `test`를 사용한 것도 굉장히 인상깊다
