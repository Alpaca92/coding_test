### [Pascal's Diagonals](https://www.codewars.com/kata/576b072359b1161a7b000a17/train/javascript)

![파스칼 삼각형](https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTNfMTc5/MDAxNDg2OTg0MjEyNDU4.nhoXYjsaB1-j-kMxJhVzdtGx4BG-z9GSjuxiPbGbIr8g.N42NHAEycDlWk2W2iiBt7y4mrH2-GriWImbUpMbVhaQg.GIF.vollollov/0212_3.gif?type=w800)

위 그림에서 아이디어를 얻어 의사코드를 작성했다 _[출처](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=vollollov&logNo=220947452823)_

```js
/*
pseudo code

if (n === 0) return new Array(l).fill(1);

[nCn, n+1Cn, ..., n+l-1Cn] 을 구현하면 됨

1. 팩토리얼을 구현하는 함수를 만든다
2. (n+l-1)Cn === (n+l-1)C((n+l-1) - n) === (n+l-1)C(l-1) (l-1 === new Array(l).length - 1 === idx)
*/
```

`permutation`의 계산은 `nPr === n! / (n-r)!`이고, `combination`의 계산은 `nCr === n! / ((n-r)! * r!)`이므로 이를 바탕으로 재귀함수를 구현했다

답은 다 맞췄지만 통과는 하지 못했다

답에는 `780 ~= 780.0000000000001`과 같이 소수점 처리가 되지 않은 것들이 즐비했는데 그래서 통과를 하지 못했다

아마 한번에 계산하지 않고 계속 나누고 곱하고를 반복하지 않았나 싶다
