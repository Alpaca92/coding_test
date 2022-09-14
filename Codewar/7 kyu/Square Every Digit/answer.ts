export class Kata {
  static squareDigits(num: number): number {
    const digits: string[] = num.toString().split('');
    const sqrtDigits: string[] = digits.map((digit) => Math.pow(+digit, 2).toString());

    return Number(sqrtDigits.join(''));
  }
}