### [Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/typescript)

문제를 보자마자 filter를 사용해야겠다는 생각이 들었다

그리 어려운 문제는 아니지만 최소 3개의 숫자가 들어있다는 점에 착안하여 아래와 같이 좀 더 좋은 방법을 찾아볼 수 있을 것 같다

```ts
export function findOutlier(integers: number[]): number {
  if (integers.slice(0, 3).filter(i => i % 2 !== 0).length > 1) {
    return integers.find(v => v % 2 === 0) || 0;
  } else {
    return integers.find(v => v % 2 !== 0) || 0;
  }
}
```