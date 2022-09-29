### [핸드폰 번호 가리기](https://school.programmers.co.kr/learn/courses/30/lessons/12948)

```js
function solution(phone_number) {
    const STAR_LENGTH = phone_number.length - 4;
    const FOUR_DIGITS_FROM_THE_END = phone_number.slice(-4);
    
    const STARS = '*'.repeat(STAR_LENGTH);

    var answer = STARS + FOUR_DIGITS_FROM_THE_END;
    return answer;
}
```

이전의 답을 보면 자바스크립트에 대한 이해도가 많이 떨어졌던 것을 새삼 느낀다

지금도 물론 잘하는 건 아니라고 생각하지만 꽤 많은 발전을 이룩했다고 생각한다

이번에 새로 풀어본 방식은 정규표현식이다

정규표현식을 배우면서 모호했던 `\b`, `\B`에 대해서 좀 더 명확하게 알 수 있었다 [ref](https://ohgyun.com/392)