export class G964 {

  public static digPow = (n: number, p: number): number => {
    const nPowP: number = [...n.toString()].reduce((prev, cur, i) => prev + ((+cur) ** (p + i)), 0);

    return Number.isInteger(nPowP / n) ? nPowP / n : -1
  }
}