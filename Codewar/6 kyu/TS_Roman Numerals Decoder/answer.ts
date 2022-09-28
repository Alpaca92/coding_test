interface Symbol {
  [key: string]: number
}

export function solution(roman: string): number {
  const symbol: Symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const romanArr: string[] = [...roman];
  const result:number = romanArr.reduce((prev, cur, i, origin) => {
    if (symbol[cur] >= (symbol[origin[i + 1]] || 0)) return prev + (+symbol[cur]);
    return prev - (+symbol[cur]);
  }, 0)

  return result;
}