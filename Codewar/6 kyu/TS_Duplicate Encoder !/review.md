### [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript)

잘 모르는 영역이 되면 코드가 조잡해진다

딱 지금 내가 타입스크립트로 코딩을 할 때 그런 것 같다

괜찮은 답안을 보면

```ts
export function duplicateEncode(word: string){
  return word
  .toLowerCase()
  .split('')
  .map((a, i, w) => {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  })
  .join('')
}
```

첫 인덱스와 마지막 인덱스가 같으면 하나밖에 없다는 점을 이용한 코드이다

이런 식의 좀 더 명확하고 깔끔한 코드를 짜기 위해 노력해야겠다