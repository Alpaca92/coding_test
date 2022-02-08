function solution(number, k) {
  if ([...number].sort((a, b) => b - a).join("") === number)
    return number.slice(0, number.length - k);

  const numberArray = [...number];
  let removedNumber = null;

  while (k !== 0) {
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] < numberArray[i + 1]) {
        removedNumber = numberArray.splice(i, 1)[0];
        --k;

        break;
      }
    }

    if (removedNumber === null) {
      numberArray.pop();
      --k;
    }

    removedNumber = null;
  }

  return numberArray.join("");
}

/*
examples

<case 1>
number = "1924"
k = 2

return = "94"

<case 2>
number = "1231234"
k = 3

return = "3234"

<case 3>
number = "4177252841"
k = 4

return = "775841"
*/
