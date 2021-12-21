function solution(numbers) {
  const result = numbers.sort((a, b) => {
    const repeatA = a.toString().repeat(4).slice(0, 4);
    const repeatB = b.toString().repeat(4).slice(0, 4);

    return +repeatB - +repeatA;
  }).map(number => number.toString()).join('');
    
  return +result === 0 ? '0' : result;
}

/*
examples

<case 1>
numbers = [6, 10, 2]

return = "6210"

<case 2>
numbers = [3, 30, 34, 5, 9]

return = "9534330"
*/
