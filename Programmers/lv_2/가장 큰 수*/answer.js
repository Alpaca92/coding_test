function solution(numbers) {
  const MultipliersOfTen = numbers.filter((number) => !(number % 10));

  console.log(MultipliersOfTen);  
}

numbers = [3, 30, 34, 5, 9];

solution(numbers);

/*
examples

<case 1>
numbers = [6, 10, 2]

return = "6210"

<case 2>
numbers = [3, 30, 34, 5, 9]

return = "9534330"
*/
