export function SeriesSum(n:number):string {
    let result: number = 0;

    for (let i: number = 1; i <= ((3 * n) - 2);) {
      result += (1 / i);
      i += 3;
    }

  return result.toFixed(2);
}

/*
examples

<case 1>
n = 1

result = "1.00"

<case 2>
n = 2

result = "1.25"

<case 3>
n = 3

result = "1.39"

<case 4>
n = 4

result = "1.49"
*/