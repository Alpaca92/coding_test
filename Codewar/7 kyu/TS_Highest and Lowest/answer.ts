export class Kata {
  static highAndLow(numbers: string): string {
    const numbersArr: number[] = numbers.split(' ').map(number => +number);
    const highest: number = Math.max(...numbersArr);
    const lowest: number = Math.min(...numbersArr);

    return `${highest} ${lowest}`;
  }
}

/*
examples

<case 1>
numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"

result = "42 -9"

<case 2>
numbers = "1 2 3"

result = "3 1"
*/